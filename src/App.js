import React, { Component } from 'react';
import './App.css';
import Counter from './components/counter/Counter';
//import FirstComponent from './components/learning-examples/FirstComponent';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Counter />
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
