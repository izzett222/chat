/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import { Container, Root } from "./componets/lib";
import Menu from "./componets/Menu";
import ViewUser from "./componets/ViewUser";
import ChatRoom from "./componets/ChatRoom";
import * as auth from './auth-provider';
import Friends from "./componets/Friends";
import socket from "./utils/socket";
import PendingRequestPanel from "./componets/PendingRequestPanel";
import { useAsync } from './utils/hooks/useAsync';
import SideBar from "./componets/SideBar";
import SideBarMenu from "./componets/SideBarMenu";
import PendingRequest from './componets/PendingRequest';
import sortMessage from "./utils/sortMessage";
import PickChat from "./componets/PickChat";

const AuthorizedApp = ({ user, logout }) => {
    const { data: searchedUser, run: searchRun, setData: setSearchedUser } = useAsync();
    const [sideBarContent, setSideBarContent] = useState('menu');
    const [openSideBar, setOpenSideBar] = useState();
    const [users, setUsers] = useState([]);
    const [pendingRequest, setPendingRequest] = useState([]);
    const [chatId, setChatId] = useState(null);
    const selectedChat = users.find((user) => user.userId === chatId);
    const sortedUsers = sortMessage(users);

    useEffect(() => {
        socket.auth = { token: auth.getToken() };
        socket.connect();
        socket.on('users', (data) => {
            setUsers(data)
        })
        socket.on('pending_request', (data) => {
            setPendingRequest(data);
        })
        socket.on('FRIEND_ADDED', (data) => {
            let newUser = [...users];
            let newPendingRequest = [...pendingRequest].filter((request) => request.username !== data.username)
            newUser.push(data);
            setUsers(newUser);
            setPendingRequest(newPendingRequest);
        })
        socket.on('new request', (data) => {
            let newRequests = [...pendingRequest];
            newRequests.push(data);
            setPendingRequest(newRequests);
        })
        socket.on('private message', (data) => {
            let newUser = [...users];
            const otherChatParticipant = newUser.find((user) => {
                return user.userId.toString() === data.sender || user.userId.toString() === data.receiver
            })
            if (otherChatParticipant) {
                otherChatParticipant.message.push(data);
                setUsers(newUser);
            }
        })

        return () => {
            socket.off('users');
            socket.off('pending_request');
            socket.off('FRIEND_ADDED');
            socket.off('private message');
            socket.off('new request');
        }

    }, [pendingRequest, users]);

    const returnSideBarChildren = (content) => {
        switch (content) {
            case 'menu':
                return <SideBarMenu setSideBarContent={setSideBarContent} setOpen={setOpenSideBar} />
            case 'pending_request':
                return <PendingRequest setSideBarContent={setSideBarContent} request={pendingRequest} />
            default:
                return new Error(`${content} is not accepteed`)
        }
    }

    return <Root onClick={() => {
        setSearchedUser(null)
    }}>
        <Container>
            {openSideBar ? (<SideBar >
                {returnSideBarChildren(sideBarContent)}
            </SideBar>) : null
            }
            <section css={{ width: '305px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                {searchedUser ? <ViewUser searchedUser={searchedUser} user={user} /> : null}
                <Menu run={searchRun} setOpenSideBar={setOpenSideBar} />
                {pendingRequest.length ? <PendingRequestPanel requestNumber={pendingRequest.length} /> : null}
                <Friends users={sortedUsers} setChatId={setChatId} chatId={chatId} />
            </section>
            <section css={{ flexGrow: '1' }}>{selectedChat ? <ChatRoom selectedChat={selectedChat} user={user} /> : <PickChat />}</section>
        </Container>
    </Root>;
}

export default AuthorizedApp;