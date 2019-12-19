import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Game from './components/game/Game'
import './App.css';

class App extends Component {
  state = {
    tiles: ['https://picsum.photos/400', 'https://picsum.photos/123', 'https://picsum.photos/434', 'https://picsum.photos/252', 'https://picsum.photos/535', 'https://picsum.photos/213', 'https://picsum.photos/553', 'https://picsum.photos/646', 'https://picsum.photos/888']
  };

  render() {
    const { tiles } = this.state;

    console.log(tiles);
    return (
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Game tiles={tiles} />
          </div>
        </div>      
    )

  }
}

export default App;
