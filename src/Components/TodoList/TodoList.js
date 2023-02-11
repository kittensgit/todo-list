import React, { useState } from 'react'

export default function TodoList({ todo, setTodo }) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

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

    return (
        <div>
            {
                todo.map(item => (
                    <div key={item.id}>
                        {
                            edit == item.id ?
                                <div>
                                    <input onChange={(e) => setValue(e.target.value)} value={value} />
                                </div> :
                                <div>{item.title}</div>
                        }
                        {
                            edit == item.id ?
                                <div>
                                    <button onClick={() => saveTodo(item.id)}>save</button>
                                </div> :
                                <div>
                                    <button onClick={() => deleteTodo(item.id)}>delete</button>
                                    <button onClick={() => editTodo(item.id, item.title)}>edit</button>
                                    <button onClick={() => statusTodo(item.id)}>close</button>
                                </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}
