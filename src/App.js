import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Game from './components/game/Game'

class App extends Component {
  state = {
    tiles: ['https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200']
  };

  render() {
    const { tiles } = this.state;

    return <Router>
            <div className='App'>
              <Navbar>
                <Game tiles={tiles} />
              </Navbar>
              <div className='container'>

              </div>
            </div>
          </Router>
    }
}

export default App;
