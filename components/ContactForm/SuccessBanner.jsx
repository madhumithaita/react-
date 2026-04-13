import React from 'react';
import PropTypes from 'prop-types';
import './SuccessBanner.scss';

const SuccessBanner = ({ formData }) => {
    return (
        <div className="success-banner" id="successBanner">
            <h2 className="success-title">Success!</h2>
            <p className="success-message">Thank you for your interest. Here are the details you provided:</p>
            <div className="captured-data">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Home Town:</strong> {formData.homeTown}</p>
                <p><strong>Destination:</strong> {formData.destination}</p>
                <p><strong>Contact Number:</strong> {formData.contactNumber}</p>
            </div>
        </div>
    );
};

SuccessBanner.propTypes = {
    formData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        homeTown: PropTypes.string.isRequired,
        destination: PropTypes.string.isRequired,
        contactNumber: PropTypes.string.isRequired
    }).isRequired
};

export default SuccessBanner;
