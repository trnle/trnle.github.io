'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import FileTree from './FileTree'
import CommandPalette from './CommandPalette'

import ReadmeView    from './views/ReadmeView'
import MilestoneView from './views/MilestoneView'
import RadiantView   from './views/RadiantView'
import ExperienceView from './views/ExperienceView'

export type FilePath =
  | '/'
  | '/about'
  | '/projects/milestone'
  | '/projects/radiant'
  | '/experience'
  | '/now'
  | '/contact'

const BREADCRUMBS: Record<FilePath, string> = {
  '/':                   'README.md',
  '/about':              'about.md',
  '/projects/milestone': 'projects / milestone.md',
  '/projects/radiant':   'projects / radiant.md',
  '/experience':         'experience.md',
  '/now':                'now.md',
  '/contact':            'contact.yml',
}

export default function PortfolioApp() {
  const [active, setActive]     = useState<FilePath>('/')
  const [cmdOpen, setCmdOpen]   = useState(false)
  const [drawer, setDrawer]     = useState(false)
  const mainRef = useRef<HTMLElement>(null)

  // Scroll doc to top on file switch
  const navigate = useCallback((path: FilePath) => {
    setActive(path)
    setDrawer(false)
    mainRef.current?.scrollTo({ top: 0 })
  }, [])

  // ⌘K / Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setCmdOpen(o => !o) }
      if (e.key === 'Escape') { setCmdOpen(false); setDrawer(false) }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const crumb = BREADCRUMBS[active]

  return (
    <div className="site-wrapper">
      {/* Mobile top bar */}
      <div className="mobile-header">
        <button className="mobile-menu-btn" onClick={() => setDrawer(true)} aria-label="Open file tree">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
            <rect y="2"    width="18" height="1.5" rx="1" />
            <rect y="8.25" width="18" height="1.5" rx="1" />
            <rect y="14.5" width="18" height="1.5" rx="1" />
          </svg>
        </button>
        <span className="mobile-breadcrumb">trnle / {crumb}</span>
      </div>

      {/* Scrim behind drawer */}
      {drawer && (
        <div className="mobile-scrim open" onClick={() => setDrawer(false)} />
      )}

      <div className="readme-wrap">
        <FileTree
          active={active}
          onSelect={navigate}
          drawerOpen={drawer}
          onCmdOpen={() => setCmdOpen(true)}
        />

        <main ref={mainRef} style={{ overflowY: 'auto', height: '100vh', scrollbarGutter: 'stable' }}>
          {active === '/'                   && <ReadmeView     onNavigate={navigate} />}
          {active === '/projects/milestone' && <MilestoneView  onNavigate={navigate} />}
          {active === '/projects/radiant'   && <RadiantView    onNavigate={navigate} />}
          {active === '/experience'         && <ExperienceView  onNavigate={navigate} />}
        </main>
      </div>

      {cmdOpen && (
        <CommandPalette onClose={() => setCmdOpen(false)} onNavigate={navigate} />
      )}
    </div>
  )
}
