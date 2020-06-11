import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Simpleform from './Simpleform'
import logo from './logo.svg';
import './App.css';
import SendEmail from './Sendemail'



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
    let email = childData.email;
    let subject = 'Thank you for your message.';
    let message = 'Here is your message: ' + childData.message;
    SendEmail(email, subject, message);
      this.setState({user: childData});
  }

  render() {
    return (
      <div className="App">

        <Simpleform parentCallback = {this.callbackFunction}/>
      </div>
    );
  }
}

export default App;
