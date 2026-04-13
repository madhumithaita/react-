import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getPlaceNames } from '../../services/api';
import DropDown from '../DropDown/DropDown';
import Button from '../Button/Button';
import SuccessBanner from './SuccessBanner';
import './ContactForm.scss';

const ContactForm = () => {
    const [places, setPlaces] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        homeTown: '',
        destination: '',
        contactNumber: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const fetchPlaces = async () => {
            const data = await getPlaceNames();
            setPlaces(data);
        };
        fetchPlaces();
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleDropdownChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.homeTown && formData.destination && formData.contactNumber) {
            setIsSubmitted(true);
        } else {
            alert('Please fill all fields');
        }
    };

    return (
        <section className="contact-section" id="contactSection">
            <div className="container">
                <div className="contact-header">
                    <h2 className="title-primary">Contact Us</h2>
                    <p className="subtitle">Our Sales Team will reach out to you ASAP!</p>
                </div>
                
                {!isSubmitted ? (
                    <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                className="form-input" 
                                value={formData.name} 
                                onChange={handleChange}
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="homeTown" className="form-label">Your Home Town</label>
                            <DropDown 
                                id="homeTown"
                                dropdownOptions={places} 
                                value={formData.homeTown}
                                onChange={(e) => handleDropdownChange('homeTown', e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="destination" className="form-label">Where would you like to go?</label>
                            <DropDown 
                                id="destination"
                                dropdownOptions={places} 
                                value={formData.destination}
                                onChange={(e) => handleDropdownChange('destination', e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                            <input 
                                type="tel" 
                                id="contactNumber" 
                                className="form-input" 
                                value={formData.contactNumber} 
                                onChange={handleChange}
                                placeholder="Enter your contact number"
                            />
                        </div>

                        <Button 
                            text="SUBMIT INTEREST" 
                            type="submit"
                            className="submit-btn"
                        />
                    </form>
                ) : (
                    <SuccessBanner formData={formData} />
                )}
            </div>
        </section>
    );
};

ContactForm.propTypes = {};

export default ContactForm;