import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContext, TodoProvider } from './contexts';
import Todoform from './components/Todoform';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) =>{
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo )))
  }

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed}: prevTodo ))
  }

  //for loading localstorage at time of load.....
  useEffect(() => {
    const Todos = JSON.parse(localStorage.getItem("Todos"))

    if(Todos && Todos.length > 0){
      setTodos(Todos)
    }
  }, [])

  // for change in localstorage
  useEffect(() =>{
    localStorage.setItem("Todos",JSON.stringify(todos));
  },[todos])
  

  return (
    <TodoProvider value={{todos, addTodo,updateTodo, removeTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-lg shadow-blue-400 rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <Todoform />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
