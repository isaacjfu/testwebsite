import '../App.css';
import Header from '../components/header.js'
import {useState,useEffect} from 'react';
const TestDrive = ( {} ) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const handleScroll = () => {
    const container = document.querySelector('.testdrive-container');
    if (container.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    const container = document.querySelector('.testdrive-container');
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className = 'testdrive-container'>
        <Header isScrolled={isScrolled} />
    </div>

  )

}

export default TestDrive
