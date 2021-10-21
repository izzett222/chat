/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import { Spinner } from "./lib";
import * as auth from '../auth-provider';
import client from '../utils/api-client';
import { useAsync } from '../utils/hooks/useAsync';

const respondToRequest = async (response, friendId) => {
    let result = null;
    const token = auth.getToken();
    if (token) {
        const { data } = await client(`friend/respond?requestId=${friendId}`, { token, data: { response }, method: 'PATCH', headers: { 'Accept': 'application/json' } });
        result = data;
    }
    return result;
}


const Request = ({ user }) => {
    console.log(user);
    const [response, setResponse] = useState(null);
    const { isSuccess, isError, isLoading, run } = useAsync();

    useEffect(() => {
        if (!response) return;
        console.log('run useEffect')
        run(respondToRequest(response, user.requestId))
    }, [response, run, user.requestId])

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const approveRequest = () => {
        setResponse('approved');
    }
    const rejectRequest = () => {
        setResponse('rejected');
    }
    return <div css={{
        display: 'flex',
        marginBottom: 16
    }}>
        <p css={{
            margin: 0,
            color: 'white',
            fontFamily: 'Roboto',
            fontSize: 16,
            marginRight: 'auto'
        }}>{user.username}</p>
        {
            isSuccess ? <button css={{
                background: '#375F4E',
                border: '1px solid rgba(167, 194, 170, 0.5)',
                boxShadow: 'inset 0px 2px 2px rgba(51, 69, 53, 0.05), inset 0px 0px 5px rgba(51, 69, 53, 0.1)',
                borderRadius: 14,
                paddingRight: 8,
                paddingLeft: 8,
                color: 'white',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '12px',
                lineHeight: '14px',

            }} disabled>{response}</button> : (
                <form onSubmit={handleSubmit}><button onClick={approveRequest} css={{
                    background: '#36B37E',
                    border: '1px solid rgba(167, 194, 170, 0.5)',
                    boxShadow: '0px 2px 2px rgba(51, 69, 53, 0.05), 0px 0px 5px rgba(51, 69, 53, 0.1)',
                    borderRadius: 5,
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '12px',
                    lineHeight: '14px',
                    color: 'white',
                    paddingRight: 16,
                    paddingLeft: 16,
                    paddingTop: 4,
                    paddingBottom: 4,
                    marginRight: 16,
                }} disabled={isLoading}>{isLoading && response === 'approved' ? <Spinner /> : 'approve'}</button><button css={{
                    background: 'transparent',
                    border: '1px solid rgba(194, 128, 113, 0.6)',
                    boxShadow: '0px 2px 2px rgba(51, 69, 53, 0.05), 0px 0px 5px rgba(51, 69, 53, 0.1)',
                    borderRadius: 5,
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '12px',
                    lineHeight: '14px',
                    color: '#E8523D',
                    paddingRight: 16,
                    paddingLeft: 16,
                    paddingTop: 4,
                    paddingBottom: 4,
                }} onClick={rejectRequest} disabled={isLoading}>{isLoading && response === 'approved' ? <Spinner /> : 'reject'}</button></form>
            )
        }

    </div>
}

export default Request;
