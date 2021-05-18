import { Link } from "react-scroll";
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <Link to="about-me">About Me</Link>
      <Link to="portfolio">Portfolio</Link>
      <Link to="skills">Skills</Link>
      <Link to="contact">Contact</Link>
    </nav>
  )
}

export default Navigation;