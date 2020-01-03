import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Game from './components/game/Game';
import Footer from './components/layout/Footer';
import defaultTiles from './tiles/tiles';
import './App.css';

class App extends Component {
    state = {
        tiles: defaultTiles,
        score: 0,
        maxScore: defaultTiles.length,
        topScore: 0,
        message: 'Click an image to start your adventure!'
    };

    componentDidMount() {
        this.randomizeTiles(this.state.tiles);
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
        /* console.log(this.state.tiles[chosen]); */
        this.randomizeTiles(this.state.tiles);
    };

    // https://stackoverflow.com/questions/41949387/how-to-use-immutability-helper-to-update-a-nested-object-within-an-array/41949486#41949486
    handleCorrectClick = (index, id) => {
        let newScore = this.state.score + 1;
        this.setState({ score: newScore });
        console.log(id);
        console.log(index);
        let updatedTiles = this.state.tiles;
        updatedTiles[index].clicked = true;
        console.log(updatedTiles);
        this.setState({ tiles: updatedTiles });
        console.log('Correct');
    };

    handleIncorrectClick = () => {
        this.setState({});
        console.log('Incorrect');
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

    reset = () => {
        this.setState({ tiles: defaultTiles });
        this.setState({ score: 0 });
        this.randomizeTiles(this.state.tiles);
    };

    render() {
        const { message, score, topScore, tiles } = this.state;
        return (
            <div className='App container-fluid'>
                <Navbar message={message} score={score} topScore={topScore} />
                <Game tiles={tiles} handleClick={this.handleClick} />
                <Footer />
            </div>
        );
    }
}

export default App;
