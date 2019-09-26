import React from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from "./components/Canvas"
import '../src/components/main.css'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Home />
      <Canvas />
    </div>
  );
}

export default App;
