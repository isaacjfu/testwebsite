import '../App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import logo from '../resources/isderalogo_text2.png'
import fb from '../resources/icon-facebook.png'
import instagram from '../resources/icon-instagram.png'
import tiktok from '../resources/icon-tiktok.png'
import wechat from '../resources/icon-wechat.png'
import x from '../resources/icon-x.png'
import youtube from '../resources/icon-youtube.png'

const Footer = ( {} ) => {
  let navigate = useNavigate()

  const handleAboutClick = () => {
    navigate('/about')
  }
  const handleLogoClick = () => {
    navigate('/')
  }
  const handleAccountClick = () => {
    navigate('/account')
  }
  return (
    <footer class='footer'>
      <div class = 'footer-menu'>
        <span class = 'span-button' onClick = {handleAboutClick}> About </span>
        <img
            src={logo}
            class = 'footer-logo-img'
            onClick={handleLogoClick}
        />
        <span class = 'span-button' onClick ={handleAccountClick}> Account </span>
      </div>
      <div class = 'footer-icons'>
        <img
          src={fb}
          class = 'footer-icon-img'
        />
        <img
          src={instagram}
          class = 'footer-icon-img'
        />
        <img
          src={tiktok}
          class = 'footer-icon-img'
        />
        <img
          src={wechat}
          class = 'footer-icon-img'
        />
        <img
          src={x}
          class = 'footer-icon-img'
        />
        <img
          src={youtube}
          class = 'footer-icon-img'
        />
      </div>
      <div class="footer-copyright">© Isdera 2025</div>
    </footer>
  )

}

export default Footer