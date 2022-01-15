import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeFunction from './WelcomeComponent';
import LoginComponentWithNavigate from './LoginComponent';
import ListTodosComponentWithNavigate from './ListTodosComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogoutComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import ErrorComponent from './ErrorComponent';
import TodoComponent from './TodoComponent';
import TodoFunction from './TodoComponent';

export default class ToDoApp extends Component {
  render() {
    return (
      <div className='toDoApp'>
        <Router>
          <HeaderComponent />
          <Routes>
            <Route path='/' element={<LoginComponentWithNavigate />} />
            <Route path='/login' element={<LoginComponentWithNavigate />} />
            <Route
              path='/welcome/:name/*'
              element={
                <AuthenticatedRoute>
                  <WelcomeFunction />
                </AuthenticatedRoute>
              }
            />
            <Route
              path='/todos'
              element={
                <AuthenticatedRoute>
                  <ListTodosComponentWithNavigate />
                </AuthenticatedRoute>
              }
            />
            <Route
              path='/todos/:id'
              element={
                <AuthenticatedRoute>
                  <TodoFunction />
                </AuthenticatedRoute>
              }
            />
            <Route
              path='/logout'
              element={
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            />

            <Route path='*' element={<ErrorComponent />} />
          </Routes>
        </Router>
        <FooterComponent />
      </div>
    );
  }
}
