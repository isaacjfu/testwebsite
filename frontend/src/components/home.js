import '../App.css';
import Header from './header.js'
import Footer from './footer.js'
import {useState,useEffect} from 'react';
import first_card from '../resources/bluedoorsclosed.jpg'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AccordionMenu from './accordionMenu.js'
// import first_card from '../resources/1993isdera.jpg'
const Home = ( {currentView} ) => {
    let navigate = useNavigate()
    const [isScrolled, setIsScrolled] = useState(false);
    const [containerName, setContainerName] = useState('.homepage-container')

    const handleCClick = () => {
        navigate('/commendatore')
    }
    const handleIClick = () => {
        navigate('/imperator')
    }
    const handleScroll = () => {
      const container = document.querySelector('.homepage-container');
      if (container.scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    useEffect(() => {
      const container = document.querySelector('.homepage-container');
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <div className = 'homepage-container'>
            {(currentView === 'homepage' )  && (
              <div >
                  <Header isScrolled = {isScrolled}/>
                  <div className = 'homepage-card'>
                      <div className = 'overlay-card'>
                          $199/mo Leasing
                          <div className = 'overlay-button-container'>
                              <button className = 'overlay-button' onClick = {handleCClick}> Order Commendatore </button>
                              <button className = 'overlay-button' onClick = {handleIClick}> Order Imperator </button>
                          </div>
                      </div>
                      <img
                          src = {first_card}
                          alt = "Stock Image"
                          className = 'homepage-img'
                      />
                  </div>
                  <div className = 'homepage-text-card'>
                      <h1> Isdera Motors </h1>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                      anim id est laborum.</p>
                  </div>
                  <div className = 'homepage-text-card'>
                    <h2> News  </h2>
                    <AccordionMenu/>
                  </div>
                  <Footer/>
              </div>
            )}
        </div>



  )

}

export default Home
