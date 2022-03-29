import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Profile from './components/Profile';
import ConnectWallet from './components/ConnectWallet';
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
          <Route path="/about" element={ <About />} />
          <Route path="/profile" element={ <Profile />} />
          <Route path="/connect-wallet" element={ <ConnectWallet /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
