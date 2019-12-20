import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Game from './components/game/Game';
import Footer from './components/layout/Footer';
import './App.css';

class App extends Component {
  state = {
    tiles: [
      'https://picsum.photos/500',
      'https://picsum.photos/501',
      'https://picsum.photos/502',
      'https://picsum.photos/503',
      'https://picsum.photos/504',
      'https://picsum.photos/505',
      'https://picsum.photos/506',
      'https://picsum.photos/507',
      'https://picsum.photos/508',
      'https://picsum.photos/509',
      'https://picsum.photos/510',
      'https://picsum.photos/511'
    ]
  };

  render() {
    const { tiles } = this.state;

    console.log(tiles);
    return (
      <div
        className='App'
        style={{ backgroundImage: "url('./The Bad News.png'" }}
      >
        <Navbar />
        <div className='container'>
          <Game tiles={tiles} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
