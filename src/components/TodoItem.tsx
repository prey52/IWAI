import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from './ReduxActions.ts';

interface TodoItemProps {
  todo: { id: number; title: string; completed: boolean };
  type: 'daily' | 'tasks';
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, type }) => {
  const dispatch = useDispatch();
  const [showIcon, setShowIcon] = useState(false);

  const measureResponseTime = (operation: () => void) => {
    const startTime = Date.now();
    operation();
    const endTime = Date.now();
    const responseTime = endTime - startTime;

    if (responseTime > 100) {
      setShowIcon(true);
      setTimeout(() => setShowIcon(false), 10000); // Hide icon after 10 seconds
    }
  };

  const handleToggle = () => {
    measureResponseTime(() => {
      dispatch(toggleTodo(todo.id));
    });
  };

  const handleRemoveDaily = () => {
    measureResponseTime(() => {
      dispatch(removeTodo(todo.id, 'daily'));
    });
  };

  const handleRemoveTasks = () => {
    measureResponseTime(() => {
      dispatch(removeTodo(todo.id, 'tasks'));
    });
  };

  return (
    <div className={`position ${todo.completed ? 'done' : 'undone'}`} key={todo.id}>
      <p>{todo.title}</p>
      {type === 'daily' && (
        <button className='button' onClick={handleToggle}>
          {`${todo.completed ? 'Jednak nie' : 'Zrobione'}`}
          {showIcon && <span className='response-time-icon'>⚠️</span>}
        </button>
      )}
      {type === 'daily' && (
        <button className='button' onClick={handleRemoveDaily}>
          Usuń
          {showIcon && <span className='response-time-icon'>⚠️</span>}
        </button>
      )}
      {type === 'tasks' && (
        <button className='button' onClick={handleRemoveTasks}>
          Usuń
          {showIcon && <span className='response-time-icon'>⚠️</span>}
        </button>
      )}
    </div>
  );
};

export default TodoItem;
