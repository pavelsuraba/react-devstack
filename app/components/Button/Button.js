import React from 'react';

const Button = ({children, eventHandler}) => {
    return (
        <button onClick={() => eventHandler()} type="button">{children}</button>
    );
};

export default Button;