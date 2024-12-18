import '../App.css';
import logo from '../resources/isderalogo.png'
import lightning from '../resources/lightning2.gif'

const Intro = ( {currentView} ) => {

  return (
    <div>
        <div className = 'background'></div>
        {(currentView === 'image' || currentView === 'gif' ) && (
        <img
            src={logo}
            alt="Initial Image"
            className = "introImage"
        />
        )}
        {(currentView === 'gif' )  && (
        <img
            src={lightning}
            alt="GIF Animation"
            className = "introGIF"
        />
        )}
    </div>

  )

}

export default Intro