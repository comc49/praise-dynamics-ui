import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreateSong from './pages/createSong/createSong';
import Login from './pages/login/login';

function App() {
  return (
    <Routes>
      <Route path="/create" element={<CreateSong />} />
      <Route path="/login" element={<Login />} />
    </Routes>

  );
}

export default App;
