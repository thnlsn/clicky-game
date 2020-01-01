import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Game from './components/game/Game';
import Footer from './components/layout/Footer';
import tiles from './tiles/tiles';
import './App.css';

class App extends Component {
    state = {
        tiles: tiles,
        guesses: []
    };

    render() {
        const { tiles } = this.state;

        console.log(tiles);
        return (
            <div
                className='App container-fluid'
                style={{
                    backgroundImage:
                        'url(' +
                        require('./tiles/otherImages/background.png') +
                        ')'
                }}
            >
                <Navbar />
                <div className='container'>
                    <div className='row'>
                        <div className='col-3 col-12-md'></div>
                        <Game tiles={tiles} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
