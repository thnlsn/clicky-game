// This component will set the grid and style for the game container and its tiles.

import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile'

const Game = ({ tiles }) => {
  console.log(tiles);
  return(       
    <div style={tileStyle}>
      {tiles.map((tile, index) => (
        <Tile key={index} img={tile} />
      ))}
    </div>
  )};

Game.propTypes = {
  tiles: PropTypes.array.isRequired,
};

const tileStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr',
  gridGap: '1rem'
};

export default Game;
