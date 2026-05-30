import type { FilePath } from './PortfolioApp'
import { Badge, BadgeRow, PulseDot } from '../components/Badge'
import FeaturedProjects from '../components/FeaturedProjects'
import TechStack       from '../components/TechStack'
import ExperienceList  from '../components/ExperienceList'
import NowSection      from '../components/NowSection'
import OfflineSection  from '../components/OfflineSection'
import ContactSection  from '../components/ContactSection'

interface Props { onNavigate: (p: FilePath) => void }

export default function ReadmeView({ onNavigate }: Props) {
  return (
    <div className="md-doc">
      <div className="breadcrumb">
        <span>trnle</span><span className="sep">/</span><strong>README.md</strong>
      </div>

      <BadgeRow>
        <Badge label="role"        value="full-stack engineer" />
        <Badge label="status"      value={<><PulseDot />open to chat</>} tone="green" />
        <Badge label="based"       value="seattle, WA" />
        <Badge label="stack"       value="ts · react · node · python" tone="yellow" />
        <Badge label="last commit" value="5/28/26" />
      </BadgeRow>

      <h1><span className="hash">#</span> tran le</h1>
      <span className="lead">
        building at the intersection of AI and user-facing products · based in the pnw 🌲
      </span>

      {/* TOC */}
      <div className="toc-box">
        <strong>table of contents</strong>
        <ol>
          <li><a href="#about">about</a></li>
          <li><a href="#projects">featured projects</a></li>
          <li><a href="#stack">tech stack</a></li>
          <li><a href="#experience">experience</a></li>
          <li><a href="#now">now</a></li>
          <li><a href="#offline">offline</a></li>
          <li><a href="#contact">contact</a></li>
        </ol>
      </div>

      <h2 id="about"><span className="hash">##</span> about</h2>
      <p>
        Hi! I&apos;m a full-stack engineer who enjoys many aspects from wireframes and design to schemas, pipelines,
        and the infrastructure underneath it all. I like that you can go from a fuzzy idea to a working product, and I&apos;m comfortable owning
        the whole loop.</p>
      <br/>
      <p>
        My background is in building internal data tools. I've worked on the frontend (React, TypeScript, AG Grid, design systems) 
        and the backend and infrastructure layer (Python, GCP, BigQuery, Kubernetes, Airflow).</p>

      <FeaturedProjects onNavigate={onNavigate} />
      <TechStack />
      <ExperienceList onNavigate={onNavigate} />
      <NowSection />
      <OfflineSection />
      <ContactSection />

      <div className="doc-footer">
        <span>deployed on github pages · <a href="https://github.com/trnle" target="_blank" rel="noopener noreferrer">view source ↗</a> · last commit: 5/28/26 · made with care by tran 🐝 · 2026</span>
      </div>
    </div>
  )
}
