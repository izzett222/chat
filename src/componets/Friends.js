/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import userImagePlaceholder from '../assets/user.png';

const Friend = ({ user, setChatId, chatId }) => {
    return <div onClick={() => setChatId(user.userId)} css={{ 
        width: '305px',
        height: '54px',
        border: '1px solid #EEF4EF',
        boxSizing: 'border-box',
        display: 'flex'
        }}>
    <div css={{display: 'flex', marginRight: '8px'}}>
        { (chatId === user.userId) ? <div css={{ background: '#0052CC', width: 7, height: 54, marginRight: '4px' }}></div> : null}
        <img css={{ height: 35, width: 35, borderRadius: '50%', display: 'block', marginTop: '9px', marginLeft: (chatId === user.userId) ? 0 : '8px'}} src={userImagePlaceholder} alt='user placeholder' />
    </div>
    <div css={{paddingTop: 9, marginRight: 'auto'}}>
        <p css={{
            margin: 0,
            marginBottom: '4px',
            fontSize: '13px',
            lineHeight: '15px',
            fontWeight: 'bold',
            color: '#091E42',
            fontFamily: 'Roboto',
            }}>{user.username}</p>
        <p css={{
            margin: 0,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '12px',
            lineHeight: '14px',
            color: '#5E6C84'
            }}>{user.message[user.message?.length - 1]?.message}</p>
    </div>
    <div css={{ marginRight: '16px', display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center'}}><p css={{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '10px',
        lineHeight: '12px',
        color: 'rgba(0, 0, 0, 0.7)'}}>12:30</p></div>
    </div>
}



const Friends = ({ users, setChatId, chatId }) => {
    return <div css={{ width: '305px', flexGrow: '1', background: '#fff'}}>
            {users.map((user) => <Friend key={user.userId} chatId={chatId} user={user} setChatId={setChatId} />)}


    </div>
}
export default Friends;
