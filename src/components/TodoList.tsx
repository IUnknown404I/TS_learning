import React from 'react';
import {ITodo} from "../interfaces";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

type TodoListProps = {
    todos: ITodo[],
    onToggle(id: number): void,
    onRemove?(id: number): void,
}

const TodoList: React.FC<TodoListProps> = props => {
    if(!props.todos.length) return <p className='textCentered mt3'>
        Пока что заметок нет!
    </p>;

    return (
        <ul>
            {props.todos.map((todo, index) => {
                const classes = ['todo'];
                if (todo.completed) {
                    classes.push('completed');
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>

                        <label>
                            <input
                                type='checkbox'
                                checked={todo.completed}
                                onChange={props.onToggle.bind(null, todo.id)}
                            />

                            <div>
                                <span>{index+1}. {todo.title}</span>
                                <DeleteForeverIcon
                                    style={{color: 'red', fontSize: '2rem'}}
                                    onClick={() => props.onRemove!(todo.id)}
                                />
                            </div>
                        </label>

                    </li>
                );
            })}
        </ul>
    );
};

export default TodoList;