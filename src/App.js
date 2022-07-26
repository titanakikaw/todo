import React, { useState } from 'react'
import TodoContainer from './components/TodoContainer/todoContainer';


export default function App() {

  const [todo, setTodo]  = useState([]);


  const addTask = (item) => {
    let newTask = {
      id : todo.length +1,
      task : item,
      date : new Date().toLocaleDateString()
    }

    setTodo([...todo, newTask])
  }

  const deleteTask = (tasks) => {
    tasks.forEach(id => {
      setTodo((todo) => todo.filter((todo) => todo.id !== id))
    });
  }

  return (
    <div style={{marginTop : '3rem'}}>
        <TodoContainer todos={todo} deleteTask={deleteTask} addTask={addTask}/>
    </div>
  )
}