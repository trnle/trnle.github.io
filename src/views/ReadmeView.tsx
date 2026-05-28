import type { FilePath } from './PortfolioApp'
import ProjectCard from '../components/ProjectCard'
import { Badge, BadgeRow, PulseDot } from '../components/Badge'

interface Props { onNavigate: (p: FilePath) => void }

const NavLink = ({ path, children, onNavigate }: { path: FilePath; children: React.ReactNode; onNavigate: (p: FilePath) => void }) => (
  <button
    onClick={() => onNavigate(path)}
    style={{ background: 'none', border: 'none', padding: 0, color: 'var(--accent)', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '3px', fontFamily: 'inherit', fontSize: 'inherit' }}
  >
    {children}
  </button>
)

const Sep = () => <span className="sep" style={{ color: 'var(--ink-4)', margin: '0 4px' }}>·</span>

export default function ReadmeView({ onNavigate }: Props) {
  return (
    <div className="md-doc">
      <div className="breadcrumb">
        <span>trnle</span><span className="sep">/</span><strong>README.md</strong>
      </div>

      <BadgeRow>
        <Badge label="role"        value="full-stack engineer" />
        <Badge label="status"      value={<><PulseDot />open to chat</>} tone="green" />
        <Badge label="based"       value="seattle, WA" />
        <Badge label="stack"       value="ts · react · node · python" tone="yellow" />
        <Badge label="last commit" value="5/28/26" />
      </BadgeRow>

      <h1><span className="hash">#</span> tran le</h1>
      <span className="lead">
        building at the intersection of AI and user-facing products · based in the pnw 🌲
      </span>

      {/* TOC */}
      <div className="toc-box">
        <strong>table of contents</strong>
        <ol>
          <li><a href="#about">about</a></li>
          <li><a href="#projects">featured projects</a></li>
          <li><a href="#stack">tech stack</a></li>
          <li><a href="#experience">experience</a></li>
          <li><a href="#now">now</a></li>
          <li><a href="#offline">offline</a></li>
          <li><a href="#contact">contact</a></li>
        </ol>
      </div>

      <h2 id="about"><span className="hash">##</span> about</h2>
      <p>
        Hi! I&apos;m a full-stack engineer but I really enjoy the frontend and design aspects of development.
        I like that you can go from a fuzzy idea to a working product, and I&apos;m comfortable owning
        the whole loop - wireframes, schema, API, UI, deploy, iterate. I worked closely with product managers and designers to get
        to get the full picture of what I was engineering.
      </p>

      <h2 id="projects"><span className="hash">##</span> featured projects</h2>

      <ProjectCard
        onClick={() => onNavigate('/projects/milestone')}
        thumb={{ src: '/milestone/dashboard.png', alt: 'Milestone dashboard' }}
        title={<>📌 milestone <span className="live-badge"><PulseDot />in progress</span></>}
        tags={['typescript', 'react', 'vite', 'node', 'supabase', 'design-led', 'ai']}
        description="Full-stack personal project taken from design to development."
        links={<>
          <NavLink path="/projects/milestone" onNavigate={onNavigate}>details ↗</NavLink>
          <Sep />
          <a href="https://trnle.github.io/milestone-public/" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>design preview ↗</a>
          <Sep />
          <a href="https://github.com/trnle/milestone-public" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>repo ↗</a>
        </>}
      />

      <ProjectCard
        onClick={() => window.open('/design/wireframes.html', '_blank', 'noopener')}
        thumb={{ src: '/design/wireframe.png', alt: 'Portfolio design wireframes', plain: true }}
        title="📌 this site"
        tags={['claude design', 'claude code', 'next.js', 'css', 'design system', 'github actions']}
        description="Designed in Claude Design, built with Claude Code. README metaphor with handoff spec, tokens, components, and build checklist."
        links={<a href="/design/wireframes.html" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>wireframes ↗</a>}
      />

      <ProjectCard
        onClick={() => onNavigate('/projects/radiant')}
        thumb={{ src: '/radiant/product-board.png', alt: 'Radiant product dashboard' }}
        title="📌 radiant"
        tags={['javascript', 'python', 'react', 'flask', 'postgres', 'docker']}
        description="A skincare routine tracker where users build AM/PM routines and log daily journal entries to track their skin over time. Clean, minimal, no overwhelm."
        links={<>
          <NavLink path="/projects/radiant" onNavigate={onNavigate}>details ↗</NavLink>
          <Sep />
          <a href="https://github.com/trnle/radiant" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>repo ↗</a>
        </>}
      />

      <h2 id="stack"><span className="hash">##</span> tech stack</h2>
      <table>
        <thead><tr><th>area</th><th>tools</th></tr></thead>
        <tbody>
          <tr><td>frontend</td><td>react, redux, typescript, javascript, ag grid, vite, html, css, material ui, storybook</td></tr>
          <tr><td>backend & data</td><td>python, java, node, hono, rest api, postgres, bigquery, sql, java, kafka</td></tr>
          <tr><td>infra</td><td>aws, gcp, k8s, docker, airflow, vercel, terraform, splunk, new relic, git, github actions</td></tr>
          <tr><td>design</td><td>figma, adobe xd, ui/ux</td></tr>
          <tr><td>ai</td><td>claude, copilot, gemini, agentic workflows, prototyping</td></tr>
        </tbody>
      </table>

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

      <h2 id="now"><span className="hash">##</span> now</h2>
      <div className="now-stamp">may 2026</div>
      <blockquote>
        👩🏻‍💻 working on milestone. learning supabase RLS the hard way.<br />
        📖 reading: empire of storms / tower of dawn.<br />
        🌱 planted beefsteak tomatoes &amp; dahlias.<br />
        🐕 finn is currently asleep on my notes.<br />
      </blockquote>

      <h2 id="offline"><span className="hash">##</span> offline</h2>
      <p>things I love:</p>
      <div className="photo-strip">
        {[
          { emoji: '🏺', cap: 'pottery',    sub: 'throwing plates' },
          { emoji: '🧵', cap: 'embroidery', sub: '& sewing' },
          { emoji: '🏂', cap: 'snowboarding', sub: "" },
          { emoji: '🐕', cap: 'finn',       sub: '(my dog)' },
        ].map(({ emoji, cap, sub }) => (
          <div key={cap} className="photo-frame">
            <span className="photo-emoji">{emoji}</span>
            <span className="photo-cap">{cap}<br />{sub}</span>
          </div>
        ))}
      </div>

      <h2 id="contact"><span className="hash">##</span> contact</h2>
      <div className="codeblock">
        <span className="cc"># contact.yml</span>{'\n'}
        <span className="ck">email</span>{'    : '}<a href="mailto:tranle97@gmail.com" className="cv" style={{color:'var(--accent-soft)'}}>tranle97@gmail.com</a>{'\n'}
        <span className="ck">github</span>{'   : '}<a href="https://github.com/trnle" target="_blank" rel="noopener noreferrer" className="cv" style={{color:'var(--accent-soft)'}}>github.com/trnle ↗</a>{'\n'}
        <span className="ck">linkedin</span>{' : '}<a href="https://linkedin.com/in/trnle" target="_blank" rel="noopener noreferrer" className="cv" style={{color:'var(--accent-soft)'}}>linkedin.com/in/trnle ↗</a>{'\n'}
        <span className="ck">resume</span>{'   : '}<a href="/Tran_Le_Resume.pdf" target="_blank" rel="noopener noreferrer" className="cv" style={{color:'var(--accent-soft)'}}>resume pdf ↗</a>{'\n'}
        <span className="ck">location</span>{' : '}<span className="cv">seattle, wa</span>{'\n'}
      </div>

      <div className="doc-footer">
        <span>deployed on github pages · <a href="https://github.com/trnle" target="_blank" rel="noopener noreferrer">view source ↗</a> · last commit: 5/28/26 · made with care by tran 🐝 · 2026</span>
      </div>
    </div>
  )
}
