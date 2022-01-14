import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeFunction from './WelcomeComponent';
import LoginComponentWithNavigate from './LoginComponent';

export default class ToDoApp extends Component {
  render() {
    return (
      <div className='toDoApp'>
        <h1>TODO Management</h1>
        <Router>
          <Routes>
            <Route path='/' element={<LoginComponentWithNavigate />} />
            <Route path='/login' element={<LoginComponentWithNavigate />} />
            <Route path='/welcome/:name/*' element={<WelcomeFunction />} />
            <Route path='*' element={<ErrorComponent />} />
          </Routes>
        </Router>
        {/* <LoginComponent />
        <WelcomeComponent /> */}
      </div>
    );
  }
}

function ErrorComponent() {
  return <div>An error occured. Contact support!</div>;
}
