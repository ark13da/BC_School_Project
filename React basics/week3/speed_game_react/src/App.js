import React, { Component } from "react";
import './App.css';
import Circle from './components/circle.js'

class App extends Component {
  state = {
    circles: [
      { id: 1, color: 'green' },
      { id: 2, color: 'yellow' },
      { id: 3, color: 'red' },
      { id: 4, color: 'orange' }
    ]
  };

  render() { 
    return (
      <div className="App">
        <h1>Speedtest</h1>
        <p>Your score is:</p>
        <div className="circleList">
          {this.state.circles.map(i => { return <Circle key={i.id} id={i.id} color={i.color}/>})}
        </div>
        <button>Start</button>
        <button>Stop</button>
      </div>
    );
  }
}

export default App;
