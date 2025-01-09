import '../App.css';
import logo from '../resources/isderalogo_text2.png'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react';
import ModelModal from './modelModal.js'
const Header = ( {isScrolled, white, setWhite} ) => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

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
            <span className = {`span-button ${white ? 'white_text' : ''}`} onClick= {modelOnClick}> Models </span>
            <span className = {`span-button ${white ? 'white_text' : ''}`} onClick= {aboutOnClick}> About Isdera </span>

            <img
                className = {`header-logo ${white ? 'white_img' : ''}`}
                src={logo}
                alt="Initial Image"
                onClick ={logoOnClick}
            />
            <span className = {`span-button ${white ? 'white_text' : ''}`} onClick= {testOnClick}> Request Test Drive </span>
            <span className = {`span-button ${white ? 'white_text' : ''}`} onClick= {signIn}> Sign In </span>

          </div>
      </div>
      {showModal ?
            (<ModelModal setClose = {setShowModal} white = {white} setWhite = {setWhite}/>)
            :
            (<></>)
      }
    </div>

  )

}

export default Header
