import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  const [colorT, setTcolor] = useState("black")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
      <h1 className='text-4xl font-extrabold py-3' style={{color : colorT}}>Background Changer</h1>
      <div className="flex flex-wrap fixed justify-center bottom-8 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center bg-amber-100 gap-3 shadow-lg rounded-xl px-3 py-2'>
          <button className='text-white outline-none px-4 py-1 rounded-lg shadow-lg ' style={{backgroundColor : "red"}} onClick={()=>{setColor("red")}}> Red</button>
          <button className='text-white outline-none px-4 py-1 rounded-lg shadow-lg ' style={{backgroundColor : "green"}} onClick={()=>{setColor("green")}}> Green</button>
          <button className='text-white outline-none px-4 py-1 rounded-lg shadow-lg ' style={{backgroundColor : "blue"}} onClick={()=>{setColor("blue")}}> Blue</button>
          <button className='text-white outline-none px-4 py-1 rounded-lg shadow-lg ' style={{backgroundColor : "magenta"}} onClick={()=>{setColor("magenta")}}> Pink</button>
          <button className='text-white outline-none px-4 py-1 rounded-lg shadow-lg ' style={{backgroundColor : "purple"}} onClick={()=>{setColor("purple")}}> Purple</button>
          <button className='text-black outline-none px-4 py-1 rounded-lg shadow-lg ' style={{backgroundColor : "lavender"}} onClick={()=>{setColor("lavender");setTcolor("black")}}> Lavender</button>
          <button className='text-white outline-none px-4 py-1 rounded-lg shadow-lg ' style={{backgroundColor : "black"}} onClick={()=>{setColor("black") ; setTcolor("white")}}> Black</button>
          <button className='text-black outline-none px-4 py-1 rounded-lg shadow-lg ' style={{backgroundColor : "white"}} onClick={()=>{setColor("white"); setTcolor("black")}}> White</button>
          <button className='text-black  outline-none px-4 py-1 rounded-lg shadow-lg ' style={{backgroundColor : "yellow"}} onClick={()=>{setColor("yellow");setTcolor("black")}}> Yellow</button>
          <button className='text-white outline-none px-4 py-1 rounded-lg shadow-lg ' style={{backgroundColor : "gray"}} onClick={()=>{setColor("gray")}}> Gray</button>
          <button className='text-white outline-none px-4 py-1 rounded-lg shadow-lg ' style={{backgroundColor : "olive"}} onClick={()=>{setColor("olive")}}> Olive</button>
        </div>
      </div>
    </div>
  )
}

export default App
