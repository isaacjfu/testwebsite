import '../App.css';
import Header from './header.js'
import first_card from '../resources/bluedoorsclosed.jpg'
const Home = ( {currentView} ) => {

  return (
    <div>
        {(currentView === 'homepage' )  && (
        <div>
            <Header/>
            <div className = 'homepage-container'>
                
                <div className = 'homepage-card'>
                    <img
                        src = {first_card}
                        alt = "Stock Image"
                        className = 'homepage-img'
                    />
                </div>
            </div>
        </div>
        )}
    </div>



  )

}

export default Home