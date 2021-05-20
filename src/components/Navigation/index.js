import { Link } from "react-scroll";
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <div>
        <Link to="about-me">About Me</Link>
      </div>
      <div>
        <Link to="portfolio">Portfolio</Link>
      </div>
      <div>
        <Link to="skills">Skills</Link>
      </div>
    </nav> 
  )
}

export default Navigation;