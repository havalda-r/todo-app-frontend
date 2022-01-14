import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

class WelcomeComponent extends Component {
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className='container'>
          Welcome {this.props.loginName}! You can manage your todos{' '}
          <Link to='/todos'>here!</Link>
        </div>
      </>
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
