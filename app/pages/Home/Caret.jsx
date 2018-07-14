import React from 'react';

export function Caret() {
    return (
        <div style={{ marginRight: 8, display: 'flex', color: 'blue' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-4 -4 16 16">
                <polygon fill="#FFF" fillRule="evenodd" points="4 5.242 4.414 4 11.362 6.952 11.362 8.23 4.414 11.182 4 9.94 9.706 7.582" transform="translate(-4 -4)"/>
            </svg>
        </div>
    )
}