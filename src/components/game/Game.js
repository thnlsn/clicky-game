// This component will set the grid and style for the game container and its tiles.

import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';

const Game = ({ tiles, handleClick }) => {
    return (
        <div className='container' style={gridStyle}>
            {tiles.map(tile => (
                <Tile
                    key={tile.id}
                    name={tile.name}
                    image={tile.image}
                    clicked={tile.clicked}
                    handleClick={handleClick}
                />
            ))}
        </div>
    );
};

Game.propTypes = {
    tiles: PropTypes.array.isRequired
};

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr',
    gridGap: '1rem',
    justifyItems: 'center',
    padding: '2rem'
};

export default Game;
