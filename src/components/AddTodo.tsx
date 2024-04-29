import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './ReduxActions.ts';

interface AddTodoProps {
  type: 'daily' | 'tasks';
}

const AddTodo: React.FC<AddTodoProps> = (props) => { 
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTodo(title, props.type));
    setTitle('');
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input className='add-text' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <button className='add' type="submit">Dodaj</button>
      </form>
    </div>
  );
};



export default AddTodo;