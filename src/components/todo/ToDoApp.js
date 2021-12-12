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
  render() {
    return (
      <div>
        Username: <input type='text' name='username' />
        Password: <input type='password' name='password' />
        <button>LOGIN</button>
      </div>
    );
  }
}
