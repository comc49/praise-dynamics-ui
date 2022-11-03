import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import CreateSong from './pages/createSong/CreateSong';
import Homepage from './pages/homepage/Homepage';

function App() {
  
  return (
    <Routes>
      <Route path="/create" element={<CreateSong />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>

  );
}

export default App;
