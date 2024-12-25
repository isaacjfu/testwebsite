import '../App.css';
import {useState, useEffect} from 'react';
import imperator from '../resources/imperator.png'
import commendatore from '../resources/commendatore.png'
import silverArrow from '../resources/silverArrow.png'

const ModelModal = ({setClose}) => {
  const handleClick = () => {
    setClose(false)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      handleClick();
    }
  };

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
                />
                <span className = 'modal-card-info'> Commendatore </span>
            </div>
            <div className = 'modal-card'>
                <img
                src = {imperator}
                className = 'modal-card-image'
                />
                <span className = 'modal-card-info'> Imperator </span>
            </div>
            <div className = 'modal-card'>
                <img
                src = {silverArrow}
                className = 'modal-card-image'
                />   
                <span className = 'modal-card-info'> Silver Arrow </span>          
            </div>
        </div>
    </div>
  );

}

export default ModelModal