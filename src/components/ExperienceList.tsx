import type { FilePath } from '../views/PortfolioApp'
import { NavLink } from './NavLink'

interface Props { onNavigate: (p: FilePath) => void }

export default function ExperienceList({ onNavigate }: Props) {
  return (
    <>
      <h2 id="experience"><span className="hash">##</span> experience</h2>
      <ul className="exp-list">
        <li className="exp-row">
          <div>
            <div className="exp-role">software engineer i/ii</div>
            <div className="exp-org">nordstrom</div>
            <div className="exp-impact">building merchandise planning tooling · full-stack</div>
          </div>
          <div className="exp-period">2021 - 2025</div>
        </li>
        <li className="exp-row">
          <div>
            <div className="exp-role">full-stack engineering</div>
            <div className="exp-org">app academy</div>
            <div className="exp-impact">24-week bootcamp</div>
          </div>
          <div className="exp-period">2021</div>
        </li>
        <li className="exp-row">
          <div>
            <div className="exp-role">b.s.a. biology</div>
            <div className="exp-org">ut austin</div>
            <div className="exp-impact">hook &apos;em 🤘🏽</div>
          </div>
          <div className="exp-period">2016 - 2020</div>
        </li>
        <br />
        <div className="proj-links">
          <NavLink path="/career/experience" onNavigate={onNavigate}>check out my full experience →</NavLink>
        </div>
      </ul>
    </>
  )
}
