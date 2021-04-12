import React, { Component } from "react";
import "./App.css";
import Circle from "./components/circle.js";
import Overlay from "./components/overlay.js";
import endsound from "./assets/audio/endsound.wav"

const getRandInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min+1)+min);
};

const gameOverSound = new Audio(endsound);

class App extends Component {
  state = {
    circles: [
      { id: 1, color: "green" },
      { id: 2, color: "yellow" },
      { id: 3, color: "red" },
      { id: 4, color: "orange" },
    ],
    score: 0,
    current: 0,
    gameOver: false,
    round: 0,
    gameStart:false
  };

  timer = undefined;
  pace = 1500;

  clickHandler = (id) => {
    if (this.state.current !== id) {
      this.endHandler();
      return;
    }
    this.setState({
      score: this.state.score + 1,
      round:0
    });
  };

  nextCircle = () => {
    console.log(this.state.gameStart)
    if (this.state.round >= 5) {
      this.endHandler();
      return;
    }

    let nextActive = undefined;

    do {
      nextActive = getRandInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      round: this.state.round + 1,
      gameStart:true
    });

    this.pace *= 0.95;

    this.timer = setTimeout(() => {
      this.nextCircle()
    }, this.pace);

    console.log(this.state.current);
  }

  startHandler = () => {
    this.nextCircle();
    
  }

  endHandler = () => {
    clearTimeout(this.timer);
    this.setState({
      gameOver: true,
      round: 0,
    });
    gameOverSound.play();
  }

  render() {
    const circleList = this.state.circles.map((i) => {
      return (
        <Circle
          key={i.id}
          id={i.id}
          color={i.color}
          click={() => this.clickHandler(i.id)}
          active={this.state.current === i.id}
          disabled={this.state.gameStart}
        />
      );
    });

    return (
      <main>
        <div className="App">
          <h1>Speedtest</h1>
          <p>Your score is: {this.state.score}</p>
          <div className="circleList">{circleList}</div>
          <button onClick={this.startHandler} disabled={this.state.gameStart}>
            Start
          </button>
          <button onClick={this.endHandler} disabled={!this.state.gameStart}>
            Stop
          </button>
        </div>
        {this.state.gameOver && <Overlay score={this.state.score} />}
      </main>
    );
  }
}

export default App;
