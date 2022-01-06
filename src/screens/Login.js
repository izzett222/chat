/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react';
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input, FormGroup, ErrorMessage, Button, Spinner } from '../componets/lib';
import { useAsync } from '../utils/hooks/useAsync';

const Login = ({ handleSubmit }) => {

    const { error, isError, isLoading, run, reset } = useAsync()

    const submit = (e) => {
        e.preventDefault();
        const { username, password } = e.target.elements
        run(handleSubmit({
            username: username.value,
            password: password.value
        }))

    }
    useEffect(() => {
        if (!error) return;
        const timeOutId = setTimeout(() => reset(), 5000);
        return () => clearTimeout(timeOutId);
    }, [error, reset])

    return (
        <>
            <div css={{
                height: '650px',
                background: '#FDFDFD',
                width: '400px',
                "@media (max-width: 400px)": {
                    width: '100%'
                }
            }}>
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

                        }}>Sign in
                    </h2>
                    <FormGroup>
                        <Input id='username' placeholder='username' type='text' required />
                    </FormGroup>
                    <FormGroup>
                        <Input placeholder='password' id='password' type='password' required />
                    </FormGroup>
                    <div css={{
                        width: '350px',
                        display: 'flex',
                        "@media (max-width: 400px)": {
                            width: 'calc(100% - 32px)',
                            marginLeft: 16,
                            marginRight: 16
                        }
                    }}>
                        <Button type='submit'>{isLoading ? (<Spinner />) : 'Sign in'}</Button>
                        <p css={{
                            marginLeft: '16px',
                            fontFamily: 'Roboto',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontSize: '14px',
                            lineHeight: '16px',
                            color: 'rgba(63, 84, 64, 0.6)'
                        }}>not signed up yet, <Link to='/signup' css={{ color: '#253858', textDecoration: 'underline', textUnderlineOffset: '3px' }}>sign up here</Link></p>
                    </div>

                </form>
            </div>
        </>

    )
}


export default Login;


