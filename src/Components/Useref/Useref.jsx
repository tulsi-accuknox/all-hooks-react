import React,{ useState, useEffect, useRef } from 'react'
import './Useref.css'

function Useref() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
        inputElement.current.style.backgroundColor = "#FFD8A9";
      };
  
    useEffect(() => {
      count.current = count.current + 1;
    });

  return (
    <div>
        <div className="ref_container">
            <h1>4. USEREF HOOK</h1>
        <div className="ref_input">
        <input
        ref={inputElement}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2 onClick={focusInput}>Focus Input</h2>
        </div>
      <div className="ref_para">
      <p>The number of render count: </p><span>{count.current}</span>
      </div>
        </div>
    </div>
  )
}

export default Useref