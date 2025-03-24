import '../App.css';
import Header from '../components/header.js'
import first_card from '../resources/1993isdera.jpg'
import Footer from '../components/footer.js'
import {useState,useEffect} from 'react';
const Commendatore = ( {} ) => {

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

export default Commendatore
