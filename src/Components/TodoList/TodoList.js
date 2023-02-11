import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap';
import s from './TodoList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash, faEdit, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

export default function TodoList({ todo, setTodo }) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState(todo)

    useEffect(() => {
        setFiltered(todo)
    }, [todo])

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id == id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id) {
        const newTodo = [...todo].map(item => {
            if (item.id == id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    function todoFilter(status) {
        if (status == 'all') {
            setFiltered(todo)
        } else {
            let newTodo = [...todo].filter(item => item.status === status)
            setFiltered(newTodo)
        }
    }

    return (
        <div>
            <Row>
                <Col className={s.filter}>
                    <ButtonGroup aria-label="Basic example" className={s.btns}>
                        <Button variant="secondary" onClick={() => todoFilter('all')}>all</Button>
                        <Button variant="secondary" onClick={() => todoFilter(true)}>done</Button>
                        <Button variant="secondary" onClick={() => todoFilter(false)}>not done</Button>
                    </ButtonGroup>
                </Col>
            </Row>
            {
                filtered.map(item => (
                    <div key={item.id} className={s.listItems}>
                        {
                            edit == item.id ?
                                <div>
                                    <input onChange={(e) => setValue(e.target.value)} value={value} />
                                </div> :
                                <div className={!item.status ? s.close : ''}>{item.title}</div>
                        }
                        {
                            edit == item.id ?
                                <div>
                                    <Button onClick={() => saveTodo(item.id)} size='sm'><FontAwesomeIcon icon={faSave} /></Button>
                                </div> :
                                <div>
                                    <Button onClick={() => deleteTodo(item.id)} size='sm'><FontAwesomeIcon icon={faTrash} /></Button>
                                    <Button className={s.btn} onClick={() => editTodo(item.id, item.title)} size='sm'><FontAwesomeIcon icon={faEdit} /></Button>
                                    <Button className={s.btn} onClick={() => statusTodo(item.id)} size='sm'>
                                        {
                                            item.status ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faLockOpen} />
                                        }
                                    </Button>
                                </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}
