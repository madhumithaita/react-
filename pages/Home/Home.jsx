import React, { useEffect, useState } from 'react';
import { getPlaces } from '../../services/api';
import Hero from '../../components/Hero/Hero';
import Destination from '../../components/Destination/Destination';
import './Home.scss';

const Home = () => {
    const [destinations, setDestinations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const result = await getPlaces();
                setDestinations(result);
            } catch (err) {
                setError('Failed to load destinations');
            } finally {
                setIsLoading(false);
            }
        };
        fetchDestinations();
    }, []);

    if (isLoading) return <div className="loading-state">Loading...</div>;
    if (error) return <div className="error-state">{error}</div>;

    return (
        <div className="home-page" id="homePage">
            <Hero />
            
            <section className="destinations-section" id="destinationsSection">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Destinations</h2>
                        <p className="section-subtitle">Just for you. Because you and your bike are special to us!</p>
                    </div>
                    
                    <div className="destinations-grid">
                        {destinations.map((dest) => (
                            <Destination key={dest.id} place={dest} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;