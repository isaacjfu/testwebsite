import '../App.css';
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import History from '../components/history.js'
import Values from '../components/values.js'
import AboutCarousel from '../components/about_carousel.js';
import {useState,useEffect,useRef} from 'react';

import top_image from '../resources/about_top.jpg'
import georgeWashington from '../resources/washington.webp'
import johnAdams from '../resources/johnadams.webp'
import thomasJefferson from '../resources/thomasjefferson.webp'
import jamesMadison from '../resources/jamesmadison.webp'
import jamesMonroe from '../resources/jamesmonroe.webp'
import johnQAdams from '../resources/johnqadams.webp'
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
  const staff_arr = [{name: 'George Washington', title: 'Chief Executive Officer', image: georgeWashington},
    {name:'John Adams',title:'Chief Technology Officer',image: johnAdams},
    {name:'Thomas Jefferson', title: 'Chief Marketing Officer', image:thomasJefferson},
    {name: 'James Madison', title: 'Chief Human Resources Officer', image: jamesMadison},
    {name: 'James Monroe', title: 'Chief Security Officer', image:jamesMonroe},
    {name: 'John Quincy Adams', title: 'Chief Financial Officer', image:johnQAdams}]
  const office_arr = [{place: 'Walnut', address: '18573 Rowland Dr.', image: officebuilding},
    {place: 'Shanghai', address: '1930 Shanghai Dr.', image: officebuilding2}
  ] 
  const text ={
    header :{
      title: 'About Isdera'
    },
    vision : {
      title: 'Our Vision',
      content: 'To craft the world’s most exclusive and luxurious sports\
       cars. Each vehicle is a masterpiece of visionary design, meticulous\
        craftsmanship, and uncompromising performance. Our mission is to \
        deliver a truly bespoke driving experience for those who accept nothing \
        less than the extraordinary.'
    },
    values :{
      title: 'Our Values',
      sub1: 'Innovation',
      sub1content: 'Driven by a relentless pursuit of progress, we fuse cutting-edge\
       technology with visionary design. Innovation is not an option—it’s the engine \
       that propels us beyond convention and into the future of performance.',
      sub2: 'Individuality',
      sub2content: 'At Isdera, every creation is a singular expression of its\
      owner’s vision. We believe in celebrating uniqueness, crafting each vehicle \
      as an embodiment of personal identity and uncompromising taste.',
      sub3: 'Craftsmanship',
      sub3content: 'Handbuilt with meticulous attention to detail, every Isdera is a\
      testament to artisanal excellence. Our commitment to craftsmanship ensures that \
      each car is not just a car, but a masterpiece.'
    }
  }
  const [staff, setStaff] = useState(staff_arr)
  const [offices,setOffices] = useState(office_arr)
  const scrollContainerRef = useRef(null)
  return (
    <div class = 'about-container' ref={scrollContainerRef}>
        <Header scrollContainerRef = {scrollContainerRef}/>
        <div class = 'about-header-card'>
          <h1 class = "about-overlay">
              {text.header.title}
          </h1>
          <img
            src = {top_image}
            class = 'about-img-card'
          />
        </div>
        <History />
        <div class = 'about-subcontainer'>
          <div class = 'about-card'>
            <div class = 'about-text-card'>
              <h2> {text.vision.title} </h2>
              <p> {text.vision.content}</p>
            </div>
          </div>
          <Values text = {text} />
          <AboutCarousel/>
          <div class = 'about-card'>
            <h2>Our Staff</h2>
            <div class = 'about-grid-container'>
              {staff.map((item) => (
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
