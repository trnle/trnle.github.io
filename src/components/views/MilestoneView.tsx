import Image from 'next/image'
import type { FilePath } from '../PortfolioApp'

interface Props { onNavigate: (p: FilePath) => void }

const footerBtn: React.CSSProperties = {
  background: 'none', border: 'none', padding: 0, color: 'var(--ink-3)',
  cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 11,
  textDecoration: 'underline', textUnderlineOffset: '3px',
}

export default function MilestoneView({ onNavigate }: Props) {
  return (
    <div className="md-doc">
      <div className="breadcrumb">
        <button onClick={() => onNavigate('/')} style={{...footerBtn, fontSize:12}}>trnle</button>
        <span className="sep">/</span>
        <span style={{color:'var(--ink-3)', fontFamily:'var(--font-mono)', fontSize:12}}>projects</span>
        <span className="sep">/</span>
        <strong>milestone.md</strong>
      </div>

      <h1><span className="hash">#</span> milestone</h1>
      <span className="lead">a full-stack side project, taken from design to ship. typescript · react · node · supabase.</span>

      <div className="badge-row" style={{ marginTop: 16 }}>
        <span className="badge"><span className="bl">role</span><span className="br">solo · design + dev</span></span>
        <span className="badge"><span className="bl">timeline</span><span className="br">present, 2026</span></span>
        <span className="badge yellow"><span className="bl">stack</span><span className="br">TS · React · Vite · Node · Supabase</span></span>
        <span className="badge green"><span className="bl">status</span><span className="br"><span className="pulse-dot" />in progress</span></span>
      </div>

      <blockquote>
        <strong>TL;DR</strong> - a wedding planning app built around one idea: the bride should never have to
        think about when to do something. Tasks surface only when they&apos;re actually actionable.
        Came out of planning my own wedding and reverting to spreadsheets because most popular tools were vendor focused.
      </blockquote>

      <h2><span className="hash">##</span> what it is</h2>
      <p>
        Most wedding planning apps give you a flat list of 55 tasks with dates. Milestone structures
        planning into phases with a window-based inbox - tasks are invisible until they enter their
        actionable window. The daily view answers one question: what do I do this week?
      </p>

      <div style={{ position:'relative', width:'100%', height:280, margin:'20px 0', border:'1px solid var(--rule)', borderRadius:'var(--r-md)', overflow:'hidden', background:'var(--paper-2)' }}>
        <Image src="/milestone/dashboard.png" alt="Milestone dashboard" fill style={{objectFit:'cover', objectPosition:'top'}} />
      </div>
      <p style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--ink-3)', marginTop:-12, marginBottom:20 }}>
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

      <div className="doc-footer">
        <button onClick={() => onNavigate('/')} style={footerBtn}>← back to README</button>
        <button onClick={() => onNavigate('/projects/radiant')} style={footerBtn}>next: radiant.md →</button>
      </div>
    </div>
  )
}
