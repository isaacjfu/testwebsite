import {useState,useEffect} from 'react'

const Carousel = ({cards}) => {
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

export default Carousel