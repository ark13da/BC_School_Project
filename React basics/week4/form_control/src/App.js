import './App.css';
import React, { Component } from "react";
import Form from "./components/form.js"
import View from "./components/view.js"
import Overlay from './components/overlay.js';
import UsersList from "./components/usersList.js";


class App extends Component {

  state = {
    inputData:{
      firstName: '',
      lastName: '',
      phone: '',
      message: '',
      role: ''
    },
    submit: false,
    users: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(data =>
        this.setState({
          users:data
        })
      )
  }

  handleChange = (e) => {
    this.setState({
      inputData: {...this.state.inputData, [e.target.name]: e.target.value}
    })
  }

  handleClick = (e) => {
    this.setState({
      submit: true
    });
    e.preventDefault();
  }

  noSubmitter = () => {
     this.setState({
       submit: false
     });
  }
  submitter = () => {
    this.setState({
      submit: false
    });
  }

  sendDataHandler = () => {
    //console.log(JSON.stringify(this.state.inputData));
    const requestOptiopns = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.inputData),
    };
    fetch("http://localhost:3001/users", requestOptiopns)
      .then(res => res.json())
      .then(data => this.setState({
        postId: data.message
      })
    );
    alert("NOTE IS POSTED!",window.location.reload());
  }

  render() {
    let submitDisplay = this.state.submit ? 'submitVisible' : 'submitHidden';
    return (
      <div className="App">
        <div className="formInput">
          <h1>Form control</h1>
          <Form change={this.handleChange} click={this.handleClick} />
        </div>
        <div className="formOutput">
          <View {...this.state.inputData} />
        </div>
        <div className={submitDisplay}>
          <Overlay
            {...this.state.inputData}
            noSubmit={this.noSubmitter}
            submit={this.sendDataHandler}
          />
        </div>
        <UsersList users={this.state.users} />
      </div>
    );  
  }
}

export default App;
