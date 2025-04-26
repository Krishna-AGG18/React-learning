import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'

function AddTodo({ editTodo} ) {
    const [input, setInput] = useState('');
    const [editId, setEditId] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if (editTodo) {
          setInput(editTodo.text);  // Fill input with todo text
          setEditId(editTodo.id);   // Save todo id to update later
        }
      }, [editTodo]);

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (editId) {
            dispatch(updateTodo({ id: editId, newTodo: input }))
            setEditId(null)
        } else {
            dispatch(
                addTodo(input)
            )
        }
        setInput('')
    }


    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12 flex justify-center">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-2xl"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className={`text-white ${ editId ? 'bg-yellow-500 hover:bg-yellow-600' :  'bg-indigo-500 hover:bg-indigo-600'} border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg`
            }>
                {editId ? "Update todo" : "Add Todo"}
            </button>
        </form>
    )
}

export default AddTodo
