import Landing from './Components/Landing'
import './App.css'
import Allen from './Components/Allen'
import {BrowserRouter, Routes, Route , Link, Outlet} from 'react-router-dom'
import Login from './Components/Login'
import UseRef from './Components/UseRef'
import Rollup from './Components/RollUp'
import Count from './Components/Count'
import { useState } from 'react'

function useCounter(){
  const [count , setCount] = useState(0);
  return {
    count : count,
    setCount : setCount
  }
}

function Counter(){
  const {count , setCount} = useCounter();
  function handleCount(){
    return setCount(count+1)
  }
  return <div>
    {count}
    <button onClick={handleCount}>Increase Count</button>
  </div>
}

function App() {

  return (
    <>
     <Counter/>
    </>
  )
}


export default App
