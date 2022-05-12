import React from 'react';

const ButtonPrimary = ({ children }) => {
    return (
        <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase">{children}</button>
    );
};

export default ButtonPrimary;