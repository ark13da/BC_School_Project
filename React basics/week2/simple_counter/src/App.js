import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 1000
  };

  //evnt handlers
  addHandler = () => {
    this.setState(
      { counter: this.state.counter + 1 }
    );
  };

  removeHandler = () => {
    if (this.state.counter>0){
      this.setState(
       { counter: this.state.counter - 1 }
      );
    }
  };

  resetHandler = () => {
    this.setState(
      { counter: 0 }
    );
  };

  render() {
    
    let circleClass = `${this.state.counter === 0 ? "" : this.state.counter % 2 === 0 ? "even" : "odd"
      } circle`;
  return(
    <div>
      <h1 className={circleClass}>{this.state.counter}</h1>
      <button onClick={ this.addHandler}>Add one</button>
      <button onClick={this.removeHandler }>Remove one</button>
      <button onClick={ this.resetHandler}>Reset</button>
    </div>
  );
  }
}

export default App;