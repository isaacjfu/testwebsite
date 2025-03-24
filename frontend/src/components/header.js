import '../App.css';
import logo from '../resources/isdera_textlogo.png'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react';
import ModelModal from './modelModal.js'
const Header = ( {white, setWhite} ) => {
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
    <div class = {`header-container ${showModal ? 'header-bg-modal-open' : ''}`}>
      <div class = 'header-left'>          
        <img
            class = {`header-logo ${white ? 'white_img' : ''}`}
            src={logo}
            alt="Initial Image"
            onClick ={logoOnClick}
        />
      </div>
      <div class = 'header-right'>
        <span class = {`span-button underline-animation ${white ? 'white_text' : ''}`} onClick= {modelOnClick}> Models </span>
        <span class = {`span-button ${white ? 'white_text' : ''}`} onClick= {aboutOnClick}> About Isdera </span>
        <span class = {`span-button ${white ? 'white_text' : ''}`} onClick= {testOnClick}> Request Test Drive </span>
        <span class = {`span-button ${white ? 'white_text' : ''}`} onClick= {accountOnClick}> Account </span>
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
