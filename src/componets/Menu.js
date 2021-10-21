/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import * as auth from '../auth-provider';
import client from '../utils/api-client';
import hamburger from '../assets/hamburger.svg';
import newChat from '../assets/newChat.svg';
import search from '../assets/search.svg';
import { IconButton } from "./lib";

const getUser = async (username) => {
    let user = null;
    const token = auth.getToken();
    if(token) {
      const {data} = await client(`?username=${username}`, { token });
      user = data;
    }
    return user;
  }
  
const Menu = ({ run, setOpenSideBar }) => {
    const [searchStarted, setSearchStarted] = useState(false);
    const [user, setUser] = useState('');

    useEffect(() => {
        if(!searchStarted || !user.trim()) {
            return;
        }
        run(getUser(user));
        setSearchStarted(false);
    }, [run, searchStarted, user])
    function handleSubmit(e) {
        e.preventDefault();
        setSearchStarted(true)
    } 
    return <div css={{ height: '94px', width: '100%', backgroundColor: '#253858' }}>
        <div css={{margin: 16, height: '16px', display: 'flex', justifyContent: 'space-between'}}>
            <IconButton onClick={() => setOpenSideBar(true)}><img src={hamburger} alt='hamburg icon' /></IconButton>
            <IconButton><img src={newChat} alt='new chat icon' /></IconButton>
        </div>
        <form onSubmit={handleSubmit} css={{width: '100%', display: 'flex', color: 'inherit', position: 'relative'}}>
        <IconButton type='submit' css={{ position: 'absolute', right: 24, top: 6}}><img src={search} alt='search' /></IconButton>
            <input id='searched' css={{
                border: 'none',
                height: '30px',
                width: '273px',
                margin: '0px 16px',
                display: 'block',
                flexFlow: '1',
                backgroundColor: 'rgba(255, 255, 255, 0.58)',
                mixBlendMode: 'soft-light',
                boxShadow: 'inset 0px 0px 6px rgba(0, 0, 0, 0.06), inset 1px 2px 4px rgba(0, 0, 0, 0.08)',
                borderRadius: '7px',
                '&::placeholder': {
                    color: 'white',
                    mixBlendMode: 'normal',
                    paddingLeft: '16px',
                    fontstyle: 'normal',
                    fontFamily: 'Roboto',
                    fontWeight: 'normal',
                    fontSize: '14px',
                    lineHeight: '14px'
                }

            }} value={user} onChange={(e) => setUser(e.target.value)} type='text' placeholder="search a user ..." />
        </form>
        
    </div>;
}
export default Menu;


