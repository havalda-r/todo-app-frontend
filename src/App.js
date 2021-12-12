import React, { Component } from 'react';
import './App.css';
//import Counter from './components/counter/Counter';
import ToDoApp from './components/todo/ToDoApp';
//import FirstComponent from './components/learning-examples/FirstComponent';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/*<Counter />*/}
        <ToDoApp />
      </div>
    );
  }
}

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className='LearningComponents'>
//         <FirstComponent />
//       </div>
//     );
//   }
// }

export default App;
