import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from './ReduxActions.ts';

interface TodoItemProps {
  todo: { id: number; title: string; completed: boolean };
  type: 'daily' | 'tasks';
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, type }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleRemoveDaily = () => {
    dispatch(removeTodo(todo.id, 'daily'));
  };

  const handleRemoveTasks = () => {
    dispatch(removeTodo(todo.id, 'tasks'));
  };

  return (
    <div className={`position ${todo.completed ? 'done' : 'undone'}`} key={todo.id}>
      <p>{todo.title}</p>
      {type === 'daily' && <button className='button' onClick={handleToggle}>{`${todo.completed ? 'Jednak nie' : 'Zrobione'}`}</button>}
      {type === 'daily' && <button className='button' onClick={handleRemoveDaily}>Usuń</button>}
      {type === 'tasks' && <button className='button' onClick={handleRemoveTasks}>Usuń</button>}
    </div>
  );
};

export default TodoItem;
