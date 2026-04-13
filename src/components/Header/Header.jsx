import React from 'react'
import logo from "../../assets/logo.png"
import './Header.scss'
const Header = () => {
  return (
    <header className='site-header'>
        <div className='logo-container'>
            <img src={logo} alt="" className='logo'/>
        </div>
        <nav className='navbar'>
            <ul className="nav-items">
                <li className='nav-item'>Hotels</li>
                <li className='nav-item'>Bike Rentals</li>
                <li className='nav-item'>Restaurants</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header