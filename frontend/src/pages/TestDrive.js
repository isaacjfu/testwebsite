import '../App.css';
import Header from '../components/header.js'
import {useState,useEffect} from 'react';
import imperator from '../resources/imperator.png'
import commendatore from '../resources/commendatore.png'
import silverArrow from '../resources/silverArrow.png'

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
          </div>
        </div>
        {(selectedCar != '') ?
            (<div className = 'homepage-card'>
              <span>Hello</span>
            </div>

            )
            :
            (<></>)
          }
    </div>

  )

}

export default TestDrive
