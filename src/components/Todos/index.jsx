import React from 'react'
import { ListGroup,Form } from 'react-bootstrap' 

export default function index({todos, handleSelect,handleDelete}) {
    const handleClick = (e, id) => {
        if(e.target.classList.contains("active")){
            e.target.classList.remove("active")
            handleDelete(id)
        }else{
            e.target.classList.add("active")
            handleSelect(id)
        }
    }

    return (
        <React.Fragment>
        <ListGroup as="ul">
            {
                todos.map((todo, index) => {
                    console.log(todo)
                    return(
                        <ListGroup.Item as="li" key={index} style={{display:'flex', justifyContent:'space-between', alignItems: 'center', cursor:'pointer'}} onClick={(e) => handleClick(e, todo.id)}> 
                            <p style={{margin:'0px'}}>{todo.task}</p> <p style={{margin:'0px', fontSize: '8px'}}>{todo.date}</p>
                        </ListGroup.Item>
                    )
                })
            }
        </ListGroup>
        </React.Fragment> 
    )



}


