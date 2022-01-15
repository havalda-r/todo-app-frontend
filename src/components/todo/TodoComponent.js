import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

export class TodoComponent extends Component {
  render() {
    return <div>Todo component - {this.props.id}</div>;
  }
}

function TodoFunction() {
  const { id } = useParams();
  return (
    <>
      <TodoComponent id={id} />
    </>
  );
}

export default TodoFunction;
