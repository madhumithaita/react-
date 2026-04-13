import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import StaticPage from './pages/StaticPage/StaticPage';
import ContactForm from './components/ContactForm/ContactForm';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <main id="mainContent">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/hotels" element={<StaticPage title="Hotels" />} />
                        <Route path="/rentals" element={<StaticPage title="Bike Rentals" />} />
                        <Route path="/restaurants" element={<StaticPage title="Restaurants" />} />
                        <Route path="/:placeId" element={<Details />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
                <ContactForm />
            </div>
        </BrowserRouter>
    );
}

export default App;
