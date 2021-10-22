/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { useLayoutEffect, useRef } from "react";

const Message = ({message, user}) => {
    return <p css={{
        background:  user.id.toString() !== message.sender.toString() ? '#EBECF0' : '#253858',
        color: user.id.toString() === message.sender.toString() ? 'white' : '#091E42',
        padding: '12px 16px',
        display: 'block',
        marginRight: user.id.toString() === message.sender.toString() ? '16px' : 'auto',
        marginLeft: user.id.toString() === message.sender.toString() ? 'auto' : '16px',
        border: '1px solid rgba(223, 225, 230, 0.9)',
        borderRadius:7,
        fontFamily: 'Roboto',
        maxWidth: 150,
        overflowWrap: 'break-word',
        marginTop: 0,
        

    }}>{message.message}</p> 
}



const Messages = ({ user, selectedChat }) => {
    const messageRef = useRef();
    useLayoutEffect(() => {
        messageRef.current.scrollTop = messageRef.current.scrollHeight
    })
    const result = selectedChat.message.map((el) => <Message key={el.id} message={el} user={user} />)
    return <div  ref={messageRef} css={{ flexGrow: 1,paddingTop: 16, maxHeight: 455, display: 'flex', flexDirection: 'column', overflowY: 'scroll'}}>
    <div css={{ marginBottom: 'auto'}}></div>
        {result}
    </div>
} 

export default Messages;
