import React, { useEffect } from "react";
import { Link } from "react-scroll";
import './Navigation.css';

function Navigation() {

  let aboutMeDiv;
  let portfolioDiv;
  let skillsDiv;
  let contactMeDiv;

  useEffect(() => {
    aboutMeDiv = document.getElementById('about-me');
    portfolioDiv = document.getElementById('portfolio');
    skillsDiv = document.getElementById('skills');
    contactMeDiv = document.getElementById('contact-me');
  }, [])

  return (
    <nav>
      <div onClick={() => aboutMeDiv.scrollIntoView()}>
        <Link to='about-me'>About Me</Link>
      </div>
      <div onClick={() => portfolioDiv.scrollIntoView()}>
        <Link to='portfolio'>Portfolio</Link>
      </div>
      <div onClick={() => skillsDiv.scrollIntoView()}>
        <Link to='skills'>Skills</Link>
      </div>
      <div onClick={() => contactMeDiv.scrollIntoView()}>
        <Link to='contact-me'>Contact</Link>
      </div>
    </nav>
  )
}

export default Navigation;