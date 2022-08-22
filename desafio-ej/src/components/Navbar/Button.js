import React from 'react';
import './Button.css';

const STYLES = [
    'btn--primary',
    'btn--outline',
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({ children, type, onClick, style, size }) => {
    const checkStyle = STYLES.includes(style) ? style : STYLES[0];
    const checkSize = SIZES.includes(size) ? size : SIZES[0];

    return (
        <button className={`btn ${checkStyle} ${checkSize}`} onClick={onClick}>
            {children}
        </button>
    )
}