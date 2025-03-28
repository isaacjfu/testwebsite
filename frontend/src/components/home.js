import '../App.css';
import Header from './header.js'
import Footer from './footer.js'
import {useState,useEffect, useRef} from 'react';
import hero_image from '../resources/test4.5.jpg'
import second_card from '../resources/second_card.jpg'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AccordionMenu from './accordionMenu.js'
// import first_card from '../resources/1993isdera.jpg'


const ImageCarousel = (cards) => {
    const [index, setIndex] = useState(0);
    const prevImage = () => {
        setIndex((prevIndex) =>(prevIndex - 1 + cards.length) % cards.length);
    }
    const nextImage = () => {
        setIndex((prevIndex) => (prevIndex +1) % cards.length)
    }
    return (
        <div class = 'carousel'>
            <img
                src = {cards[index]['image']}
                alt = "Stock Image"
                class = 'homepage-img'
            />
            <div class = 'carousel-overlay-button'>
                <button onClick = {prevImage} class = 'carousel-button'> ←  </button>
                <button onClick = {nextImage} class = 'carousel-button'> → </button>
            </div>
            <div class = 'carousel-overlay-text'>
                <span> {cards[index]['text']} </span>
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
                </div>
            </div>
            <div class = 'fixed-container offset'>
                <div>
                    <h1> asdasdsad</h1>
                    <p> asdasdasdsadasdadsads aasd asd asdas </p>
                </div>
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
