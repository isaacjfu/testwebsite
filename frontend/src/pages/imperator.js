import '../App.css';
import Header from '../components/header.js'
import {useState,useEffect} from 'react';
import first_card from '../resources/Isdera_imperator_1.jpg'
const Imperator = ( {} ) => {
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

export default Imperator
