import '../App.css';
import Header from '../components/header.js'
import first_card from '../resources/1993isdera.jpg'
import {useState,useEffect} from 'react';
const Commendatore = ( {} ) => {
    const [isScrolled, setIsScrolled] = useState(false);
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
        <div className= 'homepage-card'>
          <img
              src = {first_card}
              alt = "Stock Image"
              className = 'homepage-img'
          />
        </div>
    </div>

  )

}

export default Commendatore
