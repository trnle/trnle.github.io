import type { FilePath } from '../views/PortfolioApp'

interface NavLinkProps {
  path: FilePath
  children: React.ReactNode
  onNavigate: (p: FilePath) => void
}

export function NavLink({ path, children, onNavigate }: NavLinkProps) {
  return (
    <button
      onClick={() => onNavigate(path)}
      style={{ background: 'none', border: 'none', padding: 0, color: 'var(--accent)', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '3px', fontFamily: 'inherit', fontSize: 'inherit' }}
    >
      {children}
    </button>
  )
}

export function Sep() {
  return <span className="sep" style={{ color: 'var(--ink-4)', margin: '0 4px' }}>·</span>
}
