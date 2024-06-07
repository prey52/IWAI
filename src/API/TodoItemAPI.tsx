import React from 'react';
import axios from 'axios';

interface TodoItemProps {
  todo: { id: number; title: string; completed?: boolean };
  type: 'daily' | 'tasks';
  onUpdate: () => void; // Callback do odświeżenia listy zadań
}

const TodoItemAPI: React.FC<TodoItemProps> = ({ todo, type, onUpdate }) => {
  const handleToggle = async () => {
    try {
      console.log(`Toggling todo: ${JSON.stringify(todo)}`);
      const response = await axios.patch(`http://localhost:3001/api/todos/${type}/${todo.id}`, {
        completed: !todo.completed,
      });
      console.log(`Toggle response: ${JSON.stringify(response.data)}`);
      onUpdate();
    } catch (error) {
      console.error('Failed to toggle todo:', error);
    }
  };

  const handleRemove = async () => {
    try {
      console.log(`Removing todo: ${JSON.stringify(todo)}`);
      const response = await axios.delete(`http://localhost:3001/api/todos/${type}/${todo.id}`);
      console.log(`Remove response: ${JSON.stringify(response.data)}`);
      onUpdate();
    } catch (error) {
      console.error('Failed to remove todo:', error);
    }
  };

  return (
    <div className={`position ${todo.completed ? 'done' : 'undone'}`} key={todo.id}>
      <p>{todo.title}</p>
      {type === 'daily' && (
        <button className='button' onClick={handleToggle}>
          {todo.completed ? 'Jednak nie' : 'Zrobione'}
        </button>
      )}
      <button className='button' onClick={handleRemove}>Usuń</button>
    </div>
  );
};

export default TodoItemAPI;
