/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";

const PendingRequestPanel = ({ requestNumber }) => {
    return <button css={{
        background:  '#FFFFFF',
        boxShadow: '0px 2px 7px rgba(55, 81, 121, 0.15)',
        height: '34px',
        boxSizing: 'border-box',
        marginTop: 8,
        marginBottom: 8,
        border: '1px solid #DEE7F7',
        color: '#091E42',
        fontfamily: 'Roboto',
        fontstyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'left',
        paddingLeft: '16px',
    }}>
        Pending friend requests <span css={{
            textAlign: 'center',
            display: 'inline-block',
            background: '#0052CC',
            height: 17,
            width: 17,
            borderRadius: '50%',
            color: 'white',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '12px',
            lineHeight: '17px',
            marginLeft: 16,

        }}>{requestNumber}</span>
    </button>
}

export default PendingRequestPanel;

