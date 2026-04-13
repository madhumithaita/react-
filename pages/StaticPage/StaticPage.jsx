import React from 'react';
import PropTypes from 'prop-types';

const StaticPage = ({ title }) => {
    return (
        <section className="static-page section-padding">
            <div className="container">
                <h1 className="title-primary text-center">{title}</h1>
                <p className="text-center">This page is currently under development.</p>
            </div>
        </section>
    );
};

StaticPage.propTypes = {
    title: PropTypes.string.isRequired
};

export default StaticPage;
