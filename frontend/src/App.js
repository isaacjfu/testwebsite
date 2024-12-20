import './App.css';
import {useState,useEffect} from 'react';
import Intro from './components/intro.js'
import Home from './components/home.js'
function App() {
  const [currentView, setCurrentView] = useState('homepage');

  // useEffect(() => {
  //   let timer;

  //   // Transition to the GIF after 3 seconds
  //   if (currentView === 'image') {
  //     timer = setTimeout(() => setCurrentView('gif'), 500);
  //   }

  //   // Transition to the homepage after 5 seconds of showing the GIF
  //   if (currentView === 'gif') {
  //     timer = setTimeout(() => setCurrentView('homepage'), 1000);
  //   }

  //   return () => clearTimeout(timer); // Clean up the timer
  // }, [currentView]);

  return (
    <div className = 'home'>
      <Intro currentView = {currentView} />
      <Home currentView = {currentView} />
    </div>
  );
}

export default App;
