import { useState, useEffect, createContext, useContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const CounterContext = createContext();

function App() {
  const [cnt, setcnt] = useState(0);

  return (
    <CounterContext.Provider value={{ cnt, setcnt }}>
      <Display/>
      <Increase/>
      <Decrease/>
    </CounterContext.Provider>
  )
}

function Increase(){
  const { cnt, setcnt } = useContext(CounterContext);

  function increase(){
    setcnt(cnt+1);
  }

  return (
    <button onClick={increase}>Increase</button>
  )
}

function Decrease(){
  const { cnt, setcnt } = useContext(CounterContext);

  function decrease(){
    setcnt(cnt-1);
  }

  return (
    <button onClick={decrease}>Decrease</button>
  )
}

function Display(){
  const { cnt } = useContext(CounterContext);
  return (
    <div>{cnt}</div>
  )
}

export default App
