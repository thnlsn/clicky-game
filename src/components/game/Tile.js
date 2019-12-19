// This container will set the images that will display in each tile.

import React from 'react';
import PropTypes from 'prop-types';

const Tile = ({ tile: { img } }) => {
  return (
      <img
        src={img}
        alt=''
/*         className='round-img' */
        style={{ width: '60px', height: '60px' }}
      />
  );
};

Tile.propTypes = {
  tile: PropTypes.object.isRequired
};

export default Tile;
