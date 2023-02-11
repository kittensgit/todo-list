import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ todo, setTodo }) {

    const [value, setValue] = useState('')

    function saveTodo() {
        setTodo(
            [...todo, {
                id: uuidv4,
                title: value,
                status: true
            }]
        )
        setValue('')
    }

    return (
        <div>
            <input placeholder='enter task' value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={saveTodo}>save</button>
        </div>
    )
}
