import Image from 'next/image'
import type { FilePath } from './PortfolioApp'
import Breadcrumb from '../components/Breadcrumb'
import DocFooter  from '../components/DocFooter'
import { Badge, BadgeRow, PulseDot } from '../components/Badge'

interface Props { onNavigate: (p: FilePath) => void }

export default function MilestoneView({ onNavigate }: Props) {
  return (
    <div className="md-doc">
      <Breadcrumb
        segments={[{ label: 'trnle', path: '/' }, { label: 'projects' }, { label: 'milestone.md' }]}
        onNavigate={onNavigate}
      />

      <h1><span className="hash">#</span> milestone</h1>
      <span className="lead">a full-stack side project, taken from design to ship. typescript · react · node · supabase.</span>

      <BadgeRow style={{ marginTop: 16 }}>
        <Badge label="role"     value="solo · design + dev" />
        <Badge label="timeline" value="present, 2026" />
        <Badge label="stack"    value="TS · React · Vite · Node · Supabase" tone="yellow" />
        <Badge label="status"   value={<><PulseDot />in progress</>} tone="green" />
      </BadgeRow>

      <blockquote>
        <strong>TL;DR</strong> — a wedding planning app built around one idea: the bride should never have to
        think about when to do something. Tasks surface only when they&apos;re actually actionable.
        Came out of planning my own wedding and reverting to spreadsheets because most popular tools were vendor focused.
      </blockquote>

      <h2><span className="hash">##</span> what it is</h2>
      <p>
        Most wedding planning apps give you a flat list of 55 tasks with dates. Milestone structures
        planning into phases with a window-based inbox — tasks are invisible until they enter their
        actionable window. The daily view answers one question: what do I do this week?
      </p>

      <div style={{ position: 'relative', width: '100%', height: 280, margin: '20px 0', border: '1px solid var(--rule)', borderRadius: 'var(--r-md)', overflow: 'hidden', background: 'var(--paper-2)' }}>
        <Image src="/milestone/dashboard.png" alt="Milestone dashboard" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
      </div>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-3)', marginTop: -12, marginBottom: 20 }}>
        fig 1 · the dashboard, may 2026
      </p>

      <h2><span className="hash">##</span> the design preview</h2>
      <blockquote>
        A design preview lives at{' '}
        <a href="https://trnle.github.io/milestone-public/" target="_blank" rel="noopener noreferrer">trnle.github.io/milestone-public ↗</a>.
      </blockquote>

      <h2><span className="hash">##</span> links</h2>
      <ul>
        <li><a href="https://trnle.github.io/milestone-public/" target="_blank" rel="noopener noreferrer">design preview ↗</a></li>
        <li><a href="https://github.com/trnle/milestone-public" target="_blank" rel="noopener noreferrer">github repo (public docs) ↗</a></li>
      </ul>

      <DocFooter
        prev={{ label: 'README.md',  path: '/' }}
        next={{ label: 'radiant.md', path: '/projects/radiant' }}
        onNavigate={onNavigate}
      />
    </div>
  )
}
