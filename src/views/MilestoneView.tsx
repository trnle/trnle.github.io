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

      <BadgeRow style={{ marginTop: 16 }}>
        <Badge label="role"     value="solo · design + dev" />
        <Badge label="timeline" value="present, 2026" />
        <Badge label="stack"    value="TS · React · Vite · Node · Supabase" tone="yellow" />
        <Badge label="status"   value={<><PulseDot />in progress</>} tone="green" />
      </BadgeRow>

      <blockquote>
        <strong>TL;DR</strong>: A wedding planning app built around one idea - the bride should never have to
        think about when to do something. Tasks surface only when they&apos;re actually actionable.
        Came out of planning my own wedding and reverting to spreadsheets because most popular tools were vendor focused.
      </blockquote>

      <h2><span className="hash">##</span> what it is</h2>
      <p>
        Most wedding planning apps give you a static list of tasks with dates. Milestone structures
        planning into phases with a window-based inbox where tasks are invisible until they enter their
        actionable window. The daily view answers one question: what do I do this week?
      </p>
      <h2><span className="hash">##</span> why i built it</h2>
      <p>I was planning my own wedding and kept going back to spreadsheets. Every app I tried was either vendor-focused (find a florist, book a venue) 
        or gave me a flat list of tasks with arbitrary due dates and no sense of what actually needed my attention right now. I wanted something 
        that would surface only what was actionable and stay out of the way the rest of the time. I also wanted something that still had that feel and ease
        or use like a spreadsheet does with cell-to-cell or key navigation.</p>
      <div style={{ position: 'relative', width: '100%', height: 280, margin: '20px 0', border: '1px solid var(--rule)', borderRadius: 'var(--r-md)', overflow: 'hidden', background: 'var(--paper-2)' }}>
        <Image src="/milestone/preview.png" alt="Milestone dashboard" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
      </div>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-3)', marginTop: -12, marginBottom: 20 }}>
        fig 1 · the dashboard, may 2026
      </p>

      <DocFooter
        prev={{ label: 'README.md',  path: '/' }}
        next={{ label: 'gh-issue-sync.md', path: '/projects/gh-issue-sync' }}
        onNavigate={onNavigate}
      />
    </div>
  )
}
