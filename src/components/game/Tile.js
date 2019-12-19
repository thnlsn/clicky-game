// This container will set the images that will display in each tile.

import React from 'react';
import PropTypes from 'prop-types';

const Tile = ({ img }) => {
  return (
    <div style={{ width: '100%', height: '100%', border: '5px solid #fbe030'}}>
      <img
        src={img}
        alt=''
      />        
    </div>
    
  );
};

Tile.propTypes = {
  tile: PropTypes.object.isRequired
};

export default Tile;
