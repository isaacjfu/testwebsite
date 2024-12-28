import '../App.css';
import logo from '../resources/isderalogo_text2.png'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react';
import ModelModal from './modelModal.js'
const Header = ( {} ) => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    console.log('hi')
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const modelOnClick = () => {
    setShowModal(true)
  }

  const aboutOnClick = () => {
    navigate('/about')
  }

  const logoOnClick = () => {
    navigate('/')
  }

  const testOnClick = () => {
    navigate('/testDrive')
  }

  const signIn = () => {
    navigate('/login')
  }

  return (
    <div className = 'header-container'>
      <div className = {`header ${showModal ? 'header-bg-modal-open' : ''} ${isScrolled ? 'header-scrolled' : ''}`}>
          <div className = 'header-middle'>
            <span className = 'span-button' onClick= {modelOnClick}> Models </span>
            <span className = 'span-button' onClick= {aboutOnClick}> About Isdera </span>

            <img
                className = 'header-logo'
                src={logo}
                alt="Initial Image"
                onClick ={logoOnClick}
            />
            <span className = 'span-button' onClick= {testOnClick}> Request Test Drive </span>
            <span className = 'span-button' onClick= {signIn}> Sign In </span>

          </div>
      </div>
      {showModal ?
            (<ModelModal setClose = {setShowModal}/>)
            :
            (<></>)
      }
    </div>

  )

}

export default Header
