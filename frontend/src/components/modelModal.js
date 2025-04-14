import '../App.css';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// Models
import imperator from '../resources/card3.jpg'
import commendatore from '../resources/card2.jpg'
import spyder from '../resources/card1.jpg'
// About
import about1 from '../resources/about1.jpg'
import about2 from '../resources/about2.jpg'
import about3 from '../resources/about3.jpg'
const ModelModal = ({setClose, clickedModal}) => {
  const navigate = useNavigate()
  const [showRight, setShowRight] = useState(false)
  const [imageShown, setImageShown] = useState(null)
  const modelItems = [{
    name: 'Commendatore',
    img: commendatore
  }, {
    name: 'Imperator',
    img: imperator
  }, {
    name: 'Spyder',
    img: spyder
  }]
  const aboutItems = [{
    name: 'Our Company',
    img: about1
  }, {
    name: 'Contact Us',
    img: about3
  }
  ]
  const handleClick = () => {
    const modal = document.querySelector('.modal')
    if(modal) {
      modal.classList.add('fade-out')
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      handleClick();
    }
  };

  const handleAnimationEnd = (e) => {
    if (e.animationName === 'modalFadeOut') {
      setClose(false)
    }
  }
  const mouseHover = (image) => {
    setImageShown(image)
    setShowRight(true)
  }
  const mouseUnhover = () => {
    setImageShown(null)
    setShowRight(false)
  }
  const handleModelClick = (model) => {
    switch (model) {
      case 'Commendatore':
        navigate('/commendatore')
        break;
      case 'Imperator':
        navigate('/imperator')
        break;
      case 'Spyder':
        navigate('/spyder')
        break;
      case 'Our Company':
        navigate('/about')
        break;
      case 'Contact Us':
        navigate('/contact')
        break;
      default:
        return
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div class = "modal fade-in" onAnimationEnd={handleAnimationEnd}>
        <span onClick ={handleClick} class = 'modal-close'> X </span>
          <div class = {`modal-model-container`}>
            {(() => {
              switch (clickedModal) {
                case 'model':
                  return <div class = 'modal-model-text'>
                    {modelItems.map((item,index) => (
                    <span key = {index} class = 'span-button' onClick = { () => handleModelClick(item['name'])}
                    onMouseEnter={() => mouseHover(item['img'])} onMouseLeave = {() => mouseUnhover()}> {item['name']}</span>
                  ))}
                  </div>
                case 'about':
                  return <div class = 'modal-model-text'>
                    {aboutItems.map((item,index) => (
                    <span key = {index} class = 'span-button' onClick = { () => handleModelClick(item['name'])}
                    onMouseEnter={() => mouseHover(item['img'])} onMouseLeave = {() => mouseUnhover()}> {item['name']}</span>
                  ))}
                  </div>
                default:
                  return null
                }
              })()}
            {showRight ? 
              <div class = 'modal-model-image-container'>
                <img
                  src = {imageShown}
                  class = 'modal-model-image'
                /> 
              </div>
            : <></>}
          </div>


    </div>
  );

}

export default ModelModal