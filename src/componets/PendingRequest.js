/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { IconButton, Spinner } from "./lib";
import closeSide from '../assets/closeSide.svg';
import Request from './Request';

const PendingRequest = ({ setSideBarContent, request }) => {
    return (
        <>
                <div css={{
                    position: 'absolute',
                    right: 16,
                    top: 16
                }}><IconButton onClick={() => setSideBarContent('menu')}><img src={closeSide} alt='close side' /></IconButton></div>
            <div css={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 32,
                marginRight: 32,
            }}>
            <h3 css={{
                marginTop: 88,
                color: 'white',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '20px',
                lineHeight: '23px',
            }}>Requests</h3>
            {request.map((user) =>  <Request key={user.id} user={user} />)}
            </div>

        </>
    )
}

export default PendingRequest;


