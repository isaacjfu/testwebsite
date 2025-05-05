import '../App.css';
import Header from './header.js'
import Footer from './footer.js'
import {useState,useEffect, useRef} from 'react';
import hero_image from '../resources/hero4.jpg'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AccordionMenu from './accordionMenu.js'
import Carousel from './carousel.js';
import testDriveImage from '../resources/test_drive1.jpg'
// import testDriveImage from '../resources/test_drive.jpg'

const Home = ( {currentView} ) => {
    let navigate = useNavigate()
    const scrollContainerRef = useRef(null)
    const text = {
        home : {
            title : 'Isdera Motors',
            content: 'Isdera stands for <strong>I</strong>ngenieurbüro für <b>S</b>tyling, \
             <b>De</b>sign und <b>Ra</b>cing. We aim to combine engineering ingenuity with style, design,\
             and racing. Founded in 1982 by former Porsche engineer Eberhard Schulz, Isdera set a standard \
             for uncompromising performance and handcrafted precision. Every Isdera vehicle is a statement — \
             built to order, shaped by innovation, and steeped in racing spirit. From our first Spyder series to\
             today’s Commendatore GT, our legacy bridges timeless design with forward-thinking technology.',
            sub_content: 'Welcome to the intersection of heritage and the future.'
        },
        request : {
            title: 'Request a Test Drive',
            content: 'Experience the unparalleled performance firsthand. Contact us to arrange \
            a private test drive tailored to your schedule and preferences.'
        }
    }
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
                    <h2> {text.home.title} </h2>
                    <p dangerouslySetInnerHTML={{__html: text.home.content}} />
                    <p> {text.home.sub_content}</p>
                    <button 
                        class = 'block-button'
                        onClick ={handleAboutClick}
                        style = {{width: '15%'}}
                        > 
                        Learn More </button>
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
                        <h2>{text.request.title}</h2>
                        <p> {text.request.content} </p>
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
