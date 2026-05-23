'use client'
import { useState, useEffect, useRef } from 'react'
import type { FilePath } from '../views/PortfolioApp'

const files: { icon: string; label: string; path: FilePath | string; desc: string; external?: boolean }[] = [
  { icon: '📄', label: 'README.md',    path: '/',                   desc: 'intro, projects, stack, contact' },
  { icon: '📄', label: 'milestone.md', path: '/projects/milestone', desc: 'full-stack wedding planning app' },
  { icon: '🌐', label: 'portfolio-design.html', path: 'design/wireframes.html', desc: 'how this site was designed' },
  { icon: '📄', label: 'radiant.md',   path: '/projects/radiant',   desc: 'skincare routine tracker' },
  { icon: '📄', label: 'experience.md',path: '/career/experience',         desc: 'work history' },
  { icon: '📄', label: 'resume.pdf',   path: '/Tran_Le_Resume.pdf', desc: 'download resume', external: true },
]

interface Props {
  onClose: () => void
  onNavigate: (path: FilePath) => void
}

export default function CommandPalette({ onClose, onNavigate }: Props) {
  const [query, setQuery]   = useState('')
  const [focused, setFocused] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const results = query.trim()
    ? files.filter(f =>
        f.label.toLowerCase().includes(query.toLowerCase()) ||
        f.desc.toLowerCase().includes(query.toLowerCase())
      )
    : files

  useEffect(() => { inputRef.current?.focus() }, [])
  useEffect(() => { setFocused(0) }, [query])

  const go = (item: typeof files[0]) => {
    if (item.external) {
      window.open(item.path, '_blank')
    } else {
      onNavigate(item.path as FilePath)
    }
    onClose()
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setFocused(f => Math.min(f + 1, results.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setFocused(f => Math.max(f - 1, 0)) }
    if (e.key === 'Enter')     { if (results[focused]) go(results[focused]) }
    if (e.key === 'Escape')    { onClose() }
  }

  return (
    <div className="cmd-overlay" onClick={onClose}>
      <div className="cmd-box" onClick={e => e.stopPropagation()}>
        <div className="cmd-input-row">
          <span className="cmd-icon">🔍</span>
          <input
            ref={inputRef}
            className="cmd-input"
            placeholder="go to file…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKey}
          />
        </div>
        <div className="cmd-results">
          {results.length === 0 ? (
            <div className="cmd-empty">no results for &ldquo;{query}&rdquo;</div>
          ) : (
            <>
              <div className="cmd-section-label">files</div>
              {results.map((item, i) => (
                <div
                  key={item.path}
                  className={`cmd-result ${i === focused ? 'focused' : ''}`}
                  onClick={() => go(item)}
                  onMouseEnter={() => setFocused(i)}
                >
                  <span className="cmd-result-icon">{item.icon}</span>
                  <span>{item.label}</span>
                  <span className="cmd-result-path">{item.desc}</span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
