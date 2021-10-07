/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { Input, FormGroup, ErrorMessage, Button, Spinner } from '../componets/lib';
import { useAsync } from '../utils/hooks/useAsync';
import home from '../assets/home.jpg';

const validationReducer = (state = { validPassword: true, validUsername: true }, action) => {
    switch (action.type) {
        case 'INVALID_PASSWORD':
            return { ...state, validPassword: false }
        case 'INVALID_USERNAME':
            return { ...state, validUsername: false }
        case 'VALID_PASSWORD':
            return { ...state, validPassword: true }
        case 'VALID_USERNAME':
            return { ...state, validUsername: true }
        default:
            throw new Error('invalid action type');
    }
}


const Signup = ({ handleSubmit }) => {
    const { error, isError, isLoading, run } = useAsync()
    const [{ validPassword, validUsername }, dispatch] = useReducer(validationReducer, { validPassword: true, validUsername: true });
    const submit = (e) => {
        e.preventDefault();
        const { username, password } = e.target.elements
        const isValidPassword = password.value.trim().length > 2;
        const isValidUsername = username.value.match(/^[a-z0-9]+$/i)
        if (!isValidUsername) {
            dispatch({ type: 'INVALID_USERNAME' })
        } else {
            dispatch({ type: 'VALID_USERNAME' })
        }
        if (!isValidPassword) {
            dispatch({ type: 'INVALID_PASSWORD' });
        } else {
            dispatch({ type: 'VALID_PASSWORD' })
        }
        if (isValidPassword && isValidUsername) {
            run(handleSubmit({
                username: username.value,
                password: password.value
            }))
        }

    }
    return (
        <>
            <div css={{ height: '650px', width: '700px', background: `url(${home})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
            </div>
            <div css={{ height: '650px', background: '#FDFDFD', width: 'calc(100% - 700px)' }}>
                <h1 css={{
                    fontStyle: 'normal',
                    fontsize: '24px',
                    lineHeight: '29px',
                    fontWeight: '800',
                    marginTop: '32px',
                    fontFamily: '"Life Savers", cursive',
                    color: '#253858',
                    textAlign: 'center',
                }}>WEB CHAT</h1>
                <div css={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    {isError ? (<ErrorMessage css={{ width: '360px', marginTop: '33px' }}>{error.message}</ErrorMessage>) : null}
                </div>
                <form css={{
                    marginTop: !isError ? '100px' : '33px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
                    onSubmit={submit}>
                    <h2
                        css={{
                            fontFamily: '"Roboto", sans-serif',
                            fontSize: '24px',
                            color: '#091E42',
                            lineHeight: '28px',
                            fontStyle: 'normal',
                            textAlign: 'center',
                            marginBottom: '24px'

                        }}>Sign up
                    </h2>
                    <FormGroup>
                        <Input id='username' placeholder='username' type='text' />
                        {!validUsername ? <ErrorMessage>Username can only numbers and letters</ErrorMessage> : null}
                    </FormGroup>
                    <FormGroup>
                        <Input id='password' placeholder='password' type='password' />
                        {!validPassword ? <ErrorMessage>Password is required</ErrorMessage> : null}
                    </FormGroup>
                    <div css={{
                        width: '350px',
                        display: 'flex',
                    }}>
                        <Button type='submit'>{isLoading ? (<Spinner />) : 'Sign up'}</Button>
                        <p css={{
                            marginLeft: '16px',
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontSize: '14px',
                            lineHeight: '16px',
                            color: 'rgba(63, 84, 64, 0.6)'
                        }}>already signed up, <Link to='./login' css={{ color: '#253858', textDecoration: 'underline', textUnderlineOffset: '3px' }}>login here</Link></p>
                    </div>

                </form>
            </div>
        </>

    )
}


export default Signup;


