import '../App.css';
import Header from './header.js'
import Footer from './footer.js'
import {useState,useEffect, useRef} from 'react';
import hero_image from '../resources/test10.5.jpg'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AccordionMenu from './accordionMenu.js'
import card_1 from '../resources/card1.jpg'
import card_2 from '../resources/card2.jpg'
import card_3 from '../resources/card3.jpg'


const ImageCarousel = () => {
    let navigate = useNavigate()
    const cards = [
        {image: card_1, name: 'Commendatore', navigate: '/commendatore',
             text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`},
        {image: card_2, name: 'Imperator', navigate: '/imperator',
            text:`Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`},
        {image: card_3, name: 'Silver Arrow', navigate: '/silverArrow',
            text:`Duis aute irure dolor in reprehenderit in voluptate velit esse
             cillum dolore eu fugiat nulla pariatur.`}
    ]
    const [index, setIndex] = useState(0);
    const [fade,setFade] = useState(false);
    const changeImage = (direction) => {
        setFade(true); 
        setTimeout(() => {
          setIndex((prevIndex) => 
            direction === "next" ? (prevIndex + 1) % cards.length : 
            (prevIndex - 1 + cards.length) % cards.length
          );
          setFade(false); 
        }, 250);
      };
    const handleOverlayClick = (link) => {
        navigate(link)
    }
    return (
        <div class = 'carousel'>
            <img
                src = {cards[index]['image']}
                alt = "Stock Image"
                class = {`carousel-img ${fade ? "fade-out" : ""}`}
            />
            <div class = 'carousel-overlay-container'>
                <button onClick = {() => changeImage('prev')} class = 'carousel-button'> ←  </button>
                <button onClick = {() => changeImage('next')} class = 'carousel-button'> → </button>
            </div>
            <div class = 'carousel-overlay'>
                <span class= 'carousel-overlay-header'> {cards[index]['name']} </span>
                <span class = 'carousel-overlay-text'> {cards[index]['text']} </span>
                <button class = 'block-button carousel-overlay-button' onClick = {() => handleOverlayClick(cards[index]['navigate'])}> Learn More </button>
            </div>
        </div>

    )
}
const Home = ( {currentView} ) => {
    let navigate = useNavigate()
    const scrollContainerRef = useRef(null)
    const handleCClick = () => {
        navigate('/commendatore')
    }
    const handleIClick = () => {
        navigate('/imperator')
    }
    const handleAboutClick = ()  => {
        navigate('/about')
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
                    <h1> Isdera Motors </h1>
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
                        > 
                        About Isdera </button>
                </div>
            </div>
            <div class = 'fixed-container offset'>
                <ImageCarousel/>
            </div>
            <div class = 'centered-text-card'>
                <h1> News  </h1>
                <AccordionMenu/>
            </div>
            <Footer/>
        </div>
  )

}

export default Home
