import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Game from './components/game/Game';
import Footer from './components/layout/Footer';
import tiles from './tiles/tiles';
import './App.css';

class App extends Component {
    state = {
        tiles: tiles,
        score: 0,
        topScore: 0,
        message: 'Click on an image below to begin your journey to the throne!'
    };

    componentDidMount() {
        this.randomizeTiles(this.state.tiles);
    }

    handleClick = char => {
        let choices = this.state.tiles;
        let chosen = choices.findIndex(chosen => chosen.name === char);
        if (!choices[chosen].clicked) {
            let id = choices[chosen].id;
            this.handleCorrectClick(chosen, id);
        } else {
            this.handleIncorrectClick(char);
        }
        /* console.log(this.state.tiles[chosen]); */
        this.randomizeTiles(this.state.tiles);
        console.log(this.state.score);
    };

    // https://stackoverflow.com/questions/41949387/how-to-use-immutability-helper-to-update-a-nested-object-within-an-array/41949486#41949486
    handleCorrectClick = index => {
        this.setState({
            message: `You've outsmarted ${this.state.tiles[index].name}. Good job!`
        });
        console.log(this.state.score);
        this.setState({ score: this.state.score + 1 });
        console.log(this.state.score);
        console.log(tiles.length);
        console.log(this.state.score >= tiles.length);
        if (this.state.score + 1 >= tiles.length) {
            this.setState({
                message: `Congratulations! You are the ruler of the Seven Kingdoms! Play again?`
            });
            this.reset();
        }
        if (this.state.score >= this.state.topScore) {
            this.setState({ topScore: this.state.score + 1 });
        }
        let updatedTiles = this.state.tiles;
        updatedTiles[index].clicked = true;
        this.setState({ tiles: updatedTiles });
        console.log(tiles);
    };

    handleIncorrectClick = char => {
        this.setState({
            message: `Defeated by the hands of ${char}. Try again?`
        });
        this.reset();
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
        let newTiles = this.state.tiles;
        newTiles.map(tile => (tile.clicked = false));
        this.setState({ tiles: newTiles });
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
