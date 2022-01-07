import React, { Component } from 'react';

export default class ToDoApp extends Component {
  render() {
    return (
      <div className='toDoApp'>
        <LoginComponent />
      </div>
    );
  }
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'in28minutes',
      password: '',
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div>
        Username:{' '}
        <input
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        Password:{' '}
        <input
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <button>LOGIN</button>
      </div>
    );
  }
}
