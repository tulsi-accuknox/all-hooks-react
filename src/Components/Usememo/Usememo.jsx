import React from 'react'
import { useState, useMemo } from 'react';
import './Usememo.css'

function Usememo() {
    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);
    const factorial = useMemo(() => factorialOf(number), [number]);
    const onChange = event => {
      setNumber(Number(event.target.value));
    };
    const onClick = () => setInc(inc => inc + 1);

    function factorialOf(n) {
        // console.log('factorialOf(n) called!');
        return n <= 0 ? 1 : n * factorialOf(n - 1);
      }

  return (
    <div>
      <div className="memo_container">
        <h1>5. USEMEMO HOOK</h1>
     
      <p>Factorial of 
      <input type="number" value={number} onChange={onChange} />
      is {factorial}</p>
      
      <h2 onClick={onClick}>Re-render</h2>
      </div>
    </div>
  )
}

export default Usememo
