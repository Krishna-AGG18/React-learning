import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <h1 className='text-4xl font-extrabold p-4 text-center'>Redux toolkit - todo app</h1>
      <Todos />
    </>
  )
}

export default App
