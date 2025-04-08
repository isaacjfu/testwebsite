import '../App.css';
import Header from '../components/header.js'
import {useState,useEffect, useRef} from 'react';
import Footer from '../components/footer.js'
const History = ( {} ) => {
  const scrollContainerRef = useRef(null)
  return (
    <div class = 'homepage-container' ref = {scrollContainerRef}>
        <Header scrollContainerRef={scrollContainerRef} />     
        <div>
            Hello
        </div>
        <Footer/>
    </div>

  )

}

export default History
