import React, {useEffect, useState} from 'react';
import {ITodo} from "../interfaces";
import {Grid} from "@mui/material";
import ToDoForm from "../components/ToDoForm";
import TodoList from "../components/TodoList";

const Sketches: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodosHandler = (title: string) => {
        const newTodo: ITodo = {
            id: Date.now(),
            title: title,
            completed: false,
        }

        setTodos(prev => [newTodo, ...prev]);
    }
    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            }

            return todo;
        }));
    }
    const removeHandler = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]);
    }, []);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <Grid item xs={10}>
            <div className='main-container'>
                <ToDoForm onAdd={addTodosHandler}/>

                <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
            </div>
        </Grid>
    );
}

export default Sketches;