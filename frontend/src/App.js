import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Index from './pages/index.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import TestDrive from './pages/TestDrive.js'
import Spyder from './pages/spyder.js'
import Commendatore from './pages/commendatore.js';
import Imperator from './pages/imperator.js';
function App() {
  useEffect (() => {
    document.title = 'Isdera Motors'
  }, [])
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/spyder" element={<Spyder/>} />
          <Route path="/commendatore" element={<Commendatore/>} />
          <Route path="/imperator" element={<Imperator/>} />
          <Route path="/testDrive" element={<TestDrive/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;