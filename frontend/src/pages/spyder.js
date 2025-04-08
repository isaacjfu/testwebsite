import '../App.css';
import Header from '../components/header.js'
import {useState,useEffect} from 'react';
import first_card from '../resources/silver_arrow.jpg'
import Footer from '../components/footer.js'
const Spyder = ( {} ) => {

  return (
    <div class = 'homepage-container'>
        <Header />
        <div class= 'homepage-card'>
          <img
              src = {first_card}
              alt = "Stock Image"
              class = 'homepage-img'
          />
        </div>
        <Footer/>
    </div>

  )

}

export default Spyder
