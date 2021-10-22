/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import userImagePlaceholder from '../assets/user.png';
import threeDots from '../assets/threedots.svg';

const ChatHeader = ({ selectedChat }) => {
    return (
        <div css={{
            background: '#FAFBFC',
            height: 94,
            width: '100%',
            display: 'flex',
            borderBottom: '1px solid rgba(167, 194, 169, 0.3)'
        }}>
        <img src={userImagePlaceholder} alt='placeholder' css={{
                height: 64,
                width: 64,
                marginTop: 16,
                marginLeft: 16,
                marginRight: 8,
                borderRadius: '50%',
            }} />
        <div css={{
            marginRight: 'auto'
        }}>
        <p css={{
                color: '#091E42',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '24px',
                lineHeight: '28px',
                marginTop: 24
            }}>{selectedChat.username}</p>
        </div>
        <div css={{
            marginRight: 16,
        }}>
            <img css={{ marginTop: 34 }} src={threeDots} alt='three dots' />
        </div>
        </div>
    )
}

export default ChatHeader;
