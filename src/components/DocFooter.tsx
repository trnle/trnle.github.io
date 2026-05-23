import type { FilePath } from '../views/PortfolioApp'

interface NavItem { label: string; path: FilePath }

interface Props {
  prev?: NavItem
  next?: NavItem
  onNavigate: (p: FilePath) => void
}

const btn: React.CSSProperties = {
  background: 'none', border: 'none', padding: 0,
  color: 'var(--ink-3)', cursor: 'pointer',
  fontFamily: 'var(--font-mono)', fontSize: 11,
  textDecoration: 'underline', textUnderlineOffset: '3px',
}

export default function DocFooter({ prev, next, onNavigate }: Props) {
  return (
    <div className="doc-footer">
      {prev ? (
        <button style={btn} onClick={() => onNavigate(prev.path)}>
          ← {prev.label}
        </button>
      ) : <span />}
      {next && (
        <button style={btn} onClick={() => onNavigate(next.path)}>
          {next.label} →
        </button>
      )}
    </div>
  )
}
