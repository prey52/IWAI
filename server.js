const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3001;
const TODOS_FILE = './todos.json';

app.use(cors());
app.use(express.json());

const readTodos = () => {
  return JSON.parse(fs.readFileSync(TODOS_FILE, 'utf8'));
};

const writeTodos = (todos) => {
  fs.writeFileSync(TODOS_FILE, JSON.stringify(todos, null, 2));
};

app.get('/api/todos', (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

app.post('/api/todos/:type', (req, res) => {
  const todos = readTodos();
  const { type } = req.params;
  const newTodo = req.body;
  todos[type].push(newTodo);
  writeTodos(todos);
  res.status(201).json(newTodo);
});

app.patch('/api/todos/:type/:id', (req, res) => {
  const todos = readTodos();
  const { type, id } = req.params;
  const updatedTodo = req.body;
  const todoIndex = todos[type].findIndex((todo) => todo.id === parseInt(id));
  if (todoIndex !== -1) {
    todos[type][todoIndex] = { ...todos[type][todoIndex], ...updatedTodo };
    writeTodos(todos);
    res.json(todos[type][todoIndex]);
  } else {
    res.status(404).send('Todo not found');
  }
});

app.delete('/api/todos/:type/:id', (req, res) => {
  const todos = readTodos();
  const { type, id } = req.params;
  const todoIndex = todos[type].findIndex((todo) => todo.id === parseInt(id));
  if (todoIndex !== -1) {
    const removedTodo = todos[type].splice(todoIndex, 1);
    writeTodos(todos);
    res.json(removedTodo[0]);
  } else {
    res.status(404).send('Todo not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
