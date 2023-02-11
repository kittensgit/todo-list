import React, { useState } from 'react'
import uuid from 'uuid'

export default function AddTodo({ todo, setTodo }) {

    const [value, setValue] = useState('')

    function saveTodo() {
        setTodo(
            [...todo, {
                id: uuid.v4,
                title: value,
                status: true
            }]
        )
    }

    return (
        <div>
            <input placeholder='enter task' value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={saveTodo}>save</button>
        </div>
    )
}
