import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, message, score, topScore }) => {
    return (
        <nav className='navbar bg-navbar'>
            <img src={title} alt='' />
            <ul>
                <li>
                    <h3>{message}</h3>
                </li>
                <li>Score: {score}</li>
                <li>Highscore: {topScore}</li>
            </ul>
        </nav>
    );
};

Navbar.defaultProps = {
    title: require('../../tiles/otherImages/title.png'),
    icon: 'fas fa-th'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;
