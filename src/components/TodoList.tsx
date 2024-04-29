import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem.tsx';
import AddTodo from './AddTodo.tsx';

const TodoList: React.FC = () => {
  const daily = useSelector((state: any) => state.daily);
  const tasks = useSelector((state: any) => state.tasks);
  return (
    <div>
      <div className='container'>
        <h2>Dzienne:</h2>
        {daily.map((todo: any) => (
        <TodoItem type='daily' key={todo.id} todo={todo} />
      ))}
      <AddTodo type="daily"/>
      </div>
      
      <div className='container'>    
        <h2>Jednorazowe:</h2>
        {tasks.map((todo: any) => (
        <TodoItem type='tasks' key={todo.id} todo={todo} />
      ))}
      <AddTodo type='tasks'/>
      </div>
    </div>
  );
};

export default TodoList;