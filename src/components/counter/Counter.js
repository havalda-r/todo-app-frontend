import React from 'react';
import './Counter.css';

export default function Counter() {
  return (
    <div className='counter'>
      <button onClick={increment}>+1</button>
      <span className='count'>0</span>
    </div>
  );
}

function increment() {
  console.log('increment');
}
