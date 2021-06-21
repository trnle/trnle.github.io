import { Link } from "react-scroll";
import './Navigation.css';

function Navigation() {

  return (
    <nav>
      <div>
        <Link to="about-me">About Me</Link>
      </div>
      <div>
        <Link to="portfolio" spy={true}>Portfolio</Link>
      </div>
      <div>
        <Link to="skills" spy={true}>Skills</Link>
      </div>
      <div>
        <Link to="contact-me" spy={true}>Contact</Link>
      </div>
    </nav> 
  )
}

export default Navigation;