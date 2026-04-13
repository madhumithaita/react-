import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from "../../assets/logo.png";
import './Header.scss';

const Header = () => {
    return (
        <header className="site-header">
            <div className="container header-container">
                <Link to="/" className="logo-link" id="logoLink">
                    <img src={logo} alt="Explorer Logo" className="logo" />
                </Link>
                <nav className="navbar" id="mainNavbar">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link to="/hotels" className="nav-link">Hotels</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rentals" className="nav-link">Bike Rentals</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/restaurants" className="nav-link">Restaurants</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

Header.propTypes = {}; // No props currently, but requirement says PropTypes is mandatory

export default Header;