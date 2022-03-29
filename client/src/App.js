import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div className="Home">
        <Routes >
          <Route path="/" element={ <Home /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
