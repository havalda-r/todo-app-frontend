import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
  //Define initial state in constructor
  //state => counter = 0
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className='counter'>
        <button onClick={this.increment}>+1</button>
        <span className='count'>{this.state.counter}</span>
      </div>
    );
  }

  //Update state
  //counter++
  increment() {
    //this.state.counter++; BAD PRACTICE
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
