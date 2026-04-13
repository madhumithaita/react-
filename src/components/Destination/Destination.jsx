import React from 'react'
import Button from '../Button/Button.jsx';
import './Destination.scss'
const Destination = ({place}) => {
  return (
    <>
  <section className='destination'>
    <figure class="destination__img-wrapper">
    <img src={"src/assets/thanjavur.png"} alt="" class="destination__img"/>
    </figure>
    <h2 className="destination__name">{place.place}</h2>
    <p className='destination__city'>
{place.city}
    </p>
    <p className='destination__description'>
{/* {place.shortDescription} */}
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    </p>
    <Button text={"READ MORE"} clickHandler={function(){alert("clicked")}} class="destination__btn"/>
  </section>

     </>
  )
}

export default Destination