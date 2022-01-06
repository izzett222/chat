/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { FaSpinner } from 'react-icons/fa'

export const MenuButton = styled.button({
    border: 'none',
    padding: 0,
    background: 'none',
    fontFamily: 'Roboto',
    fontSize: 16,
	cursor: 'pointer',
	outline: 'inherit',
    color: 'white', 
    marginBottom: 16
})
export const IconButton = styled.button({
    border: 'none',
    padding: 0,
    background: 'none',
    color: 'inherit',
    font: 'inherit',
	cursor: 'pointer',
	outline: 'inherit',
    zIndex: 10
})
export const Root = styled.div({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});
export const Container = styled.div({
    height: '650px',
    width: '1152px',
    position: 'relative',
    boxShadow: '0px 3px 6px #EBECF0',
    display: 'flex', flexDirection: 'row'
})
const spin = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
})
export const Spinner = styled(FaSpinner)({
    animation: `${spin} 1s linear infinite`,
})

export function FullPageSpinner() {
    return (
        <div
            css={{
                fontSize: '4em',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Spinner />
        </div>
    )
}
export const Button = styled.button({
    border: 'none',
    display: 'block',
    padding: '12px 18px 12px 18px',
    borderRadius: '7px',
    background: '#253858',

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#FFFFFF'
})
export const FormGroup = styled.div({
    width: '350px',
    maxWidth: '400px',
    marginBottom: '16px',
    "@media (max-width: 400px)": {
        width: 'calc(100% - 32px)',
        marginLeft: 16,
        marginRight: 16
    }
})
export const Input = styled.input({
    border: 'none',
    background: '#FFFFFF',
    boxSizing: '1px solid rgba(143, 151, 144, 0.4)',
    boxShadow: 'inset 0px 2px 5px rgba(0, 0, 0, 0.15)',
    borderRadius: '5px',
    width: '100%',
    height: '40px',
    '&::placeholder': {
        fontFamily: '"Roboto", sans-serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '19px',
        color: 'rgba(63, 84, 64, 0.7)',
        paddingLeft: '16px',
    },
});
export const ErrorMessage = styled.p({
    width: 'calc(100% - 12px)',
    fontFamily: '"Roboto", sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '34px',
    height: '34px',
    paddingLeft: '16px',
    background: ' #F8DDDD',
    color: '#FF4444',
    fontSize: '14px',
    verticalAlign: 'middle',
    marginTop: '0px',
    marginBottom: '0px'
})
export const FullPageError = ({ message }) => (<div css={{
    height: '100vh',
    display: 'flex',

}}>
    <p role='alert' css={{ color: 'red', fontSize: '24px', marginLeft: '24px' }}>{message}</p>
</div>)

