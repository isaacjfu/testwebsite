import {useState,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import card_1 from '../resources/carousel1.jpg'
import card_2 from '../resources/carousel2.jpg'
import card_3 from '../resources/card3.jpg'

const AboutCarousel = ({}) => {
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
    const getPositionClass = (i) => {
        if (i === index) return 'center';
        if (i === (index - 1 + cards.length) % cards.length) return 'left';
        if (i === (index + 1) % cards.length) return 'right';
        return 'hidden';
      };
    return (
        <div class = 'about-carousel'>
            <div class = 'about-carousel-image-container'>
                {cards.map((card,i) => (
                    <img
                    key = {i}
                    src ={card.image}
                    class = {`about-carousel-image ${getPositionClass(i)}`}
                    />
                ))}
                <button onClick = {() => changeImage('prev')} class = 'about-carousel-left'> ←  </button>
                <button onClick = {() => changeImage('next')} class = 'about-carousel-right'> → </button>
            </div>
            <div class = 'about-carousel-text'>
                <span> Testing</span>
            </div>
        </div>

    )
}

export default AboutCarousel