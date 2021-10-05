/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Input, FormGroup, ErrorMessage, Button } from '../componets/lib';




const Login = () => {
    return (
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
            <form css={{
                marginTop: '100px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}
                onSubmit={(e) => e.preventDefault()}>
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
                    <Input placeholder='username' type='text' />
                    <ErrorMessage>Username can only numbers and letters</ErrorMessage>
                </FormGroup>
                <FormGroup>
                    <Input placeholder='password' type='password' />
                    <ErrorMessage>Password is required</ErrorMessage>
                </FormGroup>
                <div css={{
                    width: '350px',
                    display: 'flex',
                }}>
                    <Button type='submit'>Sign in</Button>
                    <p css={{
                        marginLeft: '16px',
                        fontFamily: 'Roboto',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '14px',
                        lineHeight: '16px',
                        color: 'rgba(63, 84, 64, 0.6)'
                    }}>not signed up yet, <span css={{ color: '#253858', textDecoration: 'underline', textUnderlineOffset: '3px' }}>sign up here</span></p>
                </div>

            </form>
        </div>
    )
}


export default Login;


