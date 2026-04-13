import React from 'react'
import { useParams } from 'react-router-dom';
const Details = () => {
  const {place}=useParams();
  return (
    <>
  <section>
  </section>
  <section>
      <h1>Similar Destinations</h1>
      <h3>Because you liked {place}</h3>
      <div>

      </div>
  </section>
    </>
  )
}

export default Details