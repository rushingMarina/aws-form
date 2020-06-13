import React, { Component } from 'react';
import Simpleform from './Simpleform'
import './App.css';
import SendEmail from './Sendemail';
import SaveMessage from './Savemessage';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

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
    let name = childData.name;
    let messageToSave = childData.message;
    let email = childData.email;
    let subject = childData.name;
    let message = 'Here is your message: ' + childData.message;
    SendEmail(email, subject, message);
    SaveMessage(name, email, messageToSave);
      this.setState({user: childData});
  }

  render() {
    return (
      <div className="App">
        <Simpleform parentCallback = {this.callbackFunction}/>
        <div className="note-box">
        <Typography className="note" variant="body2" gutterBottom>
           Note: Please check your spam folders if you do not see an email from 333marina2007@gmail.com in your inbox.
        </Typography>
        </div>
      </div>
    );
  }
}

export default App;
