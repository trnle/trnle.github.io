import portrait from '../../images/portrait.png';
import './AboutMe.css';
import Contact from './Contact';

function AboutMe() {
  return (
    <div id='about-me'>
      <div id='portrait-links'>
        <div id='portrait'>
          <img src={portrait} alt="Headshot of Tran Le" />
        </div>
        <hr />
        <Contact />
      </div>
      <div id='introduction'>
        <h2>Hi, I'm Tran! &#128105;&#127995;&#8205;&#128187;</h2>
        <div id='bio'>
          <p>
            Bio Here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum  elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. U  id est laborum  elit, sed do eiusmod
          tempor incididunt ut labore et dolore magn id est laborum  elit, sed do eiusmod
          tempor incididunt ut labore et dolore magn
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;