import '../App.css';
import Header from '../components/header.js'
import {useState,useEffect} from 'react';
import Footer from '../components/footer.js'
const Account = ( {} ) => {
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
    <div class = 'homepage-container'>
        <Header isScrolled={isScrolled} />
        <div class = 'header-filler'>

        </div>
        <form class='request-form'>
          <h2>Join Us</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. </p>
          <div class="request-form-group">
            <input type="text" id="fname" placeholder='*First Name' required />
            <input type="text" id="lname" placeholder='*Last Name' required />
            <input type="text" id="phone" placeholder='*Mobile/Cell Number' required />
            <input type="text" id="email" placeholder='*Email' required />
            <input type="password" id="password" placeholder='*Password' required />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div class = 'sign-in'>

        </div>
        <Footer/>
    </div>

  )

}

export default Account
