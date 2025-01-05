import '../App.css';
import Header from '../components/header.js'
import {useState,useEffect} from 'react';
import stockImage from '../resources/stock_person.jpg'
import visionImage from '../resources/manycars.jpg'
const About = ( {} ) => {

    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => {
      const container = document.querySelector('.about-container');
      if (container.scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    useEffect(() => {
      const container = document.querySelector('.about-container');
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className = 'about-container'>
        <Header isScrolled={isScrolled} />
        <div className = 'homepage-card'>
          <div className = 'homepage-text-card'>
            <h1> Us at Isdera </h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
        <div className = 'homepage-card'>
          <div className = 'homepage-text-card'>
            <h1> Our Vision </h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <img
              src = {visionImage}
              className = 'homepage-img-card'
            />
          </div>
        </div>
        <div className = 'homepage-card'>
          <div className = 'about-grid-container'>
            <div className = 'grid-card'>
              <img
                src = {stockImage}
              />

              <p>John Smith</p>
              <span> Chief Executive Officer </span>
            </div>
            <div className = 'grid-card'>
              <img
                src = {stockImage}
              />
              <p>Ken Adams</p>
              <span> Chief Technology Officer </span>
            </div>
            <div className = 'grid-card'>
              <img
                src = {stockImage}
              />
              <p>John Smith</p>
              <span> President </span>              
            </div>
            <div className = 'grid-card'>
              <img
                src = {stockImage}
              />
              <p>John Smith</p>
              <span> Chief Financial Officer </span>
            </div>
            <div className = 'grid-card'>
              <img
                src = {stockImage}
              />
              <p>John Smith</p>
              <span> Chief Marketing Adviser </span>
            </div>
            <div className = 'grid-card'>
              <img
                src = {stockImage}
              />
              <p>John Smith</p>
              <span> Chief Operating Officer </span>
            </div>
          </div>
        </div>
    </div>

  )

}

export default About
