import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/index.js';
import About from './pages/about.js';
import Login from './pages/login.js';
import TestDrive from './pages/TestDrive.js'
import SilverArrow from './pages/silverArrow.js'
import Commendatore from './pages/commendatore.js';
import Imperator from './pages/imperator.js';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/silverArrow" element={<SilverArrow/>} />
          <Route path="/commendatore" element={<Commendatore/>} />
          <Route path="/imperator" element={<Imperator/>} />
          <Route path="/testDrive" element={<TestDrive/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;