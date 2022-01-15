import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { Field, Form, Formik } from 'formik';

export class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      description: 'Learn forms',
      targetDate: moment(new Date()).format('YYYY-MM-DD'),
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    console.log(values);
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
          >
            {(props) => (
              <Form>
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
