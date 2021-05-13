import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <NavLink to='/about-me'>About Me</NavLink>
      <NavLink to='/portfolio'>Portfolio</NavLink>
      <NavLink to='/skills'>Skills</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </nav>
  )
}

export default Navigation;