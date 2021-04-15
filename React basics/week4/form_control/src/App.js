import './App.css';
import React, { Component } from "react";
import Form from "./components/form.js"
import View from "./components/view.js"


class App extends Component {
  render(){ 
    return (
      <div className="App">
        <h1>Hi</h1>
        <Form />
        <View/>
      </div>
    );  
  }
}

export default App;
