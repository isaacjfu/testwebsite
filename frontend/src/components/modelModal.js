import '../App.css';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import imperator from '../resources/imperator.png'
import commendatore from '../resources/commendatore.png'
import silverArrow from '../resources/silverArrow.png'

const ModelModal = ({setClose, white, setWhite}) => {
  const navigate = useNavigate()
  const [hasWhite, setHasWhite] = useState(false)
  const handleClick = () => {
    setClose(false)
    if(hasWhite == true){
      setWhite(!white)
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      handleClick();
    }
  };

  const handleCClick = () => {
    navigate('/commendatore')
  }
  const handleIClick = () => {
    navigate('/imperator')
  }
  const handleSClick = () => {
    navigate('/silverArrow')
  }
  useEffect(() => {
    if (white == true){
      setWhite(false)
      setHasWhite(true)
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div class = "modal open">
        <span onClick ={handleClick} class = 'modal-close'> X </span>
        <div class = 'modal-car-container'>
            <div class = 'modal-card'>
                <img
                src = {commendatore}
                class = 'modal-card-image'
                onClick = {handleCClick}
                />
                <span class = 'modal-card-info' onClick = {handleCClick}> Commendatore </span>
            </div>
            <div class = 'modal-card'>
                <img
                src = {imperator}
                class = 'modal-card-image'
                onClick = {handleIClick}
                />
                <span class = 'modal-card-info' onClick = {handleIClick}> Imperator </span>
            </div>
            <div class = 'modal-card'>
                <img
                src = {silverArrow}
                class = 'modal-card-image'
                onClick = {handleSClick}
                />   
                <span class = 'modal-card-info' onClick = {handleSClick}> Silver Arrow </span>          
            </div>
        </div>
    </div>
  );

}

export default ModelModal