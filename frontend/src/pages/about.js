import '../App.css';
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import {useState,useEffect} from 'react';

import top_image from '../resources/about_top.jpg'
import georgeWashington from '../resources/washington.webp'
import johnAdams from '../resources/johnadams.webp'
import thomasJefferson from '../resources/thomasjefferson.webp'
import jamesMadison from '../resources/jamesmadison.webp'
import jamesMonroe from '../resources/jamesmonroe.webp'
import johnQAdams from '../resources/johnqadams.webp'
import visionImage from '../resources/manycars.jpg'
import visionImage2 from '../resources/maybe.jpg'
import visionImage3 from '../resources/lightning.gif'


const GridCard = ( {name,title,image} ) => {

  return (
    <div className = 'grid-card'>
      <img
        src = {image}
        className = 'grid-card-img'
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
    const [white,setWhite] = useState(true)
    const handleScroll = () => {
      const container = document.querySelector('.about-container');
      if (container.scrollTop > 0) {
        setWhite(false)
        setIsScrolled(true);
      } else {
        setWhite(true)
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
        <Header isScrolled={isScrolled} white = {white} setWhite = {setWhite}/>
        <div className = 'about-header-card'>
          <span className = "about-overlay">
              About Isdera
          </span>
          <img
            src = {top_image}
            className = 'about-img-card'
          />
        </div>
        <div className = 'about-subcontainer'>
          <div className = 'about-card'>
            <div className = 'homepage-text-card'>
              <h1> Our Vision </h1>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div className ='about-card'>
            <h2> Our Values </h2>
            <div className = 'about-card-three'>
              <div className = 'about-card-three-card'>
                <img
                  src = {visionImage}
                  className = 'about-card-three-card-img'
                />
                <h3>Lorem ipsum</h3>
                <p>
                Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className = 'about-card-three-card'>
                  <img
                    src = {visionImage2}
                    className = 'about-card-three-card-img'
                  />
                    <h3>Lorem ipsum</h3>
                  <p>
                  Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
              </div>            
              <div className = 'about-card-three-card'>
                  <img
                    src = {visionImage3}
                    className = 'about-card-three-card-img'
                  />
                  <h3>Lorem ipsum</h3>
                  <p>
                  Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
              </div>
            </div>
          </div>
          <div className = 'about-card'>
            <h2>Our Staff</h2>
            <div className = 'about-grid-container'>
              <GridCard name = 'George Washington' title = 'Chief Executive Officer' image = {georgeWashington} />
              <GridCard name = 'John Adams' title = 'Chief Technology Officer' image = {johnAdams} />
              <GridCard name = 'Thomas Jefferson' title = 'Chief Marketing Officer' image = {thomasJefferson} />
              <GridCard name = 'James Madison' title = 'Chief Human Resources Officer' image = {jamesMadison} />
              <GridCard name = 'James Monroe' title = 'Chief Security Officer' image = {jamesMonroe} />
              <GridCard name = 'John Quincy Adams' title = 'Chief Financial Officer' image = {johnQAdams} />
            </div>
          </div>
        </div>
       
        <Footer/>
    </div>

  )

}

export default About
