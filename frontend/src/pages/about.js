import '../App.css';
import Header from '../components/header.js'
import {useState,useEffect} from 'react';
import stockImage from '../resources/stock_person.jpg'
import visionImage from '../resources/manycars.jpg'
import Footer from '../components/footer.js'

const GridCard = ( {name,title,image} ) => {

  return (
    <div className = 'grid-card'>
      <img
        src = {image}
      />
      <div className = 'grid-card-info'>
        <span className = 'grid-card-info-name'>{name}</span>
        <span className = 'grid-card-info-title'> {title} </span>
      </div>
  </div>
  )

}
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
            <GridCard name = 'George Washington' title = 'Chief Executive Officer' image = {stockImage} />
            <GridCard name = 'John Adams' title = 'Chief Technology Officer' image = {stockImage} />
            <GridCard name = 'Thomas Jefferson' title = 'Chief Marketing Officer' image = {stockImage} />
            <GridCard name = 'James Madison' title = 'Chief Human Resources Officer' image = {stockImage} />
            <GridCard name = 'James Monroe' title = 'Chief Security Officer' image = {stockImage} />
            <GridCard name = 'John Quincy Adams' title = 'Chief Financial Officer' image = {stockImage} />
          </div>
        </div>
        <Footer/>
    </div>

  )

}

export default About
