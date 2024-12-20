import '../App.css';
import Header from './header.js'
import Footer from './footer.js'
import first_card from '../resources/bluedoorsclosed.jpg'
// import first_card from '../resources/1993isdera.jpg'
const Home = ( {currentView} ) => {
    let secondCardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return (
        <div>
            {(currentView === 'homepage' )  && (
            <div>
                <div className = 'homepage-container'>
                    <Header/>
                    <div className = 'homepage-card'>
                        <img
                            src = {first_card}
                            alt = "Stock Image"
                            className = 'homepage-img'
                        />
                    </div>
                    <div className = 'homepage-card'>
                        <div className = 'homepage-text-card'>
                            <h1> Isdera Motors </h1>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                            anim id est laborum.</p>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
            )}
        </div>



  )

}

export default Home