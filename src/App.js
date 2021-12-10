import React, { Component } from 'react';
import './App.css';
//import FirstComponent from './components/learning-examples/FirstComponent';
import Counter from './components/counter/Counter';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Counter />
        <Counter by={5} />
        <Counter by={10} />
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