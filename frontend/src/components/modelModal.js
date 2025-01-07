import '../App.css';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import imperator from '../resources/imperator.png'
import commendatore from '../resources/commendatore.png'
import silverArrow from '../resources/silverArrow.png'

const ModelModal = ({setClose}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    setClose(false)
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
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className = "modal open">
        <span onClick ={handleClick} className = 'modal-close'> Close X </span>
        <div className = 'modal-car-container'>
            <div className = 'modal-card'>
                <img
                src = {commendatore}
                className = 'modal-card-image'
                onClick = {handleCClick}
                />
                <span className = 'modal-card-info' onClick = {handleCClick}> Commendatore </span>
            </div>
            <div className = 'modal-card'>
                <img
                src = {imperator}
                className = 'modal-card-image'
                onClick = {handleIClick}
                />
                <span className = 'modal-card-info' onClick = {handleIClick}> Imperator </span>
            </div>
            <div className = 'modal-card'>
                <img
                src = {silverArrow}
                className = 'modal-card-image'
                onClick = {handleSClick}
                />   
                <span className = 'modal-card-info' onClick = {handleSClick}> Silver Arrow </span>          
            </div>
        </div>
    </div>
  );

}

export default ModelModal