'use client'
import { useState } from 'react'
import type { FilePath } from '../views/PortfolioApp'

interface Props {
  active: FilePath
  onSelect: (path: FilePath) => void
  drawerOpen: boolean
  onCmdOpen: () => void
}

type TreeItem =
  | { kind: 'internal'; path: FilePath; icon: string; label: string }
  | { kind: 'external'; href: string;  icon: string; label: string }

type TreeGroup = {
  label: string | null
  items: TreeItem[]
  folder?: string
  folderItems?: TreeItem[]
}

const groups: TreeGroup[] = [
  {
    label: null,
    items: [
      { kind: 'internal', path: '/',      icon: '📄', label: 'README.md' },
    ],
  },
  {
    label: 'Projects',
    items: [],
    folder: 'projects/',
    folderItems: [
      { kind: 'internal', path: '/projects/milestone',        icon: '📄', label: 'milestone.md'         },
      { kind: 'internal', path: '/projects/gh-issue-sync',    icon: '📄', label: 'gh-issue-sync.md'      },
      { kind: 'internal', path: '/projects/radiant',          icon: '📄', label: 'radiant.md'            },
    ],
  },
  {
    label: 'Career',
    items: [],
    folder: 'career/',
    folderItems: [
      { kind: 'internal', path: '/career/experience', icon: '📄', label: 'experience.md' },
      { kind: 'external', href: '/Tran_Le_Resume.pdf', icon: '📄', label: 'resume.pdf' },
    ],
  },
]

// Track open state per folder name — starts with all folders open
function useOpenFolders(initial: string[]) {
  const [open, setOpen] = useState<Record<string, boolean>>(
    () => Object.fromEntries(initial.map(f => [f, true]))
  )
  const toggle = (folder: string) =>
    setOpen(prev => ({ ...prev, [folder]: !prev[folder] }))
  return { open, toggle }
}

export default function FileTree({ active, onSelect, drawerOpen, onCmdOpen }: Props) {
  const folderNames = groups.map(g => g.folder).filter(Boolean) as string[]
  const { open, toggle } = useOpenFolders(folderNames)

  const handleItem = (item: TreeItem) => {
    if (item.kind === 'external') {
      window.open(item.href, '_blank', 'noopener')
    } else {
      onSelect(item.path)
    }
  }

  const Item = ({ item }: { item: TreeItem }) => {
    const isActive = item.kind === 'internal' && active === item.path
    return (
      <li>
        <div
          role="button"
          tabIndex={0}
          className={`tree-item ${isActive ? 'active' : ''}`}
          onClick={() => handleItem(item)}
          onKeyDown={e => e.key === 'Enter' && handleItem(item)}
        >
          <span className="ic">{item.icon}</span>
          {item.label}
          {item.kind === 'external' && <span style={{ marginLeft: 'auto', fontSize: 10, color: 'var(--ink-4)' }}>↗</span>}
        </div>
      </li>
    )
  }

  return (
    <nav className={`tree ${drawerOpen ? 'drawer-open' : ''}`} aria-label="File tree">
      <div className="tree-repo">
        <span>trnle</span>
        <span className="dot">●</span>
        <span className="branch">main</span>
      </div>

      <div className="tree-cmd" role="button" tabIndex={0} onClick={onCmdOpen} onKeyDown={e => e.key === 'Enter' && onCmdOpen()}>
        <span>🔍</span>
        <span>go to file…</span>
        <span className="cmd-key">⌘K</span>
      </div>

      <ul className="tree-list">
        {groups.map((group, gi) => (
          <li key={gi}>
            {group.label && <div className="tree-group-label">{group.label}</div>}

            {group.folder ? (
              <>
                <div
                  className="tree-folder-row"
                  role="button"
                  tabIndex={0}
                  onClick={() => toggle(group.folder!)}
                  onKeyDown={e => e.key === 'Enter' && toggle(group.folder!)}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="caret">{open[group.folder] ? '▾' : '▸'}</span>
                  <span>📂</span>
                  <span>{group.folder}</span>
                </div>
                {open[group.folder] && (
                  <ul className="tree-children">
                    {group.folderItems?.map((item, i) => <Item key={i} item={item} />)}
                  </ul>
                )}
              </>
            ) : (
              <ul className="tree-list">
                {group.items.map((item, i) => <Item key={i} item={item} />)}
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
