import React, { useState } from 'react'

const Counter = () => {
    // const [state,setState] = useState(initialValue);
    const [count, setCount] = useState(0);

    const handleIncrement = () =>{
        setCount(count => count+1);
        setCount(count => count+1);
        setCount(count => count+1);
    }
    const handleDecrement = () =>{
        setCount(count-1);
    }
    const handleReset = () =>{
        setCount(0);
    }
  return (
    <div>
        <h1>Counter Application</h1>
        <p>Count is {count}</p>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Counter