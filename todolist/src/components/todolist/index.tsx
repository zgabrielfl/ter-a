import React, { useState, useEffect } from 'react'
import './styles.css'
import { TodoProps } from '../../@types/todo'

type TodoListProps = {
    getTodos: TodoProps[]
    setTodos: (todos: TodoProps[]) => void
}

const TodoList = () => {
    const [getTodos, setTodos] = useState<TodoProps[]>([
        { id: 1, titulo: 'tarefa 1'},
        { id: 2, titulo: 'tarefa 2'},
        { id: 3, titulo: 'tarefa 3'},
        { id: 4, titulo: 'tarefa 4'},
        { id: 5, titulo: 'tarefa 5'}
    ])
    
    useEffect(() => {}, [getTodos])

    const finalizaTodo = (id: number) => {
        const tmpTodos: TodoProps[] = getTodos.filter(
            (todo: TodoProps) => todo.id !== id)
        setTodos(tmpTodos)
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <ul>
                {
                    getTodos.map((todo: TodoProps) => (
                        <li key={todo.id}>
                            <input type='checkbox' onClick={() => finalizaTodo(todo.id)} /> {todo.titulo}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;