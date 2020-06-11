import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Simpleform from './Simpleform'
import logo from './logo.svg';
import './App.css';



const initialState = {
  user: {
    name: '',
    email: '',
    message: ''
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
    this.callbackFunction = this.callbackFunction.bind(this);
  }

  callbackFunction = (childData) => {
      this.setState({user: childData})
}

  render() {
    return (
      <div className="App">

        <Simpleform parentCallback = {this.callbackFunction}/>
        <p> {this.state.user.name} </p>
        <p> {this.state.user.email} </p>
        <p> {this.state.user.message} </p>
      </div>
    );
  }
}

export default App;
