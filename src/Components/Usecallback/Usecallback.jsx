import React, { useState, useCallback } from 'react'
import './Usecallback.css'

const functionsCounter = new Set()
function Usecallback() {
    const [count, setCount] = useState(0)
  const [otherCounter, setOtherCounter] = useState(0)

  const increment = useCallback(() => {
    setCount(count + 1)
  },[count])


  const decrement = useCallback(() => {
    setCount(count - 1)
  },[count])


  const incrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter + 1)
  },[otherCounter])

  functionsCounter.add(increment)
  functionsCounter.add(decrement)
  functionsCounter.add(incrementOtherCounter)

//   alert(functionsCounter)
console.log(functionsCounter.size)

  return (
    <div>
        <div className="callback_container">
            <h1>6. USECALLBACK HOOK</h1>
            <div className="callback_content">
            <h2>Count: {count}</h2>
              <div className="callback_btns">
              <h3 onClick={increment}>+</h3>
              <h3 onClick={decrement}>-</h3>
              <h3 onClick={incrementOtherCounter}>increment</h3>
              </div>
            </div>
       </div>
    </div>
            
  )
}

export default Usecallback