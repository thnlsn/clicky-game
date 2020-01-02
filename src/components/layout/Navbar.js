import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title, message, score, topScore }) => {
    return (
        <nav className='navbar bg-navbar'>
            <h1>
                <i className={icon} /> {title}
            </h1>
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
    title: 'MEMORY GAME',
    icon: 'fas fa-th'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;
