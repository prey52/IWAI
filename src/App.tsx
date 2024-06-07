import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TodoList from './components/TodoList.tsx';
//import TodoAPI from './components/TodoAPI.tsx';
import About from './components/About.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
      <img className='svglogo' src="TODOS.svg"></img>
        <Routes>
          <Route path="/" element={<>
            <TodoList />
            {/* <TodoAPI /> */}
          </>} />
          <Route path="/about" element={<About />} />
        </Routes>
        <nav>
          <div className="link">
            <Link to="/">Home</Link>
          </div>
          <div className="link">
            <Link to="/about">O Aplikacji</Link>
          </div>
        </nav>
      </div>
      
    </Router>
  );
};

export default App;
