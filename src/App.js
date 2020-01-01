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

    handleClick = (char, index) => {
        let choices = tiles;
        console.log(char);
        index = choices.findIndex(index => index.name === char);
        if (!choices[index].clicked) {
            this.setState();
            this.handleCorrectClick(char, index);
        } else {
            this.handleIncorrectClick(char, index);
        }
        this.randomizeTiles(tiles);
    };

    handleCorrectClick = (name, index) => {
        this.setState({ isGuessCorrect: true });
        this.setState(prevState => ({
            tiles: prevState.tiles.map(tile =>
                tile.index === index ? { ...tile, clicked: true } : tile
            )
        }));
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
