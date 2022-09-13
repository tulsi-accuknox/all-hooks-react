import React,{useReducer} from 'react'
import './Usereducer.css'
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}


function Usereducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <div className="usereducer_container">
        <h1>3. USEREDUCER HOOK</h1>
    <div className="counter">
    <h2>Count: {state.count}</h2>
     <div className="counter_btns">
     <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    <button onClick={() => dispatch({type: 'increment'})}>+</button>
     </div>
    </div>
    </div>
    
  </>
);
    
}

export default Usereducer