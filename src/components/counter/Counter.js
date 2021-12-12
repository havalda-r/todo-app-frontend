import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(by) {
    //console.log(`increment from parent - ${by}`);
    //this.state.counter++; BAD PRACTICE
    this.setState((previousState) => {
      return { counter: previousState.counter + by };
    });
  }

  decrement(by) {
    this.setState((previousState) => {
      return { counter: previousState.counter - by };
    });
  }

  render() {
    return (
      <div className='counter'>
        <CounterButton
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <span className='count'>{this.state.counter}</span>
      </div>
    );
  }
}

class CounterButton extends Component {
  //Define initial state in constructor
  //state => counter = 0
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    //const style = { fontSize: '350px' };
    return (
      <div className='counter'>
        <button onClick={this.increment}>+{this.props.by}</button>
        <button onClick={this.decrement}>-{this.props.by}</button>
      </div>
    );
  }

  //Update state
  //counter++
  increment() {
    //this.state.counter++; BAD PRACTICE
    this.setState((prevState) => {
      return { counter: prevState + this.props.by };
    });
    this.props.incrementMethod(this.props.by);
  }

  decrement() {
    this.setState((prevState) => {
      return { counter: prevState - this.props.by };
    });
    this.props.decrementMethod(this.props.by);
  }
}

CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: PropTypes.number,
};
