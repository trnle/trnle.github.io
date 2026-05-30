import type { FilePath } from './PortfolioApp'
import Breadcrumb from '../components/Breadcrumb'
import DocFooter  from '../components/DocFooter'
import { Badge, BadgeRow } from '../components/Badge'

interface Props { onNavigate: (p: FilePath) => void }

export default function GhIssueSyncView({ onNavigate }: Props) {
  return (
    <div className="md-doc">
      <Breadcrumb
        segments={[{ label: 'trnle', path: '/' }, { label: 'projects' }, { label: 'gh-issue-sync.md' }]}
        onNavigate={onNavigate}
      />

      <h1><span className="hash">#</span> gh-issue-sync</h1>

      <BadgeRow style={{ marginTop: 16 }}>
        <Badge label="role"     value="solo" />
        <Badge label="timeline" value="2026" />
        <Badge label="stack"    value="Python · Claude · GitHub" tone="yellow" />
      </BadgeRow>

      <blockquote>
        <strong>TL;DR:</strong> A delta-aware CLI that compares your repo&apos;s current state against open GitHub issues
        and suggests creates, updates, and closes with confidence scores. Nothing writes to GitHub without your approval.
      </blockquote>

      <h2><span className="hash">##</span> why i built it</h2>
      <p>
        When I started building Milestone, I needed a way to keep the GitHub backlog in sync with a spec that
        was changing fast. Writing release plans and task lists by hand meant the issues always lagged behind
        the actual work. I wanted something that could read what changed since the last run and tell me exactly
        which issues to create, update, or close, without me having to triage it myself. gh-issue-sync is that
        tool, built for Milestone and generalized enough to point at any repo.
      </p>

      <h2><span className="hash">##</span> what it does</h2>
      <p>
        On first run it scans the full codebase and all open issues. Every subsequent run uses git diff to find only
        what changed since the last commit hash, so it&apos;s fast and doesn&apos;t reprocess things it&apos;s already
        seen. Closed issues are indexed by title to prevent duplicate creation. When confidence is below a threshold
        it flags ambiguity rather than guessing.
      </p>
      <p>
        The output surfaces what changed in plain English: spec edits, new stories, removed features, mapped to the
        specific issues they affect. You reply &quot;apply all&quot; or pick individual items. It applies them in
        parallel via the GitHub connector and summarizes what was done.
      </p>

      <h2><span className="hash">##</span> example output</h2>
      <div className="codeblock">
        <span className="cc"># first run: full codebase scan</span>{'\n'}
        <span className="ck">$</span>{' python github_sync.py prepare --cwd /path/to/repo\n\n'}
        <span className="cv">First run - scanning full codebase..{'\n'}
{'Fetching issues from trnle/milestone...\n'}
{'  Open issues: 112  |  Closed issues loaded: 9\n'}
{'\n'}
{'Updated:\n'}
{'  #141 - Corrected T5 filter chips to "All / This week / Overdue / Done"\n'}
{'  #161 - Updated to reflect D6 change: milestone title is now the nav trigger\n'}
{'\n'}
{'Created:\n'}
{'  #164 - D2: "See all" must navigate to Tasks with This Week filter\n'}
{'  #165 - D8: Inline task creation under milestone rows on the dashboard\n'}
{'  #166 - Spec inconsistency: M1 drops helpers card but section 10 still lists it\n'}
{'\n'}
{'Skipped: UPDATE #159 - body already contained constraint from a prior run.'}</span>
      </div>

      <h2><span className="hash">##</span> what is interesting about it</h2>
      <p>
        The trickiest part was the delta logic: deciding what context Claude actually needs on each run without
        sending the entire repo every time. The tool stores the last processed commit hash and builds a focused diff,
        so Claude sees only what changed rather than re-analyzing hundreds of files on every call.
      </p>

      <h2><span className="hash">##</span> built for milestone, works for any repo</h2>
      <p>
        Pass in any GitHub repo path as a flag. The first run against Milestone (112 open issues, 9 closed)
        generated 8 suggestions: 4 updates, 3 creates, and 1 spec inconsistency flag. The approval step means
        you stay in control of what lands in your backlog.
      </p>

      <h2><span className="hash">##</span> modules</h2>
      <table>
        <thead><tr><th>file</th><th>purpose</th></tr></thead>
        <tbody>
          <tr><td>analyzer.py</td><td>reads codebase and spec, builds Claude prompt, parses suggestions and confidence scores</td></tr>
          <tr><td>github_client.py</td><td>GitHub API wrapper for create, update, and close operations</td></tr>
          <tr><td>state.py</td><td>persists last commit hash and closed issue index to prevent duplicates across runs</td></tr>
          <tr><td>github_sync.py</td><td>CLI entrypoint, exposes <code>prepare</code> and <code>sync</code> commands via Click</td></tr>
        </tbody>
      </table>

      <DocFooter
        prev={{ label: 'milestone.md',    path: '/projects/milestone'    }}
        next={{ label: 'radiant.md',      path: '/projects/radiant'      }}
        onNavigate={onNavigate}
      />
    </div>
  )
}
