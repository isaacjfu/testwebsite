import '../App.css';
import {useState,useEffect} from 'react';
import Intro from '../components/intro.js'
import Home from '../components/home.js'
const Index = ( {} ) => {
  const [currentView, setCurrentView] = useState('image');

  useEffect(() => {
    let timer;

    if (currentView === 'image') {
      timer = setTimeout(() => setCurrentView('gif'), 500);
    }

    if (currentView === 'gif') {
      timer = setTimeout(() => setCurrentView('homepage'), 1000);
    }

    return () => clearTimeout(timer); 
  }, [currentView]);

  return (
    <div className = 'home'>
      <Intro currentView = {currentView} />
      <Home currentView = {currentView} />
    </div>
  );
}

export default Index;
