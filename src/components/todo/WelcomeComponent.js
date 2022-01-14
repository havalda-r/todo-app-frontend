import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        <h1>
          Welcome {this.props.loginName}! You can manage your todos{' '}
          <Link to='/todos'>here!</Link>
        </h1>
      </div>
    );
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
