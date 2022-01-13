import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  render() {
    return (
      <div>
        <ShowInvalidCredential hasLoginFailed={this.state.hasLoginFailed} />
        {this.state.showSuccessMessage && <div>Login Successful</div>}
        User Name:{' '}
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
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleLogin() {
    if (this.state.username === 'test' && this.state.password === 'test') {
      this.props.navigate('/welcome');
    } else {
      console.log('Login failed');
      this.setState({
        hasLoginFailed: true,
        showSuccessMessage: false,
      });
    }
  }
}

function ShowInvalidCredential(props) {
  if (props.hasLoginFailed) {
    return <div>Invalid Credential</div>;
  }
  return null;
}

function LoginComponentWithNavigate(props) {
  const navigate = useNavigate();
  return <LoginComponent {...props} navigate={navigate} />;
}

export default LoginComponentWithNavigate;
