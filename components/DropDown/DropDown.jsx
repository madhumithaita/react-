import React from 'react';
import PropTypes from 'prop-types';
import './DropDown.scss';

const DropDown = ({ dropdownOptions, value, onChange, placeholder = "Choose", id }) => {
    return (
        <div className="dropdown-container">
            <select 
                className="custom-select" 
                value={value} 
                onChange={onChange}
                id={id}
            >
                <option value="" disabled>{placeholder}</option>
                {dropdownOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

DropDown.propTypes = {
    dropdownOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    id: PropTypes.string
};

export default DropDown;