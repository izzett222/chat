/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import ChatHeader from "./ChatHeader";
import ComposeMessage from "./ComposeMessage";
import Messages from "./Messages";

const ChatRoom = ({ user, selectedChat }) => {
    return <div css={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
        <ChatHeader selectedChat={selectedChat} />
        <Messages user={user} selectedChat={selectedChat} />
        <ComposeMessage user={user} selectedChat={selectedChat}  />
    </div>
}

export default ChatRoom;
