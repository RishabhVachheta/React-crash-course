import React from 'react';
import BlogPage from './Components/BlogPage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <h2>My First Blog App</h2>
      </header>
      <main>
        <BlogPage />
      </main>
    </div>
  );
};

export default App;
