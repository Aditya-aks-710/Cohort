import { useState, useEffect } from 'react'
import "./App.css"
import logo from "./assets/react.svg"
import globe from "./assets/worldwide.png"


function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(prev => prev + 1)
  }

  useEffect(function() {
    const timer = setInterval(increaseCount, 1000);
    return function(){
      clearInterval(timer);
    }
  }, []);

  return (
    <div>
      <div className='icon'>
        <img src={globe} alt="" />
      </div>
      <div className='timer'>
        <div className='number'>
          {count}
        </div>
      </div>
    </div>
  )
}


export default App
