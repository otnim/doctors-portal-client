import React from 'react';

const ButtonPrimary = ({children}) => {
    return (
        <button className="btn btn-primary w-1/2 bg-gradient-to-r from-primary to-secondary text-white">{children}</button>

    );
};

export default ButtonPrimary;