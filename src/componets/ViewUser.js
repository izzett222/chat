/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import userImagePlaceholder from '../assets/user.png';
import closeIcon from '../assets/close.svg';
import { IconButton, Spinner } from "./lib";
import { useAsync } from "../utils/hooks/useAsync";
import client from '../utils/api-client';
import * as auth from '../auth-provider';
import { useEffect, useState } from "react";

const sendFriendRequest = async (friendId) => {
    let user = null;
    const token = auth.getToken();
    if(token) {
      const {data} = await client(`friend/?friendId=${friendId}`, { token, method: 'POST' });
      user = data;
    }
    return user;
  }

const ViewUser = ({ searchedUser, user}) => {
    // state to know when the useEffeect should run
    const [sendRequest, setSendRequest] = useState(false);
    const { data, run, isSuccess, isLoading } = useAsync();

    useEffect(() => {
        if (!sendRequest) return
        run(sendFriendRequest(searchedUser.userId));
    }, [run, searchedUser.userId, sendRequest])

    const handleSendRequest = () => {
        setSendRequest(true);
    }

    return <div css={{
        background: '#FEFEFE',
        width: 305,
        position: 'absolute',
        top: 96,
        borderRadius: 7,
        boxShadow: '0px 6px 8px #CED1DE',
        }}
        onClick={(e) => e.stopPropagation()}
        >
        <IconButton css={{
            position: 'absolute',
            top: 8,
            right: 8,
        }}>
            <img src={closeIcon} alt='close icon' css={{
                height: 15,
                width: 15,
                color: '#253858'
            }} />
        </IconButton>
            <h3 css={{
                color: '#253858',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '20px',
                lineHeight: '23px',
                marginLeft: 16,
                marginTop: 24,
                marginBottom: 16,
            }}>search results</h3>
            <div css={{
                height: 60,
                width: 273,
                borderTop: '1px solid rgba(167, 194, 170, 0.5)',
                borderBottom: '1px solid rgba(167, 194, 170, 0.5)',
                marginLeft: 16,
                marginBottom: 16,
                display: 'flex',
                alignItems: 'center',
            }}>
                <img css={{ height: 35, width: 35, borderRadius: '50%', display: 'block'}} src={userImagePlaceholder} alt='user placeholder' />
                <p css={{
                    margin: 0,
                    marginLeft: 16,
                    marginBottom: '4px',
                    marginRight: 'auto',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#091E42',
                    fontFamily: 'Roboto',
                }}>{searchedUser.username}</p>
                {searchedUser.friendRequest || isSuccess ? null : (<button disabled={isLoading} onClick={handleSendRequest} css={{
                        font: 'inherit',
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '12px',
                        lineHeight: '12px',
                        color: 'white',
                        paddingTop: 4,
                        paddingBottom: 4,
                        paddingRight: 16,
                        paddingLeft: 16,
                        background: '#36B37E',
                        border: '1px solid rgba(167, 194, 170, 0.5)',
                        borderRadius: '5px',

                }}>{ isLoading ? <Spinner /> : 'add'}</button>)}
                {(searchedUser.friendRequest?.status === 'pending' && searchedUser.friendRequest?.sender === user.id.toString()) || isSuccess ? (<button css={{
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

                }} disabled>request sent</button>) : null}
                {searchedUser.friendRequest?.status === 'pending' && searchedUser.friendRequest?.receiver === user.id.toString() ? (<div><button css={{
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
                    marginRight: 4,
                }}>approve</button><button css={{
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
                }}>reject</button></div>) : null}
            </div>
        </div>
}

export default ViewUser;
