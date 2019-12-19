// This container will set the images that will display in each tile.

import React from 'react';
import PropTypes from 'prop-types';

const Tile = ({ img }) => {
  return (
      <img
        src={img}
        alt=''
        style={{ width: '144px', height: '144px', border: '5px solid #fbe030'}}
      />      
  );
};

Tile.propTypes = {
  tile: PropTypes.object.isRequired
};

export default Tile;
