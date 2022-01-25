import React, {useState} from 'react';

interface ToDoFormProps {
    onAdd(title: string): void,
}

const ToDoForm: React.FC<ToDoFormProps> = props => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const submitHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            props.onAdd(title);
            setTitle('');
        }
    };

    return (
        <div className='input-todo'>
            <label htmlFor='todoTitle' className='active'>
                Введите название записки:
            </label>
            <input
                value={title}
                onChange={changeHandler}
                onKeyPress={submitHandler}
                type='text'
                placeholder='Название заметки'
                id='todoTitle'/>
        </div>
    );
};

export default ToDoForm;