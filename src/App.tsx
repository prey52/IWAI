import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList.tsx';
import { Provider } from 'react-redux';
import store from './components/ReduxStore.ts';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Zadania do zrobienia <br />by Arkadiusz Żurek</h1>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
