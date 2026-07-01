'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import FileTree from '../components/FileTree'
import CommandPalette from '../components/CommandPalette'

import ReadmeView       from './ReadmeView'
import MilestoneView    from './MilestoneView'
import RadiantView      from './RadiantView'
import GhIssueSyncView  from './GhIssueSyncView'
import ExperienceView   from './ExperienceView'

export type FilePath =
  | '/'
  | '/projects/milestone'
  | '/projects/gh-issue-sync'
  | '/projects/radiant'
  | '/career/experience'

const BREADCRUMBS: Record<FilePath, string> = {
  '/':                           'README.md',
  '/projects/milestone':         'projects / milestone.md',
  '/projects/gh-issue-sync':     'projects / gh-issue-sync.md',
  '/projects/radiant':           'projects / radiant.md',
  '/career/experience':          'career / experience.md',
}

// Convert a URL hash (e.g. "#/projects/milestone") into a known FilePath,
// falling back to the home page for anything unrecognized.
function pathFromHash(hash: string): FilePath {
  const path = hash.replace(/^#/, '') || '/'
  return (path in BREADCRUMBS ? path : '/') as FilePath
}

export default function PortfolioApp() {
  const [active, setActive]   = useState<FilePath>('/')
  const [cmdOpen, setCmdOpen] = useState(false)
  const [drawer, setDrawer]   = useState(false)
  const mainRef = useRef<HTMLElement>(null)

  const navigate = useCallback((path: FilePath) => {
    setActive(path)
    setDrawer(false)
    mainRef.current?.scrollTo({ top: 0 })
    // Reflect the current view in the URL so pages are linkable/shareable.
    const hash = path === '/' ? '/' : path
    if (pathFromHash(window.location.hash) !== path) {
      window.location.hash = hash
    }
  }, [])

  // Sync the active view with the URL hash: read it on load and respond to
  // back/forward navigation and manual hash edits.
  useEffect(() => {
    const syncFromHash = () => {
      const path = pathFromHash(window.location.hash)
      setActive(path)
      setDrawer(false)
      mainRef.current?.scrollTo({ top: 0 })
    }
    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [])

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

      {drawer && <div className="mobile-scrim open" onClick={() => setDrawer(false)} />}

      <div className="readme-wrap">
        <FileTree
          active={active}
          onSelect={navigate}
          drawerOpen={drawer}
          onCmdOpen={() => setCmdOpen(true)}
        />

        <main ref={mainRef} style={{ overflowY: 'auto', height: '100vh', scrollbarGutter: 'stable' }}>
          {active === '/'                           && <ReadmeView      onNavigate={navigate} />}
          {active === '/projects/milestone'         && <MilestoneView   onNavigate={navigate} />}
          {active === '/projects/gh-issue-sync'     && <GhIssueSyncView onNavigate={navigate} />}
          {active === '/projects/radiant'           && <RadiantView     onNavigate={navigate} />}
          {active === '/career/experience'          && <ExperienceView  onNavigate={navigate} />}
        </main>
      </div>

      {cmdOpen && (
        <CommandPalette onClose={() => setCmdOpen(false)} onNavigate={navigate} />
      )}
    </div>
  )
}
