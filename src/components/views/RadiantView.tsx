import type { FilePath } from '../PortfolioApp'
interface Props { onNavigate: (p: FilePath) => void }

const footerBtn: React.CSSProperties = {
  background:'none', border:'none', padding:0, color:'var(--ink-3)',
  cursor:'pointer', fontFamily:'var(--font-mono)', fontSize:11,
  textDecoration:'underline', textUnderlineOffset:'3px',
}

export default function RadiantView({ onNavigate }: Props) {
  return (
    <div className="md-doc">
      <div className="breadcrumb">
        <button onClick={() => onNavigate('/')} style={{...footerBtn, fontSize:12}}>trnle</button>
        <span className="sep">/</span>
        <span style={{color:'var(--ink-3)', fontFamily:'var(--font-mono)', fontSize:12}}>projects</span>
        <span className="sep">/</span>
        <strong>radiant.md</strong>
      </div>

      <h1><span className="hash">#</span> radiant</h1>
      <span className="lead">a skincare routine tracker. clean, minimal, no overwhelm.</span>

      <div className="badge-row" style={{ marginTop: 16 }}>
        <span className="badge"><span className="bl">role</span><span className="br">solo</span></span>
        <span className="badge"><span className="bl">timeline</span><span className="br">2021</span></span>
        <span className="badge yellow"><span className="bl">stack</span><span className="br">Python · React · Flask · Postgres</span></span>
      </div>

      <blockquote>
        <strong>TL;DR</strong> - a skincare app where users build AM/PM routines from a product catalog
        and log daily journal entries to track skin changes over time. Solo capstone at App Academy.
      </blockquote>

      <h2><span className="hash">##</span> what it is</h2>
      <p>There are a thousand skincare routine apps. Radiant&apos;s take: keep it simple. Users pick products for their AM and PM routines, check them off daily, and write a short journal entry. No 20-step routines, no product scoring. This is quite an old project but one I still take pride in because it was one of my first apps where I thought of the problem as a customer and got to create a vision/solution. It came from wanting a simplistic app that didn't make me feel overwhelmed with all things skincare. I wanted to be able to document my personal skincare journey and would love to iterate/explore this product idea more in the future.</p>

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

      <div className="doc-footer">
        <button onClick={() => onNavigate('/projects/milestone')} style={footerBtn}>← milestone.md</button>
        <button onClick={() => onNavigate('/experience')} style={footerBtn}>experience.md →</button>
      </div>
    </div>
  )
}
