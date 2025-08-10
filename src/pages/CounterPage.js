import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';
import '../index.css';

function Counter() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

     return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Toolkit Counter</h1>
        <div>
          <h2>Count: {count}</h2>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())} // Dispatch the increment action
          >
            Increment
          </button>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())} // Dispatch the decrement action
          >
            Decrement
          </button>
          <button
            aria-label="Increment by 5"
            onClick={() => dispatch(incrementByAmount(5))} // Dispatch with a payload
          >
            Increment by 5
          </button>
        </div>
      </header>
    </div>
  );
}

export default Counter;