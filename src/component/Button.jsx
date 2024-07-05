import React from 'react';
import '../assets/styles/Button.css' ;

const Button = ({onClick, label, className}) => {
    return (
        <button onClick={onClick} className={className}>
            {label}
        </button>
    );
};

export default Button;