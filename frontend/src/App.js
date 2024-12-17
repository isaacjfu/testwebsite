import './App.css';
import {useState,useEffect} from 'react';
import logo from './resources/isderalogo.png'
import lightning from './resources/lightning2.gif'
//import lightning2 from './resources/cropped.gif'

function App() {
  const [currentView, setCurrentView] = useState('image');

  useEffect(() => {
    let timer;

    // Transition to the GIF after 3 seconds
    if (currentView === 'image') {
      timer = setTimeout(() => setCurrentView('gif'), 2000);
    }

    // Transition to the homepage after 5 seconds of showing the GIF
    if (currentView === 'gif') {
      timer = setTimeout(() => setCurrentView('homepage'), 3000);
    }

    return () => clearTimeout(timer); // Clean up the timer
  }, [currentView]);

  return (
    <div className = 'home'>
      <div className = "intro">
          {(currentView === 'image' || currentView === 'gif' ) && (
            <img
              src={logo}
              alt="Initial Image"
              className = "introImage"
            />
            
          )}
          {(currentView === 'gif' )  && (
            <img
            src={lightning}
            alt="GIF Animation"
            className = "introGIF"
          />
          )}
        </div>
        {currentView === 'homepage' && (
          <div>
            <h1>Welcome to My Website!</h1>
            <p>This is the homepage content.</p>
          </div>
        )}
    </div>
  );
}

export default App;
