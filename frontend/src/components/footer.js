import '../App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import logo from '../resources/isderalogo_text2.png'
import fb from '../resources/icon-facebook.png'
import instagram from '../resources/icon-instagram.png'
import tiktok from '../resources/icon-tiktok.png'
import wechat from '../resources/icon-wechat.png'
import x from '../resources/icon-x.png'
import youtube from '../resources/icon-youtube.png'

const FooterTop = ( {handleLogoClick} ) => {
  return (
    <div class = 'footer-top'> 
      <img
          src={logo}
          class = 'footer-logo-img'
          onClick={handleLogoClick}
      />
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
    </div>
  )
}
const FooterBottom = ( {}) => {
  const menus =[
    {header: 'Models', content: ['Commendatore', 'Imperator', 'Silver Arrow', 'Erator', 'Spyder', 'Autobahnkurier']},
    {header: 'Loren', content: ['Duis', 'Consectetur', 'Labore', 'Excepteur']},
    {header: 'About Us', content: ['News', 'Investors', 'Our Vision', 'Our Story', 'Technology']},
    {header: 'Corporate', content: ['Contact Us', 'Careers', 'Offices']},
    {header: 'Loren', content: ['Duis', 'Consectetur', 'Labore', 'Excepteur']},
  ]
  return(
    <div class = 'footer-bottom'>
      {menus.map((menu,index) => (
        <FooterBottomMenu menu = {menu}/>
      ))}
    </div>
  )
}
const FooterBottomMenu = ({menu}) => {

  return (
    <div class = 'footer-bottom-menu'>
        <h2 class = 'span-button'> {menu.header}</h2>
        <div class = 'footer-bottom-menu-container'> 
          {menu.content.map((c,index) => (
            <span class ='small-font span-button'>{c}</span>
          ))}
        </div>

    </div>
  )
}
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
  // <span class = 'span-button' onClick ={handleAccountClick}> Account </span>
  // <span class = 'span-button' onClick = {handleAboutClick}> About </span>
  return (
    <footer class='footer'>
      <FooterTop handleLogoClick= {handleLogoClick}/>
      <FooterBottom />
      <div class="footer-copyright">© Isdera 2025</div>
    </footer>
  )

}

export default Footer