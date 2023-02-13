import React, { useState } from 'react'
import { Row, Col, Button, FormControl } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import s from './AddTodo.module.css'
export default function AddTodo({ todo, setTodo }) {

    const [value, setValue] = useState('')

    function saveTodo() {
        if (value) {
            setTodo(
                [...todo, {
                    id: uuidv4,
                    title: value,
                    status: true
                }]
            )
            setValue('')
        }
    }

    return (
        <Row>
            <Col className={s.addTodoForm}>
                <FormControl placeholder='enter task' value={value} onChange={(e) => setValue(e.target.value)} />
                <Button className={s.btn} onClick={saveTodo}>save</Button>
            </Col>
        </Row>
    )
}
