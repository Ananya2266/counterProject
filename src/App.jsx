import React, { useState } from 'react'
import './App.css'
const App = () => {
  const[initialCount,setCount]=useState(0)
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
        <div className='container'>
        <h1 className='heading'>COUNTER APP</h1>
        <div className='box'>
        <button className='button-increment' onClick={()=> setCount(initialCount+1)}>increment</button>
      <h2 className='count'>{initialCount}</h2>
      <button  className='button-decrement' onClick={() => setCount(initialCount-1) }>decrement</button>
      <button className='button-reset'
      onClick={handleReset}>Reset</button>
        </div>
  
      </div>
    </div>
  )
}

export default App
