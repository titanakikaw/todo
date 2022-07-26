import React, { useEffect, useState } from 'react'
import InputSearch from '../SearchField'
import Todos from '../Todos'
import Actions from '../Actions'

export default function TodoContainer({todos, deleteTask, addTask}) {
    const [selected, setSelected] = useState([]);
    const [task, setTask] = useState([]);
    
    const handleSelect = (id) => {
        setSelected([...selected, id])  
    }
    const handleRemoveSelect = (id) => {
        setSelected((selected) => selected.filter((item) => item !== id ))
    }

    const handleDelete = () => {
        deleteTask(selected)
    }

    const handleOnChange = (data) => {
        if(data != ''){
           setTask(data)
        }
    }

    const handleAddTask = () => {
        addTask(task)
    }



    return (
        <div style={{margin:'auto', width: '350px'}}>
            <h2>SIMPLE TODO LIST</h2>
            <InputSearch style={{width: '100%'}} handleOnChange={handleOnChange}/>
            <Actions handleDelete={handleDelete} handleAddTask={handleAddTask}/>
            <Todos todos={todos} handleSelect={handleSelect} handleDelete={handleRemoveSelect}/>
        </div>
    )
}
