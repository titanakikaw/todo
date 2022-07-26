import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const index = ({handleDelete, handleAddTask}) => {
  return (
    <ButtonGroup size="sm" className="mb-2" style={{width: '100%'}}>
        <Button variant='success' onClick={handleAddTask}>Add Task</Button>
        <Button variant='danger' onClick={handleDelete}>Delete Task</Button>
    </ButtonGroup>
  )
}

export default index
