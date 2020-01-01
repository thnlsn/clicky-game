import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Game from './components/game/Game';
/* import Footer from './components/layout/Footer'; */
import tiles from './tiles/tiles';
import './App.css';

class App extends Component {
    state = {
        isGuessCorrect: true,
        tiles: tiles,
        score: 0,
        maxScore: 12,
        topScore: 0,
        message: 'Click an image to start your adventure!'
    };

    componentDidMount() {
        this.randomizeTiles(tiles);
        console.log(this.state);
    }

    handleClick = (char, id) => {
        let choices = this.state.tiles;
        console.log(char);
        let chosen = choices.findIndex(chosen => chosen.name === char);
        if (!choices[chosen].clicked) {
            let id = choices[chosen].id;
            this.handleCorrectClick(chosen, id);
        } else {
            this.handleIncorrectClick(chosen, id);
        }
        console.log(this.state.tiles[chosen]);
        this.randomizeTiles(tiles);
        console.log(this.state.tiles[chosen]);
    };

    handleCorrectClick = (index, num) => {
        console.log(num);
        this.setState({ isGuessCorrect: true });
        let id = { ...this.state.tiles[index] };
        this.setState();

        console.log('correct');
    };

    handleIncorrectClick = char => {
        this.setState({ isGuessCorrect: false });
        console.log('incorrect');
    };

    randomizeTiles = arr => {
        let currentIndex = arr.length,
            temporaryValue,
            randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }
        let newTiles = arr;
        this.setState({ tiles: newTiles });
    };

    render() {
        const { message, score, topScore, tiles } = this.state;
        return (
            <div className='App container-fluid'>
                <Navbar message={message} score={score} topScore={topScore} />
                <Game tiles={tiles} handleClick={this.handleClick} />
                {/*                 <Footer /> */}
            </div>
        );
    }
}

export default App;
