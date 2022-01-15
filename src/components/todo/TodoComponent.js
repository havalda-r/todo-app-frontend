import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';

export class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      description: '',
      targetDate: moment(new Date()).format('YYYY-MM-DD'),
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveTodo(username, this.state.id).then((response) =>
      this.setState({
        description: response.data.description,
        targetDate: moment(response.data.targetDate).format('YYYY-MM-DD'),
      })
    );
  }

  onSubmit(values) {
    //console.log(values);
  }

  validate(values) {
    let errors = {};
    if (!values.description) errors.description = 'Enter a description!';
    else if (values.description.length < 5)
      errors.description = 'Description must be at least 5 characters!';
    if (!moment(values.targetDate).isValid())
      errors.targetDate = 'Enter a valid target date!';
    return errors;
  }

  render() {
    let { description, targetDate } = this.state;
    // let targetDate = this.state.targetDate;
    return (
      <div>
        <h1>Todo</h1>
        <div className='container'>
          <Formik
            initialValues={{ description: description, targetDate: targetDate }}
            onSubmit={this.onSubmit}
            validate={this.validate}
            validateOnChange={false}
            validateOnBlur={false}
            enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name='description'
                  component='div'
                  className='alert alert-warning'
                />
                <ErrorMessage
                  name='targetDate'
                  component='div'
                  className='alert alert-warning'
                />
                <fieldset className='form-group'>
                  <label>Description</label>
                  <Field
                    className='form-control'
                    type='text'
                    name='description'
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <label>Target date</label>
                  <Field
                    className='form-control'
                    type='date'
                    name='targetDate'
                  />
                </fieldset>
                <button className='btn btn-success' type='submit'>
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
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
