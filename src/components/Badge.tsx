interface BadgeProps {
  label: string
  value: React.ReactNode
  tone?: 'default' | 'green' | 'yellow'
}

export function Badge({ label, value, tone = 'default' }: BadgeProps) {
  return (
    <span className={`badge${tone !== 'default' ? ` ${tone}` : ''}`}>
      <span className="bl">{label}</span>
      <span className="br">{value}</span>
    </span>
  )
}

interface BadgeRowProps { children: React.ReactNode; style?: React.CSSProperties }

export function BadgeRow({ children, style }: BadgeRowProps) {
  return <div className="badge-row" style={style}>{children}</div>
}

export function PulseDot() {
  return <span className="pulse-dot" />
}
