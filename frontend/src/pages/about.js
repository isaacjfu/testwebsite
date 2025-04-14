import '../App.css';
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import History from '../components/history.js'
import {useState,useEffect,useRef} from 'react';

import top_image from '../resources/about_top.jpg'
import georgeWashington from '../resources/washington.webp'
import johnAdams from '../resources/johnadams.webp'
import thomasJefferson from '../resources/thomasjefferson.webp'
import jamesMadison from '../resources/jamesmadison.webp'
import jamesMonroe from '../resources/jamesmonroe.webp'
import johnQAdams from '../resources/johnqadams.webp'
import visionImage from '../resources/manycars.jpg'
import visionImage2 from '../resources/maybe.jpg'
import visionImage3 from '../resources/lightning.gif'
import officebuilding from '../resources/office_building.jpg'
import officebuilding2 from '../resources/office_building2.webp'

const StaffCard = ( {item} ) => {

  return (
    <div class = 'grid-card'>
      <img
        src = {item.image}
        class = 'grid-card-img'
      />
      <div class = 'grid-card-info'>
        <span class = 'grid-card-info-name'>{item.name}</span>
        <span class = 'grid-card-info-title'> {item.title} </span>
      </div>
  </div>
  )
}
const OfficeCard = ({item}) =>{
  return (
    <div class = 'grid-office-card'>
      <div class = 'grid-office-info-card'>
        <h2> {item.place}</h2>
        <span> {item.address}</span>
      </div>
      <img 
        src = {item.image}
        class = 'grid-office-img-card'
      />
    </div>
  )
}
const About = ( {} ) => {
  let staff_arr = [{name: 'George Washington', title: 'Chief Executive Officer', image: georgeWashington},
    {name:'John Adams',title:'Chief Technology Officer',image: johnAdams},
    {name:'Thomas Jefferson', title: 'Chief Marketing Officer', image:thomasJefferson},
    {name: 'James Madison', title: 'Chief Human Resources Officer', image: jamesMadison},
    {name: 'James Monroe', title: 'Chief Security Officer', image:jamesMonroe},
    {name: 'John Quincy Adams', title: 'Chief Financial Officer', image:johnQAdams}]
  let office_arr = [{place: 'Walnut', address: '18573 Rowland Dr.', image: officebuilding},
    {place: 'Shanghai', address: '1930 Shanghai Dr.', image: officebuilding2}
  ] 
  const [staff, setStaff] = useState(staff_arr)
  const [offices,setOffices] = useState(office_arr)
  const scrollContainerRef = useRef(null)
  return (
    <div class = 'about-container' ref={scrollContainerRef}>
        <Header scrollContainerRef = {scrollContainerRef}/>
        <div class = 'about-header-card'>
          <h1 class = "about-overlay">
              About Isdera
          </h1>
          <img
            src = {top_image}
            class = 'about-img-card'
          />
        </div>
        <History />
        <div class = 'about-subcontainer'>
          <div class = 'about-card'>
            <div class = 'homepage-text-card'>
              <h2> Our Vision </h2>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div class ='about-card'>
            <h2> Our Values </h2>
            <div class = 'about-card-three'>
              <div class = 'about-card-three-card'>
                <img
                  src = {visionImage}
                  class = 'about-card-three-card-img'
                />
                <h3>Lorem ipsum</h3>
                <p>
                Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div class = 'about-card-three-card'>
                  <img
                    src = {visionImage2}
                    class = 'about-card-three-card-img'
                  />
                    <h3>Lorem ipsum</h3>
                  <p>
                  Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
              </div>            
              <div class = 'about-card-three-card'>
                  <img
                    src = {visionImage3}
                    class = 'about-card-three-card-img'
                  />
                  <h3>Lorem ipsum</h3>
                  <p>
                  Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
              </div>
            </div>
          </div>
          <div class = 'about-card'>
            <h2>Our Staff</h2>
            <div class = 'about-grid-container'>
{              staff.map((item) => (
                  <StaffCard item = {item}/>
              ))}
            </div>
          </div>
          <div class = 'about-card'>
            <h2>Our Offices</h2>
            <div class = 'about-grid-container'>
              {offices.map((item) => (
                <OfficeCard item = {item}/>
              ))}
            </div>
          </div>

        </div>
       
        <Footer/>
    </div>

  )

}

export default About
