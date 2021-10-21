/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import { Container, Root } from "./componets/lib";
import Menu from "./componets/Menu";
import ViewUser from "./componets/ViewUser";
import * as auth from './auth-provider';
import Friends from "./componets/Friends";
import socket from "./utils/socket";
import PendingRequestPanel from "./componets/PendingRequestPanel";
import { useAsync } from './utils/hooks/useAsync';
import SideBar from "./componets/SideBar";
import SideBarMenu from "./componets/SideBarMenu";
import PendingRequest from './componets/PendingRequest';

const AuthorizedApp = ({ user, logout }) => {
    const { data: searchedUser, isLoading : searchLoading, isSuccess: isSearchSuccess, run: searchRun, setData: setSearchedUser} = useAsync();
    const [sideBarContent, setSideBarContent] = useState('menu');
    const [openSideBar, setOpenSideBar] = useState();
    const [users, setUsers] = useState([]);
    const [pendingRequest, setPendingRequest] = useState([]);
    useEffect(() => {
        socket.auth = {token: auth.getToken() };
        socket.connect();
        socket.on('session', data => {
            // console.log(data, '===================');
        })
        socket.on('users', (data) => {
            setUsers(data)
        })
        socket.on('pending_request', (data) => {
            setPendingRequest(data);
        } )
        socket.on('FRIEND_ADDED', (data) => {
            let newUser = [...users];
            let newPendingRequest = [...pendingRequest].filter((request) =>  request.username !== data.username)
            newUser.push(data);
            setUsers(newUser);
            setPendingRequest(newPendingRequest);
        })
    },[pendingRequest, users]);
    const returnSideBarChildren = (content) => {
        switch(content) {
            case 'menu': 
                return <SideBarMenu setSideBarContent={setSideBarContent} setOpen={setOpenSideBar} />
            case 'pending_request':
                return <PendingRequest setSideBarContent={setSideBarContent} request={pendingRequest} />
            default:
                return new Error(`${content} is not accepteed`)
    } 
}
    return <Root onClick={() => {
        setSearchedUser(null)}}>
        <Container>
        {openSideBar ? (<SideBar >
                            {returnSideBarChildren(sideBarContent)}
                        </SideBar>) : null
        }
        <section css={{width: '305px', display: 'flex', flexDirection: 'column', position: 'relative'}}>{searchedUser ? <ViewUser  searchedUser={searchedUser} user={user}/> : null}<Menu  run={searchRun} setOpenSideBar={setOpenSideBar} />{pendingRequest.length ? <PendingRequestPanel requestNumber={pendingRequest.length} /> : null}<Friends users={users} /></section>
        <section css={{flexGrow: '1', background: 'yellow'}}><p>{user.name} chat dashboard</p></section>
        </Container>
    </Root>;
}

export default AuthorizedApp;