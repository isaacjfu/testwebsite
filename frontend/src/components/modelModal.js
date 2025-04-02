import '../App.css';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import imperator from '../resources/imperator.png'
import commendatore from '../resources/commendatore.png'
import silverArrow from '../resources/silverArrow.png'
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
    name: 'Silver Arrow',
    img: silverArrow
  }]
  const aboutItems = [{
    name: 'Our Company'
  }, {
    name: 'Contact Us'
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
      case 'Silver Arrow':
        navigate('/silverArrow')
        break;
      default:
        return
    }
  }
  const handleAboutClick = (about) => {
    switch (about) {
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
        {(() => {
          switch (clickedModal) {
            case 'model':
              return <div class = 'modal-side-by-side-container'>
                      <div class = 'modal-text-dropdown'>
                        {modelItems.map((item,index) => (
                          <span key = {index} class = 'span-button small-font' onClick = { () => handleModelClick(item['name'])}
                          onMouseEnter={() => mouseHover(item['img'])} onMouseLeave = {() => mouseUnhover()}> {item['name']}</span>
                        ))}
                      </div>
                        <div class = 'modal-car-dropdown'>
                        {showRight ? 
                        <img
                          src = {imageShown}
                          class = 'modal-model-image'
                        /> 
                        : <></>}
                        </div>
                      </div>;
            case 'about':
              return <div class = 'modal-side-by-side-container'>
                    <div class = 'modal-text-dropdown'>
                      {aboutItems.map((item) => (
                        <span class = 'span-button small-font' onClick = { () => handleAboutClick(item['name'])}> {item['name']}</span>
                      ))}
                    </div>
                      <div class = 'modal-car-dropdown'>
                      </div>
                    </div>;
            default:
              return null;
          }
        })()}
    </div>
  );

}

export default ModelModal