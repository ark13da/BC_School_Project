import './App.css';
import React, { Component } from "react";
import Form from "./components/form.js"
import View from "./components/view.js"
import Overlay from './components/overlay.js';


class App extends Component {

  state={
    firstName: '',
    lastName: '',
    phone: '',
    message: '',
    role:''
}
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    console.log('click');
  }
  noSubmitter = () => {
    console.log('no submit');
  }
  submitter = () => {
    console.log('submit');
  }

  render(){ 
    return (
      <div className="App">
        <h1>Hi</h1>
        <Form change={this.handleChange} click={this.handleClick} />
        <View {...this.state} />
        <Overlay
          {...this.state}
          noSubmit={this.noSubmitter}
          submit={this.submitter}
        />
      </div>
    );  
  }
}

export default App;
