import React, { Component } from 'react';

class ListTodosComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          description: 'Learn to dance',
          done: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          description: 'Become an expert in React',
          done: false,
          targetDate: new Date(),
        },
        {
          id: 3,
          description: 'Visit India',
          done: false,
          targetDate: new Date(),
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>List todos</h1>
        <div className='container'>
          <table className='table'>
            <thead>
              <tr>
                <th>DESCRIPTION</th>
                <th>DONE</th>
                <th>TARGET DATE</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListTodosComponent;
