import '../App.css';
import logo from '../resources/isderalogo.png'
import lightning from '../resources/lightning2.gif'

const Intro = ( {currentView} ) => {

  return (
      <div class = 'background'>
        {(currentView === 'image' || currentView === 'gif' ) && (
        <img
            src={logo}
            alt="Initial Image"
            class = "introImage"
        />
        )}
        {(currentView === 'gif' )  && (
        <img
            src={lightning}
            alt="GIF Animation"
            class = "introGIF"
        />
        )}
      </div>

  )

}

export default Intro
