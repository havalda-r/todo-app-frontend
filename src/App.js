import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <FirstComponent />
      </div>
    );
  }
}
export default App;
