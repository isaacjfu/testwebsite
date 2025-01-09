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

  const accountOnClick = () => {
    navigate('/account')
  }

  return (
    <div class = 'header-container'>
      <div class = {`header ${showModal ? 'header-bg-modal-open' : ''} ${isScrolled ? 'header-scrolled' : ''}`}>
          <div class = 'header-middle'>
            <span class = {`span-button underline-animation ${white ? 'white_text' : ''}`} onClick= {modelOnClick}> Models </span>
            <span class = {`span-button ${white ? 'white_text' : ''}`} onClick= {aboutOnClick}> About Isdera </span>

            <img
                class = {`header-logo ${white ? 'white_img' : ''}`}
                src={logo}
                alt="Initial Image"
                onClick ={logoOnClick}
            />
            <span class = {`span-button ${white ? 'white_text' : ''}`} onClick= {testOnClick}> Request Test Drive </span>
            <span class = {`span-button ${white ? 'white_text' : ''}`} onClick= {accountOnClick}> Account </span>

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
