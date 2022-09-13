import React, {useState} from 'react'
import './UseState.css'
function UseState() {
const [count,setCount] = useState(0)

  return (
    <div>
        <div className="usestate_container">
            <h1>1. USESTATE HOOK</h1>
            <div className="usestate_counter">
                <i class='bx bxs-minus-circle' onClick={() =>(count === 0 ? setCount(0) : setCount(count - 1))}></i>
                <h2>{count}</h2>
                <i class='bx bxs-plus-circle' onClick={() => setCount(count + 1)}></i>
            </div>
        </div>
    </div>
  )
}

export default UseState