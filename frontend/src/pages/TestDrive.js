import '../App.css';
import Header from '../components/header.js'
import {useState,useEffect} from 'react';
import imperator from '../resources/imperator.png'
import commendatore from '../resources/commendatore.png'
import silverArrow from '../resources/silverArrow.png'
import Footer from '../components/footer.js'
const TestDriveCard = ( {car_name, car_image, selectedCar, setSelectedCar} ) => {
  const [isHighlighted, setIsHighlited] = useState(false)

  const toggleHighlight = () => {
    setIsHighlited(true)
    setSelectedCar(car_name)
  }
  useEffect(() => {
    if (selectedCar != car_name){
      setIsHighlited(false)
    } 
  }, [selectedCar])

  return(
    <div className = {`testdrive-card ${isHighlighted ? "highlighted" : ""}`} onClick = {toggleHighlight}>
      <img
        src = {car_image}
        className = 'testdrive-card-image'
      />
      <span className = 'modal-card-info' > {car_name} </span>
    </div>
  )
}
const TestDrive = ( {} ) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCar, setSelectedCar] = useState("")

  const handleScroll = () => {
    const container = document.querySelector('.homepage-container');
    if (container.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    const container = document.querySelector('.homepage-container');
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className = 'homepage-container'>
        <Header isScrolled={isScrolled} />
        <div className = 'homepage-card'>
          <div className = 'homepage-text-header-card'>
            <h1> Request a Test Drive </h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur </p>
            <p> Select your Model </p>
            <div className ='testdrive-car-container'>
              <TestDriveCard car_name = 'Commendatore' car_image={commendatore} selectedCar = {selectedCar} setSelectedCar={setSelectedCar} />
              <TestDriveCard car_name = 'Imperator' car_image={imperator} selectedCar = {selectedCar} setSelectedCar={setSelectedCar}/>
              <TestDriveCard car_name = 'Silver Arrow' car_image={silverArrow} selectedCar = {selectedCar} setSelectedCar={setSelectedCar}/>
            </div> 
            {(selectedCar != '') ?
            (
              <form className="request-form">
                <h1>Select your preferred dealership</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
                <div className="request-form-group">
                  <input type="text" id="dealership" placeholder='* Select your dealership' required />
                </div>
                <h1>Your personal details</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
                  <div className="request-form-group">
                    <input type="text" id="fname" placeholder='* First Name' required />
                    <input type="text" id="lname" placeholder='* Last Name' required />
                    <input type="text" id="phone" placeholder='* Mobile/Cell Number' required />
                    <input type="text" id="email" placeholder='* Email' required />
                    <input type="text" id="city" placeholder='* City' required />
                    <input type="text" id="location" placeholder='* Location' required />
                </div>
                <h1>Marketing Preferences</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
                <div className="request-form-radio-group">
                  <div className = 'request-form-radio-group-card'>
                    <p>Email</p>
                    <div className = 'request-form-radio-group-card-radio'>
                      <label className = 'request-form-radio-group-card-label'>
                        <input type="radio" name="email" value="yes" />
                        Yes
                      </label>
                      <label className = 'request-form-radio-group-card-label'>
                        <input type="radio" name="email" value="no" />
                        No
                      </label> 
                    </div>
                  </div>
                  <div className = 'request-form-radio-group-card'>
                    <p>Telephone</p>
                    <div className = 'request-form-radio-group-card-radio'>
                      <label className = 'request-form-radio-group-card-label'>
                        <input type="radio" name="telephone" value="yes" />
                        Yes
                      </label>
                      <label className = 'request-form-radio-group-card-label'>
                        <input type="radio" name="telephone" value="no" />
                        No
                      </label> 
                    </div>
                  </div>
                  <div className = 'request-form-radio-group-card'>
                    <p>SMS</p>
                    <div className = 'request-form-radio-group-card-radio'>
                      <label className = 'request-form-radio-group-card-label'>
                        <input type="radio" name="text" value="yes" />
                        Yes
                      </label>
                      <label className = 'request-form-radio-group-card-label'>
                        <input type="radio" name="text" value="no" />
                        No
                      </label> 
                    </div>
                  </div>
                </div>
                <button className='request-form-submit-button' type="submit">Submit</button>
              </form>
            )
            :
            (<></>)
          }
          </div>

        </div>
        <Footer/>
    </div>

  )

}

export default TestDrive
