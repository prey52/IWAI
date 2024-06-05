import React, { useState } from 'react';
import axios from 'axios';

interface AddTodoProps {
  type: 'daily' | 'tasks';
  onAddTodo: () => void; // Callback do odświeżenia listy zadań
}

const AddTodoAPI: React.FC<AddTodoProps> = ({ type, onAddTodo }) => { 
  const [title, setTitle] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTodo = { id: Date.now(), title, completed: false };

    try {
      await axios.post(`http://localhost:3001/api/todos/${type}`, newTodo);
      setTitle('');
      onAddTodo(); // Wywołaj callback po dodaniu zadania
    } catch (error) {
      console.error('Failed to add todo:', error);
    }
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

export default AddTodoAPI;