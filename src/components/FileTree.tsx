'use client'
import { useState } from 'react'
import type { FilePath } from './PortfolioApp'

interface Props {
  active: FilePath
  onSelect: (path: FilePath) => void
  drawerOpen: boolean
  onCmdOpen: () => void
}

type TreeItem = { path: FilePath; icon: string; label: string }
type TreeGroup = { label: string | null; items: TreeItem[]; folder?: string; folderItems?: TreeItem[] }

const groups: TreeGroup[] = [
  {
    label: null,
    items: [
      { path: '/',      icon: '📄', label: 'README.md' },
    ],
  },
  {
    label: 'Projects',
    items: [],
    folder: 'projects/',
    folderItems: [
      { path: '/projects/milestone', icon: '📄', label: 'milestone.md' },
      { path: '/projects/radiant',   icon: '📄', label: 'radiant.md'   },
    ],
  },
  {
    label: 'Career',
    items: [
      { path: '/experience', icon: '📄', label: 'experience.md' },
    ],
  },
]

export default function FileTree({ active, onSelect, drawerOpen, onCmdOpen }: Props) {
  const [projectsOpen, setProjectsOpen] = useState(true)

  const Item = ({ item }: { item: TreeItem }) => (
    <li>
      <div
        role="button"
        tabIndex={0}
        className={`tree-item ${active === item.path ? 'active' : ''}`}
        onClick={() => onSelect(item.path)}
        onKeyDown={e => e.key === 'Enter' && onSelect(item.path)}
      >
        <span className="ic">{item.icon}</span>
        {item.label}
      </div>
    </li>
  )

  return (
    <nav className={`tree ${drawerOpen ? 'drawer-open' : ''}`} aria-label="File tree">
      {/* Repo header */}
      <div className="tree-repo">
        <span>trnle</span>
        <span className="dot">●</span>
        <span className="branch">main</span>
      </div>

      {/* ⌘K trigger */}
      <div className="tree-cmd" role="button" tabIndex={0} onClick={onCmdOpen} onKeyDown={e => e.key === 'Enter' && onCmdOpen()}>
        <span>🔍</span>
        <span>go to file…</span>
        <span className="cmd-key">⌘K</span>
      </div>

      <ul className="tree-list">
        {groups.map((group, gi) => (
          <li key={gi}>
            {group.label && (
              <div className="tree-group-label">{group.label}</div>
            )}

            {group.folder ? (
              <>
                <div
                  className="tree-folder-row"
                  role="button"
                  tabIndex={0}
                  onClick={() => setProjectsOpen(o => !o)}
                  onKeyDown={e => e.key === 'Enter' && setProjectsOpen(o => !o)}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="caret">{projectsOpen ? '▾' : '▸'}</span>
                  <span>📂</span>
                  <span>{group.folder}</span>
                </div>
                {projectsOpen && (
                  <ul className="tree-children">
                    {group.folderItems?.map(item => <Item key={item.path} item={item} />)}
                  </ul>
                )}
              </>
            ) : (
              <ul className="tree-list">
                {group.items.map(item => <Item key={item.path} item={item} />)}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="tree-hint">
        ⓘ this site is structured<br />
        like a repo. click a file<br />
        to read it.
      </div>
    </nav>
  )
}
