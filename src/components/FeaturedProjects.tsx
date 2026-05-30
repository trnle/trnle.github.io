import type { FilePath } from '../views/PortfolioApp'
import ProjectCard from './ProjectCard'
import { NavLink, Sep } from './NavLink'
import { PulseDot } from './Badge'

interface Props { onNavigate: (p: FilePath) => void }

export default function FeaturedProjects({ onNavigate }: Props) {
  return (
    <>
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
        onClick={() => onNavigate('/projects/gh-issue-sync')}
        thumb={{ src: '/gh-issue-sync/gh-cli.png', alt: 'Github Sync CLI example' }}
        title="📌 gh-issue-sync"
        tags={['python', 'claude', 'github api']}
        description="A delta-aware CLI that compares your codebase against open GitHub issues and proposes creates, updates, and closes with confidence scores. Nothing writes without your approval."
        links={<NavLink path="/projects/gh-issue-sync" onNavigate={onNavigate}>details ↗</NavLink>}
      />

      <ProjectCard
        onClick={() => window.open('/design/wireframes.html', '_blank', 'noopener')}
        thumb={{ src: '/design/wireframe.png', alt: 'Portfolio design wireframes', plain: true }}
        title="📌 this site"
        tags={['claude', 'next.js', 'css', 'design system', 'github pages']}
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
    </>
  )
}
