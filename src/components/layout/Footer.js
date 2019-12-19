import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ icon, link, text }) => {
  return (
    <nav className='navbar bg-navbar'>
      <h1>
        <a href={link}><i>{icon}</i>{text}</a>
      </h1>
    </nav>
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