import portrait from '../../images/portrait.png';
import './AboutMe.css';

function AboutMe() {
  return (
    <div id='about-me'>
      <div id='test'>
        <h2>Hi, I'm Tran!</h2>
        <img src={portrait} alt="Headshot of Tran" height='300'/>
      </div>
    </div> 
  )
}

export default AboutMe;