import portrait from '../../images/portrait.png';
import './AboutMe.css';
import Contact from './Contact';

function AboutMe() {
  return (
    <div id='about-me'>
      <div id='portrait-links'>
        <div id='portrait'>
          <img src={portrait} alt="Headshot of Tran" height='270'/>
        </div>
        <Contact />
      </div>
      <div id='introduction'>
        <h2>Hi, I'm Tran!</h2>
        <p>I am a Software Engineer.</p>
      </div>
    </div> 
  )
}

export default AboutMe;