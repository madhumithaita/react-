import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPlaceDetail, getPlaces } from '../../services/api';
import Destination from '../../components/Destination/Destination';
import './Details.scss';

const Details = () => {
    const { placeId } = useParams();
    const [detail, setDetail] = useState(null);
    const [similar, setSimilar] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchDetail = async () => {
            setIsLoading(true);
            const data = await getPlaceDetail(placeId);
            
            if (!data) {
                navigate('/');
                return;
            }

            setDetail(data);
            const allPlaces = await getPlaces();
            const filtered = allPlaces
                .filter(p => data.relatedPlaces.includes(p.city) || data.relatedPlaces.includes(p.id))
                .slice(0, 3);
            setSimilar(filtered);
            setIsLoading(false);
            window.scrollTo(0, 0);
        };
        fetchDetail();
    }, [placeId, navigate]);

    const getImagePath = (imageName) => {
        return new URL(`../../assets/${imageName}`, import.meta.url).href;
    };

    if (isLoading) return <div className="loading-state">Loading...</div>;
    if (!detail) return <div className="error-state">Place not found</div>;

    return (
        <div className="details-page" id="detailsPage">
            <section className="details-header" id="detailsHeader">
                <div className="header-info">
                   <h1 className="header-city-name">{detail.city}</h1>
                   <div className="promo-box">
                       <h2 className="promo-text">{detail.place}</h2>
                   </div>
                   <div className="weather-info">
                       <span className="temp">{detail.temp}°C</span>
                   </div>
                </div>
                <div className="header-image-wrapper">
                    <img src={getImagePath(detail.image)} alt={detail.city} className="header-image" />
                </div>
            </section>

            <section className="details-content container" id="detailsContent">
                <div className="description-text">
                    {detail.fullDescription.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            </section>

            <section className="similar-destinations section-padding" id="similarDestinations">
                <div className="container">
                    <h2 className="similar-title">Similar Destinations</h2>
                    <p className="similar-subtitle">Because you liked {detail.city}</p>
                    <div className="similar-grid">
                        {similar.map((place) => (
                            <Destination key={place.id} place={place} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Details;