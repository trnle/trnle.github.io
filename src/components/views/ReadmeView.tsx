import Image from 'next/image'
import type { FilePath } from '../PortfolioApp'

interface Props { onNavigate: (p: FilePath) => void }

const NavLink = ({ path, children, onNavigate }: { path: FilePath; children: React.ReactNode; onNavigate: (p: FilePath) => void }) => (
  <button
    onClick={() => onNavigate(path)}
    style={{ background: 'none', border: 'none', padding: 0, color: 'var(--accent)', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '3px', fontFamily: 'inherit', fontSize: 'inherit' }}
  >
    {children}
  </button>
)

export default function ReadmeView({ onNavigate }: Props) {
  return (
    <div className="md-doc">
      <div className="breadcrumb">
        <span>trnle</span><span className="sep">/</span><strong>README.md</strong>
      </div>

      {/* Status badges */}
      <div className="badge-row">
        <span className="badge"><span className="bl">role</span><span className="br">full-stack engineer</span></span>
        <span className="badge green"><span className="bl">status</span><span className="br"><span className="pulse-dot" />open to chat</span></span>
        <span className="badge"><span className="bl">based</span><span className="br">seattle, WA</span></span>
        <span className="badge yellow"><span className="bl">stack</span><span className="br">ts · react · node · python</span></span>
        <span className="badge"><span className="bl">last commit</span><span className="br">5/22/26</span></span>
      </div>

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

      <div className="proj-card" onClick={() => onNavigate('/projects/milestone')}>
        <div className="proj-thumb" style={{ position: 'relative' }}>
          <Image src="/milestone/dashboard.png" alt="Milestone dashboard" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
        </div>
        <div className="proj-body">
          <div className="proj-title">
            📌 milestone
            <span className="live-badge"><span className="pulse-dot" />in progress</span>
          </div>
          <div className="proj-tags">
            {['typescript', 'react', 'vite', 'node', 'supabase', 'design-led', 'ai'].map(t => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
          <p className="proj-desc">
            Full-stack personal project taken from design to development.
          </p>
          <div className="proj-links">
            <NavLink path="/projects/milestone" onNavigate={onNavigate}>details ↗</NavLink>
            <span className="sep">·</span>
            <a href="https://trnle.github.io/milestone-public/" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>design preview ↗</a>
            <span className="sep">·</span>
            <a href="https://github.com/trnle/milestone-public" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>repo ↗</a>
          </div>
        </div>
      </div>

      <div className="proj-card" onClick={() => onNavigate('/projects/radiant')}>
        <div className="proj-thumb" style={{ position: 'relative' }}>
          <Image src="/radiant/product-board.png" alt="Radiant product dashboard" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
        </div>
        <div className="proj-body">
          <div className="proj-title">📌 radiant</div>
          <div className="proj-tags">
            {['javascript', 'python', 'react', 'flask', 'postgres', 'docker'].map(t => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
          <p className="proj-desc">
            A skincare routine tracker where users build AM/PM routines and log daily journal
            entries to track their skin over time. Clean, minimal, no overwhelm.
          </p>
          <div className="proj-links">
            <NavLink path="/projects/radiant" onNavigate={onNavigate}>details ↗</NavLink>
            <span className="sep">·</span>
            <a href="https://github.com/trnle/radiant" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>repo ↗</a>
          </div>
        </div>
      </div>

      <h2 id="stack"><span className="hash">##</span> tech stack</h2>
      <table>
        <thead><tr><th>area</th><th>tools</th></tr></thead>
        <tbody>
          <tr><td>language</td><td>typescript, javascript, python, sql</td></tr>
          <tr><td>frontend</td><td>react, node.js, vite, css, material ui</td></tr>
          <tr><td>backend</td><td>node, hono, rest api</td></tr>
          <tr><td>data</td><td>postgres, sqlalchemy, sequelize, aws, gcp</td></tr>
          <tr><td>infra</td><td>vercel, git, github actions, docker, k8s</td></tr>
          <tr><td>design</td><td>storybook, figma, adobe xd, ui/ux</td></tr>
        </tbody>
      </table>

      <h2 id="experience"><span className="hash">##</span> experience</h2>
      <ul className="exp-list">
        <li className="exp-row">
          <div>
            <div className="exp-role">Software Engineer I/II</div>
            <div className="exp-org">Nordstrom</div>
            <div className="exp-impact">building merchandise planning tooling · full-stack</div>
          </div>
          <div className="exp-period">2021 - 2025</div>
        </li>
        <li className="exp-row">
          <div>
            <div className="exp-role">Full-Stack Engineering</div>
            <div className="exp-org">App Academy</div>
            <div className="exp-impact">24-week bootcamp</div>
          </div>
          <div className="exp-period">2021</div>
        </li>
        <li className="exp-row">
          <div>
            <div className="exp-role">B.S.A. Biology</div>
            <div className="exp-org">UT Austin</div>
            <div className="exp-impact">hook &apos;em 🤘🏽</div>
          </div>
          <div className="exp-period">2016 - 2020</div>
        </li>
        <br />
        <div className="proj-links">
          <NavLink path="/experience" onNavigate={onNavigate}>checkout my full experience ↗</NavLink>
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
        <span>deployed on github pages · <a href="https://github.com/trnle" target="_blank" rel="noopener noreferrer">view source ↗</a> · last commit: 5/22/26 · made with care by tran 🐝 · 2026</span>
      </div>
    </div>
  )
}
