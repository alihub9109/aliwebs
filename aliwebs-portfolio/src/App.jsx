import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Hero from './sections/Hero';
import About from './sections/About';
import AdvanceDemo from './components/Dock';

function App() {
  return (
    <>
    <AdvanceDemo />
    <Hero />
    <About />
    </>
  );
}

export default App;
