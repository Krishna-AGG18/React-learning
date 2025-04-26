import {createSlice, nanoid} from "@reduxjs/toolkit"
import { useEffect } from "react";
const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || []
  };
 
    

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) =>{
            const todo = {
                id : nanoid(),
                text : action.payload   
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo : (state, action) => {
            const {id, newTodo} = action.payload
            state.todos = state.todos.map((todo) => 
             todo.id === id ? {...todo,text: newTodo} : todo
            )
        }
    }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions
export default todoSlice.reducer