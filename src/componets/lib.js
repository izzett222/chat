/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled/macro';

/* sign in */



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
    marginBottom: '16px'
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


