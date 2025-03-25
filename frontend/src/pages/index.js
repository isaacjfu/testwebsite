import '../App.css';
import {useState,useEffect} from 'react';
import Intro from '../components/intro.js'
import Home from '../components/home.js'
const Index = ( {} ) => {
  const [currentView, setCurrentView] = useState('homepage');

  // useEffect(() => {
  //   let timer;

  //   if (currentView === 'image') {
  //     timer = setTimeout(() => setCurrentView('homepage'), 1500);
  //   }


  //   return () => clearTimeout(timer); 
  // }, [currentView]);

  return (
    <div class = 'home'>
      {/* <Intro currentView = {currentView} /> */}
      <Home currentView = {currentView} />
    </div>
  );
}

export default Index;
