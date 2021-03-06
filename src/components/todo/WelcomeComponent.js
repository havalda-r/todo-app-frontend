import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldservice';

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.handleSuccesfulResponse = this.handleSuccesfulResponse.bind(this);
    this.handleError = this.handleError.bind(this);
    this.state = {
      welcomeMessage: '',
    };
  }
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className='container'>
          Welcome {this.props.loginName}! You can manage your todos{' '}
          <Link to='/todos'>here!</Link>
        </div>
        <div className='container'>
          Click here to get a customized message!
          <button
            onClick={this.retrieveWelcomeMessage}
            className='btn btn-success'
          >
            Get welcome message!
          </button>
        </div>
        <div className='container'>{this.state.welcomeMessage}</div>
      </>
    );
  }
  retrieveWelcomeMessage() {
    // HelloWorldService.executeHelloWorldService().then((response) =>
    //   this.handleSuccesfulResponse(response)
    // );

    // HelloWorldService.executeHelloWorldBeanService().then((response) =>
    //   this.handleSuccesfulResponse(response)
    // );
    HelloWorldService.executeHelloWorldPathVariableService(this.props.loginName)
      .then((response) => this.handleSuccesfulResponse(response))
      .catch((error) => {
        this.handleError(error);
      });
  }

  handleSuccesfulResponse(response) {
    this.setState({ welcomeMessage: response.data.message });
  }

  handleError(error) {
    let errorMessage = '';
    if (error.message) errorMessage += error.message;
    if (error.response && error.response.data)
      errorMessage += error.response.data.message;
    this.setState({ welcomeMessage: errorMessage });
  }
}

function WelcomeFunction() {
  const { name } = useParams();
  return (
    <div>
      <WelcomeComponent loginName={name} />
    </div>
  );
}

export default WelcomeFunction;
