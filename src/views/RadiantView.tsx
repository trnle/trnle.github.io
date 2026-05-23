import type { FilePath } from './PortfolioApp'
import Breadcrumb from '../components/Breadcrumb'
import DocFooter  from '../components/DocFooter'
import { Badge, BadgeRow } from '../components/Badge'

interface Props { onNavigate: (p: FilePath) => void }

export default function RadiantView({ onNavigate }: Props) {
  return (
    <div className="md-doc">
      <Breadcrumb
        segments={[{ label: 'trnle', path: '/' }, { label: 'projects' }, { label: 'radiant.md' }]}
        onNavigate={onNavigate}
      />

      <h1><span className="hash">#</span> radiant</h1>
      <span className="lead">a skincare routine tracker. clean, minimal, no overwhelm.</span>

      <BadgeRow style={{ marginTop: 16 }}>
        <Badge label="role"     value="solo" />
        <Badge label="timeline" value="2021" />
        <Badge label="stack"    value="Python · React · Flask · Postgres" tone="yellow" />
      </BadgeRow>

      <blockquote>
        <strong>TL;DR</strong> — a skincare app where users build AM/PM routines from a product catalog
        and log daily journal entries to track skin changes over time. Solo capstone at App Academy.
      </blockquote>

      <h2><span className="hash">##</span> what it is</h2>
      <p>
        There are a thousand skincare routine apps. Radiant&apos;s take: keep it simple. Users pick
        products for their AM and PM routines, check them off daily, and write a short journal entry.
        No 20-step routines, no product scoring. This is quite an old project but one I still take pride
        in because it was one of my first apps where I thought of the problem as a customer and got to
        create a vision from scratch.
      </p>

      <h2><span className="hash">##</span> tech</h2>
      <table>
        <thead><tr><th>layer</th><th>technology</th></tr></thead>
        <tbody>
          <tr><td>frontend</td><td>React, Redux, CSS Modules</td></tr>
          <tr><td>backend</td><td>Python, Flask, SQLAlchemy</td></tr>
          <tr><td>database</td><td>PostgreSQL</td></tr>
          <tr><td>infra</td><td>Docker, Heroku</td></tr>
        </tbody>
      </table>

      <h2><span className="hash">##</span> links</h2>
      <ul>
        <li><a href="https://github.com/trnle/radiant" target="_blank" rel="noopener noreferrer">github repo ↗</a></li>
      </ul>

      <DocFooter
        prev={{ label: 'milestone.md', path: '/projects/milestone' }}
        next={{ label: 'experience.md', path: '/career/experience' }}
        onNavigate={onNavigate}
      />
    </div>
  )
}
