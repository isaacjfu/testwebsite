import '../App.css';
import Header from '../components/header.js'
import {useState,useEffect} from 'react';
import first_card from '../resources/silver_arrow.jpg'
import Footer from '../components/footer.js'
const SilverArrow = ( {} ) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [white,setWhite] = useState(true)

  const handleScroll = () => {
    const container = document.querySelector('.homepage-container');
    if (container.scrollTop > 0) {
      setWhite(false)
      setIsScrolled(true);
    } else {
      setWhite(true)
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
        <Header isScrolled={isScrolled} white = {white} setWhite={setWhite}/>
        <div className= 'homepage-card'>
          <img
              src = {first_card}
              alt = "Stock Image"
              className = 'homepage-img'
          />
        </div>
        <Footer/>
    </div>

  )

}

export default SilverArrow
