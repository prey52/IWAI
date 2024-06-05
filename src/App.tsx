import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TodoAPI from './components/TodoAPI.tsx';
import About from './components/About.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="link">
            <Link to="/">Home</Link>
          </div>
          <div className="link">
            <Link to="/about">O Aplikacji</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<>
            <h1>Zadania do zrobienia <br />by Arkadiusz Żurek</h1>
            <TodoAPI />
          </>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
