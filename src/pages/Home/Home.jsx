import React, { useEffect, useState } from 'react'
import { getPlaces } from '../../services/api';
import "./Home.scss";
import Destination from '../../components/Destination/Destination.jsx';
const Home = () => {
  const [destinations, setDestinations] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const loadDestinations = async () => {
      try {
        const result = await getPlaces();
        setDestinations(result);
      }
      catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadDestinations();
  }, [])
  { isLoading && (<h1>loading</h1>) }
  return (<>
    <section className='hero-section'>
      <div className="left-hero">
        <h3 className='title'>WELCOME TO EXPLORER</h3>
        <h1 className='sub-title'>Your Adventure Travel Expert in the <span>SOUTH</span></h1>
      </div>
      <figure className="right-hero">
        <img src={"src/assets/promo.webp"} alt="promo" className='promo-img'/>
      </figure>
    </section>
    <section>
      <h2>Destinations</h2>
      <p>Just for you. Because you and your bike are special to us!</p>
      {destinations.length > 0 && destinations.map((destination, index) => (<Destination place={destination} key={index} />))
      }
      {error&&<p>{error}</p>}
    </section>
  </>)
}

export default Home