import type { FilePath } from '../views/PortfolioApp'

type Segment =
  | { label: string; path: FilePath }   // clickable
  | { label: string; path?: undefined }  // current - rendered bold

interface Props {
  segments: Segment[]
  onNavigate: (p: FilePath) => void
}

const btn: React.CSSProperties = {
  background: 'none', border: 'none', padding: 0,
  color: 'var(--ink-3)', cursor: 'pointer',
  fontFamily: 'var(--font-mono)', fontSize: 12,
}

export default function Breadcrumb({ segments, onNavigate }: Props) {
  return (
    <div className="breadcrumb">
      {segments.map((seg, i) => (
        <span key={i} style={{ display: 'contents' }}>
          {i > 0 && <span className="sep">/</span>}
          {seg.path !== undefined ? (
            <button style={btn} onClick={() => onNavigate(seg.path as FilePath)}>
              {seg.label}
            </button>
          ) : (
            <strong>{seg.label}</strong>
          )}
        </span>
      ))}
    </div>
  )
}
