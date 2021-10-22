/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import userImagePlaceholder from '../assets/user.png';
import { IconButton, MenuButton } from "./lib";
import closeSide from '../assets/closeSide.svg';
import friendRequestIcon from '../assets/friendRequest.svg';

const SideBarMenu = ({ setOpen, setSideBarContent }) => {
    return (
        <>
                <div css={{
                    position: 'absolute',
                    right: 16,
                    top: 16
                }}><IconButton onClick={() => setOpen(false)}><img src={closeSide} alt='close side' /></IconButton></div>
            <div css={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <img src={userImagePlaceholder} alt='placeholder' css={{
                    display: 'block',
                    height: 101,
                    width: 101,
                    borderRadius: '50%',
                    marginTop: 64,
                }} />
                <div css={{
                    marginTop: 32
                }}>
                <MenuButton onClick={() => setSideBarContent('pending_request')} css={{ display: 'flex'}}><img src={friendRequestIcon} alt='friend request icon' /> <span css={{ marginLeft: '8px'}}>Requests</span></MenuButton>
                </div>
            </div>

        </>
    )
}

export default SideBarMenu;