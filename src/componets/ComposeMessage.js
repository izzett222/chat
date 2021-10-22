/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import format from "date-fns/format";
import send from '../assets/send.svg';
import socket from "../utils/socket";

const ComposeMessage = ({ user, selectedChat}) => {
    const [sendMessage, setSendMessage] = useState(false);
    const [message, setMessage] = useState('');
    useEffect(() => {
        if(!sendMessage || !message) return;
        const date = format(new Date(), 'yyyy-MM-dd');
        socket.emit('private message', { content: message, to: selectedChat.userId, date })
        setSendMessage(false);
        setMessage('')
    }, [message, selectedChat.userId, sendMessage])

    const handleSubmit = (e) => {
        e.preventDefault();
        setSendMessage(true);
    } 

    return <form onSubmit={handleSubmit} css={{ 
        height: 82,
        borderTop: '1px solid rgba(167, 194, 169, 0.3)',
        display: 'flex',

    }}>
        <input value={message} onChange={(e) => setMessage(e.target.value)} css={{
            display: 'block',
            flexGlow: 1,
            background: '#FFFFFF',
            border: '1px solid rgba(189, 189, 189, 0.5)',
            boxSizing: 'border-box',
            boxShadow: 'inset 0px 2px 3px rgba(0, 0, 0, 0.1)',
            borderRadius: 7,
            height: 50,
            width: 665,
            marginTop: 16,
            marginLeft: 16,
            '&::placeholder': {
            fontFamily: '"Roboto", sans-serif',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '19px',
            color: 'rgba(63, 84, 64, 0.7)',
            paddingLeft: '16px',
    },

        }} placeholder='Write a message . . . .' />
        <button css={{
                border: 'none',
                background: 'none',
                display: 'block',
                marginLeft: 16,
                marginRight: 'auto'
        }}><img src={send} alt='send message' /></button>
    </form>
}

export default ComposeMessage;
