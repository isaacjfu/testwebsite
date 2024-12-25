import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/index.js';
import About from './pages/about.js';
import Login from './pages/login.js';
import TestDrive from './pages/TestDrive.js'
import Model from './pages/model.js'
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/model" element={<Model/>} />
          <Route path="/testDrive" element={<TestDrive/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;