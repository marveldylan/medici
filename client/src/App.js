import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Nav from './components/Nav';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Nav />
      </header>
      <div className="landing-page">
        <Routes >
          <Route path="/" element={ <Landing /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
