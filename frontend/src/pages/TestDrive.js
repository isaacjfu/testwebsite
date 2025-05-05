import '../App.css';
import Header from '../components/header.js'
import {useState,useEffect,useRef} from 'react';
import imperator from '../resources/imperator.png'
import commendatore from '../resources/commendatore.png'
import spyder from '../resources/spyder.png'
import Footer from '../components/footer.js'
import TestDriveRequest from '../components/testdriveRequest.js';
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
    <div class = {`testdrive-card ${isHighlighted ? "highlighted" : ""}`} onClick = {toggleHighlight}>
      <img
        src = {car_image}
        class = 'testdrive-card-image'
      />
      <span class = 'modal-card-info' > {car_name} </span>
    </div>
  )
}
const TestDrive = ( {} ) => {
  const [selectedCar, setSelectedCar] = useState("")
  const scrollContainerRef = useRef(null)
  const text = {
    title: 'Request a test drive',
    content: ''
  }
  return (
    <div class = 'homepage-container' ref = {scrollContainerRef}>
        <Header scrollContainerRef = {scrollContainerRef}/>
        <div class = 'homepage-card'>
          <div class = 'homepage-text-header-card'>
            <h1> {text.title} </h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur </p>
            <p> Select your Model </p>
            <div class ='testdrive-car-container'>
              <TestDriveCard car_name = 'Commendatore' car_image={commendatore} selectedCar = {selectedCar} setSelectedCar={setSelectedCar} />
              <TestDriveCard car_name = 'Imperator' car_image={imperator} selectedCar = {selectedCar} setSelectedCar={setSelectedCar}/>
              <TestDriveCard car_name = 'Spyder' car_image={spyder} selectedCar = {selectedCar} setSelectedCar={setSelectedCar}/>
            </div> 
            {(selectedCar != '') ?
            (<TestDriveRequest/>) : (<></>)
          }
          <Footer/>
          </div>
        </div>

    </div>
  )

}

export default TestDrive
