// This container will set the images that will display in each tile.

import React from 'react';
import PropTypes from 'prop-types';

const Tile = ({ name, image, handleClick }) => {
    return (
        <div
            className='hvr-grow'
            style={{
                border: '2px solid white',
                boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.20)'
            }}
            onClick={() => handleClick(name)}
        >
            <img
                className='sepia'
                style={{
                    objectFit: 'cover',
                    maxWidth: '200px',
                    maxHeight: '200px',
                    minHeight: '50px',
                    minWidth: '50px'
                }}
                src={require(`../../${image}`)}
                alt={name}
            />
        </div>
    );
};

Tile.propTypes = {
    image: PropTypes.string.isRequired
};

export default Tile;
