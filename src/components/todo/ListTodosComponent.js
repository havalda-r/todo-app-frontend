import React, { Component } from 'react';

class ListTodosComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      todos: [
        { id: 1, description: 'Learn to dance' },
        { id: 2, description: 'Become an expert in React' },
        { id: 3, description: 'Visit India' },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>List todos</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo) => (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListTodosComponent;
