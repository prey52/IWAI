export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (title: string, type: 'daily' | 'tasks') => ({
  type: ADD_TODO,
  payload: {
    type: type,
    todo: {
      id: new Date().getTime(),
      title: title,
      completed: false,
    },
  },
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number, type: 'daily' | 'tasks') => ({
  type: REMOVE_TODO,
  payload: {
    id: id,
    type: type
  },
});