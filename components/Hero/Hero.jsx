import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getPlaceNames } from '../../services/api';
import promoImg from '../../assets/promo.webp';
import Button from '../Button/Button';
import DropDown from '../DropDown/DropDown';
import './Hero.scss';

const Hero = () => {
    const [places, setPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPlaces = async () => {
            const data = await getPlaceNames();
            setPlaces(data);
            if (data.length > 0) setSelectedPlace(data[0]);
        };
        fetchPlaces();
    }, []);

    const handleExplore = () => {
        if (selectedPlace) {
            navigate(`/${selectedPlace.toLowerCase()}`);
        }
    };

    return (
        <section className="hero-section" id="heroSection">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-tagline">WELCOME TO EXPLORER</p>
                    <h1 className="hero-title">
                        Your Adventure <br />
                        Travel Expert in <br />
                        the <span className="highlight">SOUTH</span>
                    </h1>
                    
                    <div className="search-box" id="searchBox">
                        <DropDown 
                            dropdownOptions={places} 
                            value={selectedPlace}
                            onChange={(e) => setSelectedPlace(e.target.value)}
                        />
                        <Button 
                            text="EXPLORE" 
                            clickHandler={handleExplore}
                            className="explore-btn"
                        />
                    </div>
                </div>
                <div className="hero-image-container">
                    <img src={promoImg} alt="Adventure Promo" className="hero-image" />
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = {};

export default Hero;
