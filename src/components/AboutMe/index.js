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
            I graduated from The University of Texas at Austin (Hook 'em &#129304;&#127996;)
            with a Bachelor of Science and Arts in Biology. During my time at
            university, I realized that software engineering was a growing interest
            that I wanted to pursue as a career. Transitioning from the healthcare
            field to the tech industry has been exciting as I've learned more about
            how critical software and digitalization are to the modern world. Within
            the last year, I've dedicated my time to learning how to program and develop
            full-stack applications and I enrolled in an online bootcamp at App Academy
            to further aid my transition into the tech industry. I'm looking 
            forward to growing as a software engineer by continuing to familiarize 
            myself with useful programming languages and tools, and I'm especially
            keen on learning about mobile app development in the future!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;