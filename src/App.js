import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Game from './components/game/Game';
import Footer from './components/layout/Footer';
import './App.css';

class App extends Component {
  state = {
  tiles: [
      require('./assets/drmanhattan.png'),
      require('./assets/rorshach.png'),
      require('./assets/comedian.png')
    ],
    guesses: []
  };

  render() {
    const { tiles } = this.state;

    console.log(tiles);
    return (
      <div
        className='App container-fluid'
        style={{
          backgroundImage: 'url(' + require('./assets/background.png') + ')'
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
