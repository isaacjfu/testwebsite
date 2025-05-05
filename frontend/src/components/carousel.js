import {useState,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import card_1 from '../resources/card1.jpg'
import card_2 from '../resources/card2.jpg'
import card_3 from '../resources/card3.jpg'

const Carousel = ({}) => {
    let navigate = useNavigate()
    const cards = [
        {image: card_1, name: 'Commendatore GT', navigate: '/commendatore',
             text: `Engineered for uncompromising excellence, the Isdera Commendatore
              GT redefines bespoke automotive luxury with striking design and peerless 
              performance.`},
        {image: card_2, name: 'Imperator 108i', navigate: '/imperator',
            text:`Crafted for pure driving exhilaration, the Isdera Imperator 108i embodies
             a bold evolution in handcrafted supercar design.`},
        {image: card_3, name: 'Spyder', navigate: '/spyder',
            text:`Designed for open-air freedom, the Isdera Spyder marks a thrilling new 
            chapter in bespoke roadster performance.`}
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

export default Carousel