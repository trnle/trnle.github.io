import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <NavLink to='/about-me' className='nav-link'>About Me</NavLink>
      <NavLink to='/projects' className='nav-link'>Projects</NavLink>
      <NavLink to='/skills' className='nav-link'>Skills</NavLink>
      <NavLink to='/contact' className='nav-link'>Contact</NavLink>
    </nav>
  )
}

export default Navigation;