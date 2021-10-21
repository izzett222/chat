/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { IconButton } from "./lib";
import closeSide from '../assets/closeSide.svg'
// import { CSSTransition } from 'react-transition-group'

const SideBar = ({ children }) => {
    return (<div css={{
        position: 'absolute',
        top: 0,
        zIndex: 12,
        background: '#091E42',
        height: '100%',
        width: 289,
        boxShadow: '4px 0px 4px rgba(9, 30, 66, 0.25)',
        display: 'flex',
        flexDirection: 'column'
    }}>
       {children}
    </div>)
}

export default SideBar;


