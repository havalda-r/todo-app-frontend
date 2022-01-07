import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class ToDoApp extends Component {
  render() {
    return (
      <div className='toDoApp'>
        <Router>
          <Routes>
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/welcome' element={<WelcomeComponent />} />
            <Route path='/' element={<LoginComponent />} />
          </Routes>
        </Router>
        {/* <LoginComponent />
        <WelcomeComponent /> */}
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return <div>Welcome</div>;
  }
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'in28minutes',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  loginClicked() {
    if (
      this.state.username === 'in28minutes' &&
      this.state.password === 'dummy'
    ) {
      console.log('successful');
      this.setState({ showSuccessMessage: true });
      this.setState({ hasLoginFailed: false });
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
  }

  render() {
    return (
      <div>
        {this.state.hasLoginFailed && <div>Invalid credentials</div>}
        {this.state.showSuccessMessage && <div>Login succesful</div>}
        Username:{' '}
        <input
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:{' '}
        <input
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>LOGIN</button>
      </div>
    );
  }
}
