import type { FilePath } from './PortfolioApp'
import Breadcrumb from '../components/Breadcrumb'
import DocFooter  from '../components/DocFooter'
import { Badge, BadgeRow } from '../components/Badge'

interface Props { onNavigate: (p: FilePath) => void }

export default function ExperienceView({ onNavigate }: Props) {
  return (
    <div className="md-doc">
      <Breadcrumb
        segments={[{ label: 'trnle', path: '/' }, { label: 'experience.md' }]}
        onNavigate={onNavigate}
      />

      <h1><span className="hash">#</span> experience</h1>
      <p>Check out the <a href="/Tran_Le_Resume.pdf" target="_blank" rel="noopener noreferrer">resume pdf ↗</a></p>

      <h2><span className="hash">##</span> nordstrom</h2>

      <BadgeRow style={{ marginTop: 16 }}>
        <Badge label="role"     value="software engineer 2" />
        <Badge label="timeline" value="2023 - 2025" />
      </BadgeRow>
      <blockquote>Part of the Merchandise Planning engineering team, serving data to downstream consumers such as financial planners to run
        supplier scenarios, track vendor performance, and manage financial expectations across Nordstrom's retail operation. Over two years
        as a SWE II, I grew from shipping features into owning delivery end-to-end: architecture docs, go-live runbooks, on-call rotations,
        and cross-functional partnerships with PMs and designers. The work that defined this period was a high-stakes GCP migration and building 
        an operational datastore for ingress data from a third-party inventory platform.</blockquote>
      <ul>
        <li>Led GCP/BigQuery migration as sole engineer on a hard deadline, rearchitecting Python/Airflow pipelines with parallelized Kubernetes pods, reducing runtime 96% (2 hrs to under 5 min) for 32GB+ datasets while maintaining zero downtime.</li>
          <ul>
            <li>
              The real challenge wasn't the technical migration, it was doing it safely. Nordstrom's Teradata environment was being deprecated
              with a fixed cutover date, and downstream consumers depended on these pipelines running correctly every day. I ran the new BigQuery
              pipelines in parallel with the existing Teradata/AWS jobs, comparing outputs before any cutover. I used AI tooling to translate 100+
              SQL queries accurately under deadline, validating every output rather than trusting blindly. Keeping planners and stakeholders
              informed throughout became the basis for the Customer Obsessed award I received that year.
            </li>
          </ul>
        <li>Architected a plan-agnostic data ingestion system for Toolio integration, designing a reusable Airflow DAG template that standardized incremental plan file ingestion, read/write orchestration, and plan-specific transformation triggering across plan types, enabling new plan types to be onboarded without rebuilding pipeline logic from scratch; supporting daily financial planning workflows across the merchandising org.</li>
        <li>Owned stakeholder communication across the GCP migration for 5 product owners, building and maintaining a risk and timeline tracker, running cadenced standups, and proactively surfacing  upstream blockers to keep delivery on track.</li>
        <li>Led interactive architecture review sessions for operational datastore before presenting to the broader merchandising org; broke down PdM epics into estimated engineering stories and release documentation.</li>
        <li>Built Cypress E2E test suite covering complete planning workflows (data selection, live recalculations), validating client-side business logic and frontend/backend data parity; caught a precision bug (2 vs 4 decimal places in financial calculations).</li>
      </ul>

      <BadgeRow style={{ marginTop: 32 }}>
        <Badge label="role" value="software engineer 1" />
        <Badge label="timeline" value="2021 - 2023" />
      </BadgeRow>
      <blockquote>My first two years at Nordstrom were spent building the Merchandise Planning financial planning tools from
        scratch. There was no design system, no existing frontend patterns, no prior web app for the team, just Excel workflows that planners had used
        for years and a mandate to replace them. I owned the full stack on both major projects: wireframes, schema design, API contracts,
        frontend implementation, and deployment. It's where I developed my instinct for working backwards from the user and my comfort
        with ownership.</blockquote>
      <ul>
        <li>Re-engineered Excel-based supplier finance workflows into a full-stack web application, owned React/TypeScript frontend, PostgreSQL schema design, and REST API contracts, eliminating 700+ hours of annual manual effort for 200+ planners.</li>
        <li>Identified upstream data warehouse SLA failures as the cause of stale planning data and shipped a data freshness timestamp indicator, giving planners clear visibility into data recency before committing to financial decisions.</li>
        <li>Built a full-stack supplier scenario planning application implementing a client-side calculation engine that handled cascading recalculations across 4-5 layers of metric dependencies per cell edit, enabling planners to model monthly scenarios and shift supplier negotiations from reactive year-end review to ongoing data-driven planning.</li>
        <li>Sole engineer on saved views feature for supplier planning applications, encoding planner form selections (year, department, supplier) as URL state for bookmarkable and refresh-safe views, with same-day staleness detection against the backend in-memory plan cache to determine whether a fresh fetch was needed, eliminating repeated manual form entry for frequently accessed planning views.</li>
        <li>Migrated manually configured AWS resources (S3 buckets, IAM roles, and access policies) into Terraform for version-controlled infrastructure in GitLab, reducing misconfiguration risk and standardizing provisioning across dev and production environments.</li>
        <li>Reduced annual cloud infrastructure costs by $42K by analyzing Kubernetes resource utilization across 8+ services in New Relic, right-sizing CPU/memory allocations and configuring HPA thresholds</li>
        <li>Participated in Kafka topic design reviews, ensuring standardized topic contracts for downstream financial planning data consumers.</li>
      </ul>
      <h2><span className="hash">##</span> recognition</h2>
      <BadgeRow style={{ marginTop: 16 }}>
        <Badge label="award" value='nordstrom "customer obsessed" award' />
        <Badge label="timeline" value="2025" />
      </BadgeRow>
      <ul>
        <li>Recognized for GCP/BigQuery migration leadership and cross-functional stakeholder communication across the Merchandising org.</li>
      </ul>
      <h2><span className="hash">##</span> app academy</h2>
      <BadgeRow style={{ marginTop: 16 }}>
        <Badge label="certificate" value="full stack software engineer" />
        <Badge label="timeline" value="2021" />
      </BadgeRow>
      <ul>
        <li>24-week intensive bootcamp. Python, JavaScript, React, Flask, PostgreSQL, systems design.</li>
        <li>4 full-stack projects from scratch.</li>
      </ul>
      <h2><span className="hash">##</span> ut austin</h2>
      <BadgeRow style={{ marginTop: 16 }}>
        <Badge label="degree" value="b.s.a. in biology" />
        <Badge label="timeline" value="2016 - 2020" />
      </BadgeRow>
      <ul>
        <li>Pre-dental and discovered software engineering along the way. Hook &apos;em 🤘🏽</li>
      </ul>

      <DocFooter
        prev={{ label: 'radiant.md', path: '/projects/radiant' }}
        next={{ label: 'README.md',  path: '/' }}
        onNavigate={onNavigate}
      />
    </div>
  )
}
