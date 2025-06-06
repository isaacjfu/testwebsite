import '../App.css';
import logo from '../resources/isdera_textlogo.png'
import hamburger from '../resources/hamburger.png'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react';
import ModelModal from './modelModal.js'
import useWindowSize from '../helper/useWindowSize.js';


const Header = ( {white, setWhite,scrollContainerRef} ) => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [clickedModal, setClickedModal] = useState('')
  const mediaType = useWindowSize()
  useEffect(()=> {
    console.log('in use')
    if (showModal && scrollContainerRef?.current){
      const handleScroll = () => {
        setShowModal(!showModal)
      }
      console.log("added event listener")
      scrollContainerRef.current.addEventListener("scroll",handleScroll)

      return () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.removeEventListener("scroll", handleScroll)
        }
      }
    }
  }, [showModal])

  const modelOnClick = () => {
    setClickedModal('model')
    setShowModal(true)
  }

  const aboutOnClick = () => {
    setClickedModal('about')
    setShowModal(true)
  }

  const logoOnClick = () => {
    navigate('/')
  }
  const hamburgerOnClick = () => {
    setClickedModal('hamburger')
    setShowModal(true)
  }
  const testOnClick = () => {
    navigate('/testDrive')
  }

  return (
    <div>
      {(mediaType === 'isMobile') ? 
      (<div class = 'header-container'>
        <div class = 'header-subcontainer'>
          <img
            src = {hamburger}
            class='header-image'
            onClick = {hamburgerOnClick}
          />
          <img
            src={logo}
            class = 'header-image'
            onClick = {logoOnClick}
          />
        </div>
      </div>
      ) 
      : 
      ( 
      <div class = {`header-container ${showModal ? 'header-bg-modal-open' : ''}`}>     
        <div class = 'header-left'>          
          <img
            class = 'header-logo'
            src={logo}
            alt="Initial Image"
            onClick ={logoOnClick}
          />
        </div>
        <div class = 'header-middle'> 
          <span class = 'span-button' onClick= {modelOnClick}> MODELS </span>
          <span class = 'span-button' onClick= {aboutOnClick}> ABOUT ISDERA </span>
        </div>
        <div class = 'header-right'>
          <span class = 'header-button' onClick= {testOnClick}> REQUEST TEST DRIVE </span>
        </div>
        {showModal ?
          (<ModelModal setClose = {setShowModal} clickedModal = {clickedModal}/>)
          :
          (<></>)
        }
      </div>
      )
      }
    </div>



  )

}

export default Header
