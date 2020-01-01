// This container will set the images that will display in each tile.

import React from 'react';
import PropTypes from 'prop-types';

const Tile = ({ name, image, test, clicked }) => {
    console.log(image);
    return (
        <div
            style={{
                border: '1px solid black',
                boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.20)'
            }}
        >
            <img
                className='sepia'
                style={{
                    objectFit: 'cover',
                    maxWidth: '200px',
                    maxHeight: '200px'
                }}
                src={require(`../../tiles/tileImages/${image}`)}
                alt={name}
            />
        </div>
    );
};

Tile.propTypes = {
    image: PropTypes.string.isRequired
};

export default Tile;

/*     {
        "id": 2,
        "name": "Circe",
        "image": "require('./images/tiles/circe.jpg')",
        "clicked": false
    },
    {
        "id": 3,
        "name": "Daenarys",
        "image": "require('./images/tiles/daenerys.jpg')",
        "clicked": false
    },
    {
        "id": 4,
        "name": "Davos",
        "image": "require('./images/tiles/davos.jpg')",
        "clicked": false
    },
    {
        "id": 5,
        "name": "Jaime",
        "image": "require('./images/tiles/jaime.jpg')",
        "clicked": false
    },
    {
        "id": 6,
        "name": "Jon",
        "image": "require('./images/tiles/jon.jpg')",
        "clicked": false
    },
    {
        "id": 7,
        "name": "Ned",
        "image": "require('./images/tiles/ned.jpg')",
        "clicked": false
    },
    {
        "id": 8,
        "name": "Petyr",
        "image": "require('./images/tiles/petyr.jpg')",
        "clicked": false
    },
    {
        "id": 9,
        "name": "Ramsey",
        "image": "require('./images/tiles/ramsey.jpg')",
        "clicked": false
    },
    {
        "id": 10,
        "name": "Sansa",
        "image": "require('./images/tiles/sansa.jpg')",
        "clicked": false
    },
    {
        "id": 11,
        "name": "Tormund",
        "image": "require('./images/tiles/tormund.jpg')",
        "clicked": false
    },
    {
        "id": 12,
        "name": "Tyrion",
        "image": "require('./images/tiles/tyrion.jpg')",
        "clicked": false
    } */
