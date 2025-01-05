import '../App.css';
import Header from '../components/header.js'
import {useState,useEffect} from 'react';
const Login = ( {} ) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const container = document.querySelector('.login-container');
    if (container.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    const container = document.querySelector('.login-container');
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className = 'login-container'>
        <Header isScrolled={isScrolled} />
    </div>

  )

}

export default Login
