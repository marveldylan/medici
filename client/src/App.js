import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Profile from './components/Profile';
import ConnectWallet from './components/ConnectWallet';
import Creator from './components/Creator';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Nav />
      </header>
        <Routes >
          <Route path="/" element={ <Landing /> } />
          <Route path="/about" element={ <About />} />
          <Route path="/profile" element={ <Profile />} />
          <Route path="/connect-wallet" element={ <ConnectWallet /> } />
          <Route path="/create" element={ <Creator /> } />
        </Routes>
    </div>
  );
}

export default App;
