import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ text, clickHandler, type = "button", className = "" }) => {
    return (
        <button 
            type={type} 
            className={`custom-btn ${className}`} 
            onClick={clickHandler}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string
};

export default Button;