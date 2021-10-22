/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";

const PickChat = () => {
    return <div css={{
        display: 'flex',
        width:'100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '16px',
        lineHeight: '19px',
    }}>
        <p>pick a chat room to start messaging</p>
    </div>
}
export default PickChat;
