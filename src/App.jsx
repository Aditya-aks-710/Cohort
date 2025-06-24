import { useState, useEffect } from 'react'
import "./App.css"
import logo from "./assets/react.svg"
import globe from "./assets/worldwide.png"


function App() {
  const [currentTab, setcurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
      .then(async res => {
        const json = await res.json();
        setTabData(json);
        setLoading(false);
      })
  }, [currentTab]);

  function change(menu) {
    setcurrentTab(menu);
  }

  return (
    <>
      <div className='navbar'>
        <button onClick={() => change(1)} style={{color: currentTab == 1 ? "red" : "black"}}>
          Todo #1
        </button>
        <button onClick={() => change(2)} style={{color: currentTab == 2 ? "red" : "black"}}>
          Todo #2
        </button>
        <button onClick={() => change(3)} style={{color: currentTab == 3 ? "red" : "black"}}>
          Todo #3
        </button>
        <button onClick={() => change(4)} style={{color: currentTab == 4 ? "red" : "black"}}>
          Todo #4
        </button>
      </div>
      <div className='todo'>
        {loading ? "Loading" : (
          <>
            <h3>{tabData.title}</h3>
            <p>Status : {tabData.completed ? "True" : "False"}</p>
          </>
        )}
      </div>
    </>
  )
}


export default App
