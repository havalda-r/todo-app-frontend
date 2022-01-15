import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from '../../components/todo/AuthenticationService';
import { useNavigate } from 'react-router-dom';

class ListTodosComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      todos: [
        // {
        //   id: 1,
        //   description: 'Learn to dance',
        //   done: false,
        //   targetDate: new Date(),
        // },
        // {
        //   id: 2,
        //   description: 'Become an expert in React',
        //   done: false,
        //   targetDate: new Date(),
        // },
        // {
        //   id: 3,
        //   description: 'Visit India',
        //   done: false,
        //   targetDate: new Date(),
        // },
      ],
      message: null,
    };
    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    this.updateTodoClicked = this.updateTodoClicked.bind(this);

    this.refreshTodos = this.refreshTodos.bind(this);
  }

  componentDidMount() {
    this.refreshTodos();
  }

  refreshTodos() {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      this.setState({ todos: response.data });
    });
  }

  deleteTodoClicked(id) {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.deleteTodo(username, id).then((response) => {
      this.setState({ message: `Delete of todo #${id} succesful!` });
      this.refreshTodos();
    });
  }

  updateTodoClicked(id) {
    console.log(id);
    this.props.navigate(`/todos/${id}`);
    // let username = AuthenticationService.getLoggedInUserName();
    // TodoDataService.deleteTodo(username, id).then((response) => {
    //   this.setState({ message: `Delete of todo #${id} succesful!` });
    //   this.refreshTodos();
    // });
  }

  render() {
    return (
      <div>
        <h1>List todos</h1>
        {this.state.message && (
          <div className='alert alert-success'>{this.state.message}</div>
        )}
        <div className='container'>
          <table className='table'>
            <thead>
              <tr>
                <th>DESCRIPTION</th>
                <th>DONE</th>
                <th>TARGET DATE</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                  <td>
                    <button
                      className='btn btn-success'
                      onClick={() => this.updateTodoClicked(todo.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className='btn btn-warning'
                      onClick={() => this.deleteTodoClicked(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function ListTodosComponentWithNavigate(props) {
  const navigate = useNavigate();
  return <ListTodosComponent {...props} navigate={navigate} />;
}

export default ListTodosComponentWithNavigate;
