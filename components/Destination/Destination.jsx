import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Destination.scss';

const Destination = ({ place }) => {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/${place.id}`);
    };

    // Helper to get image path
    const getImagePath = (imageName) => {
        return new URL(`../../assets/${imageName}`, import.meta.url).href;
    };

    return (
        <div className="destination-card" id={`destination-${place.id}`}>
            <div className="card-image-wrapper">
                <img src={getImagePath(place.image)} alt={place.city} className="card-image" />
            </div>
            <div className="card-content">
                <h3 className="card-title">{place.place}</h3>
                <h4 className="card-city">{place.city}</h4>
                <p className="card-description">{place.shortDescription}</p>
                <div className="card-footer">
                    <Button 
                        text="READ MORE" 
                        clickHandler={handleReadMore} 
                        className="read-more-btn"
                    />
                </div>
            </div>
        </div>
    );
};

Destination.propTypes = {
    place: PropTypes.shape({
        id: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired
};

export default Destination;