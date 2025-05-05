import '../App.css';
import Header from '../components/header.js'
import {useState,useEffect, useRef} from 'react';
import Footer from '../components/footer.js'
const Contact = ( {} ) => {
  const scrollContainerRef = useRef(null)
  const text  = {
    header: 'Contact Us',
    subcontent: 'For personalized assistance, bespoke commissions, or investment opportunities,\
     please contact our team for a confidential consultation.'
  }
  return (
    <div class = 'homepage-container' ref = {scrollContainerRef}>
        <Header scrollContainerRef={scrollContainerRef} />     
        <div class = 'header-filler'>
          <h2> {text.header}</h2>
        </div>
        <form class='request-form'>
          <p> {text.subcontent} </p>
          <div class="request-form-group">
            <input type="text" class= 'lined-input' id="fname" placeholder='*First Name' required />
            <input type="text" class= 'lined-input' id="lname" placeholder='*Last Name' required />
            <input type="text" class= 'lined-input' id="email" placeholder='*Email' required />
            <textarea class='boxed-input' id="comment" placeholder='*Message' rows='7' required />
          </div>
          <button class ='block-button' type="submit">Submit</button>
        </form>
        <div class = 'sign-in'>

        </div>
        <Footer/>
    </div>

  )

}

export default Contact
