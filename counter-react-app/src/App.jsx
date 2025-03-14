import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(5);
  // let counter = 5;

  const addValue = ()=>{
    // counter++;
    if(count < 20){
    setCount(count + 1)
    console.log("Btn clicked,value added", count)
    }
    else {
      console.log("Value going bigger than 20.");
    }
  }

  const remValue = ()=>{
    if(count > 0){
    setCount(count - 1)
    console.log("Btn clicked, value removed")
    }else{
      console.log("Value getting lower than zero.");
      
    }
  }
  return (
    <>
      <h1>Count Karle Bhai</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={addValue}>Add Value : +1</button> <br />
      <button onClick={remValue}>Remove Value : -1</button>
    </>
  )
}

export default App
