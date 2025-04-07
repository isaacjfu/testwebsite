import '../App.css';
import Header from './header.js'
import Footer from './footer.js'
import {useState,useEffect, useRef} from 'react';
import hero_image from '../resources/hero2.jpg'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AccordionMenu from './accordionMenu.js'
import Carousel from './carousel.js';
import testDriveImage from '../resources/test_drive1.jpg'
// import testDriveImage from '../resources/test_drive.jpg'

const Home = ( {currentView} ) => {
    let navigate = useNavigate()
    const scrollContainerRef = useRef(null)
    const handleAboutClick = ()  => {
        navigate('/about')
    }
    const handleRequestClick = () => {
        navigate('/testDrive')
    }
    return (
        <div class = 'homepage-container' ref = {scrollContainerRef}>
            <Header scrollContainerRef= {scrollContainerRef}/>
            <div class = 'first-container'>
                <div class = 'background-img-container'>
                    <img
                        src = {hero_image}
                        alt = 'Background Image'
                    />
                </div>

                <div class = 'hero-container'>
                    <img
                        src = {hero_image}
                        alt = "Stock Image"
                        class = 'hero-img'
                    />
                </div>
            </div>
            <div class = 'fixed-container' >
                <div class = 'centered-text-card'>
                    <h2> Isdera Motors </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.</p>
                    <button 
                        class = 'block-button'
                        onClick ={handleAboutClick}
                        style = {{width: '15%'}}
                        > 
                        About Isdera </button>
                </div>
            </div>
            <div class = 'fixed-container offset'>
                <Carousel/>
            </div>
            <div class = 'loose-container'>
                <div class = 'side-by-side-container'>
                    <img
                        src = {testDriveImage}
                        class = 'side-by-side-image'
                    />
                    <div class = 'side-by-side-text'>
                        <h2> Request a Test Drive</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. </p>
                        <button
                            class = 'block-button'
                            onClick = {handleRequestClick}
                            style = {{width: '30%'}}
                        >
                            Request
                        </button>
                    </div>
                </div>
            </div>
            <div class = 'loose-container offset'>
                <div class = 'centered-text-card'>
                    <h2> News  </h2>
                    <AccordionMenu/>
                </div>
            </div>

            <Footer/>
        </div>
  )

}

export default Home
