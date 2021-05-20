import portrait from '../../images/portrait.png';
import './AboutMe.css';

function AboutMe() {
  return (
    <div id='about-me'>
      <div id='portrait-links'>
        <img src={portrait} alt="Headshot of Tran" height='300'/>
        <div id='contact-links'>
          <a href='https://www.linkedin.com/in/trnle'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='https://github.com/trnle_'>
            <i className='fab fa-github'></i>
          </a>
          <a href='https://angel.co/u/tran-le-5'>
            <i className='fab fa-angellist'></i>
          </a>
          <a href='https://twitter.com/tranle_'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='mailto:tranle97@gmail.com'>
            <i className='fas fa-envelope'></i>
          </a>
        </div>
      </div>
      <div id='introduction'>
        <h2>Hi, I'm Tran!</h2>
      </div>
    </div> 
  )
}

export default AboutMe;