import '../App.css';
import logo from '../resources/isderalogo_text2.png'
const Header = ( {} ) => {
  return (
    <div className = 'header'>
        
        <div className = 'header-left'>
            <span className = 'span-button'> Models </span>
            <span className = 'span-button'> About Isdera </span>
        </div>

        <img 
            className = 'header-logo'             
            src={logo}
            alt="Initial Image"
        />

        <div className= 'header-right'>
            <span className = 'span-button'> Test Drive </span>
            <span className = 'span-button'> Sign In </span>
        </div>
    
    </div>

  )

}

export default Header