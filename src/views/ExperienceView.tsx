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
        <li>Led GCP/BigQuery migration as sole engineer on a hard deadline, rearchitected Python/Airflow pipelines with parallelized
          Kubernetes pods, reducing runtime 96% (2 hrs to less than 5 min) for 32GB+ datasets.</li>
          <ul>
            <li>
              The real challenge wasn't the technical migration, it was doing it safely. Nordstrom's Teradata environment was being deprecated
              with a fixed cutover date, and downstream consumers depended on these pipelines running correctly every day. I ran the new BigQuery
              pipelines in parallel with the existing Teradata/AWS jobs, comparing outputs before any cutover. I used AI tooling to translate 100+
              SQL queries accurately under deadline, validating every output rather than trusting blindly. Keeping planners and stakeholders
              informed throughout became the basis for the Customer Obsessed award I received that year.
            </li>
          </ul>
        <li>Designed backend orchestration workflows (Python, Airflow) for a new operational datastore, defining database schemas and
          contracts to support high-throughput daily data ingestion from third-party inventory platform (Toolio).</li>
        <li>Served as lead engineer for the UI planning dashboard suite, authored architecture and solution design docs, led technical
          feasibility assessments, owned on-call rotation (PagerDuty), and deployed E2E test suites (Jest, Cypress) to improve deployment
          confidence across the platform.</li>
        <li>Owned end-to-end delivery: created release timelines, wrote hour-by-hour go-live runbooks for production deployments, and
          partnered with PMs on epic scoping, task breakdown, and estimation for prioritized initiatives.</li>
        <li>Engineered full-stack observability (Splunk, New Relic, OpenTelemetry) across 3+ production services, established monitoring
          baselines to detect regressions and API bottlenecks before end-user impact.</li>
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
        <li>Re-engineered Excel-based supplier finance workflows into a full-stack web application — owned React/TypeScript frontend,
          PostgreSQL schema design, and REST API contracts, eliminating 700+ hours of annual manual effort for 200+ planners.</li>
        <li>Built the supplier profitability dashboard (React, TypeScript, Material UI) to track financial health metrics and vendor
          expectations, designing the UI/UX before any design system existed.</li>
        <li>Collaborated on IaC adoption using Terraform, owning S3 bucket configurations, IAM roles, and access policies for production services.</li>
        <li>Implemented secure role-based access control using React, PostgreSQL, and JWT authentication across planning dashboards.</li>
        <li>Reduced annual cloud infrastructure costs by $42K through Kubernetes autoscaling right-sizing. Contributed to event-driven
          microservices with Java Spring Boot and Kafka for near real-time vendor data ingestion and reporting.</li>
        <li>Contributed to architecture decisions, provided estimates for prioritized epics, and grew into end-to-end delivery ownership.</li>
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
