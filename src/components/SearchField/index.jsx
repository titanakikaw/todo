import React from 'react'
import {InputGroup, Form } from 'react-bootstrap';

export default function Index({handleOnChange}) {
  return (
    <React.Fragment>
        <InputGroup className="mb-3">
            <Form.Control
            placeholder="Enter task"
            aria-label="Username"
            aria-describedby="basic-addon1"
            size="sm"
            onChange={(e) => handleOnChange(e.target.value)}
            />
        </InputGroup>
    </React.Fragment>
  )
}
