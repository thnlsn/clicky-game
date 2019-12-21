// This container will set the images that will display in each tile.

import React from 'react';
import PropTypes from 'prop-types';

const Tile = ({ img }) => {
  return (
    <div
      style={{
        maxWidth: '200px',
        maxHeight: '200px',
        border: '1px solid black',
        boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.20)'
      }}
    >
      <img
        style={{ objectFit: 'cover' }}
        src={'../../assets/background.png'}
        alt=''
      />
    </div>
  );
};

Tile.propTypes = {
  tile: PropTypes.object.isRequired
};

export default Tile;
