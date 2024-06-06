import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddTodoAPI from './AddTodoAPI.tsx';
import TodoItemAPI from './TodoItemAPI.tsx';

interface Todo {
  id: number;
  title: string;
  completed?: boolean;
}

interface State {
  daily: Todo[];
  tasks: Todo[];
}

const TodoAPI: React.FC = () => {
  const [todos, setTodos] = useState<State>({ daily: [], tasks: [] });

  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://todojsonserver.azurewebsites.net/api/');
      console.log(response.data);
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Daily</h2>
      {todos.daily.map(todo => (
        <TodoItemAPI key={todo.id} type='daily' todo={todo} onUpdate={fetchTodos} />
      ))}
      <AddTodoAPI type="daily" onAddTodo={fetchTodos} />
      
      <h2>Tasks</h2>
      {todos.tasks.map(todo => (
        <TodoItemAPI key={todo.id} type='tasks' todo={todo} onUpdate={fetchTodos} />
      ))}
      <AddTodoAPI type="tasks" onAddTodo={fetchTodos} />
    </div>
  );
};

export default TodoAPI;
