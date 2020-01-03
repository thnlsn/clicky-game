import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ icon, link, text }) => {
    return (
        <div className='footer'>
            <h5>
                <a href={link}>
                    <i className={icon}> {text}</i>
                </a>
            </h5>
        </div>
    );
};

Footer.defaultProps = {
    text: 'GitHub Link',
    link: 'https://github.com/thnlsn/clicky-game',
    icon: 'fab fa-github'
};

Footer.propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Footer;
