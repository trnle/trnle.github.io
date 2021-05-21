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
        <h2>Hi, I'm Tran! &#128105;&#127995;&#8205;&#128187;</h2>
        <p>Bio Here</p>
      </div>
    </div> 
  )
}

export default AboutMe;