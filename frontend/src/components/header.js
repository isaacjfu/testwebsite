import '../App.css';
import logo from '../resources/isdera_textlogo.png'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react';
import ModelModal from './modelModal.js'
const Header = ( {white, setWhite,scrollContainerRef} ) => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
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
            class = 'header-logo'
            src={logo}
            alt="Initial Image"
            onClick ={logoOnClick}
        />
      </div>
      <div class = 'header-right'>
        <span class = {`span-button small-font underline-animation ${white ? 'white_text' : ''}`} onClick= {modelOnClick}> MODELS </span>
        <span class = {`span-button small-font ${white ? 'white_text' : ''}`} onClick= {aboutOnClick}> ABOUT ISDERA </span>
        <span class = {`span-button small-font ${white ? 'white_text' : ''}`} onClick= {testOnClick}> REQUEST TEST DRIVE </span>
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
