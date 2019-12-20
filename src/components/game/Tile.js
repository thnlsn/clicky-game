// This container will set the images that will display in each tile.

import React from 'react';
import PropTypes from 'prop-types';

const Tile = ({ img }) => {
  return (
    <div
      style={{
        maxWidth: '200px',
        maxHeight: '200px',
        border: '5px solid black'
      }}
    >
      <img style={{ objectFit: 'cover' }} src={img} alt='' />
    </div>
  );
};

Tile.propTypes = {
  tile: PropTypes.object.isRequired
};

export default Tile;
