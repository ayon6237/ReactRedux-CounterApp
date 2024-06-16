
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stateIncrement,stateDecrement, stateReset } from './Redux_State/CounterState/Action/Action';
import './style.css';
const App = () => {
  const count = useSelector((state)=>state.count);
  const dispatch =useDispatch();
  const handleIncrement =()=>{
    dispatch(stateIncrement());
  }
  const handleDecrement =()=>{
    dispatch(stateDecrement());
  }
  const handleReset =()=>{
    dispatch(stateReset());
  }
  return (
    <div className='center'>
      <h1>Counter App</h1>
      <h2>Count : {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
