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
      <p>Check out the full <a href="/Tran_Le_Resume.pdf" target="_blank" rel="noopener noreferrer">resume pdf ↗</a></p>

      <h2><span className="hash">##</span> nordstrom</h2>
     
      <BadgeRow style={{ marginTop: 16 }}>
        <Badge label="role"     value="software engineer 2" />
        <Badge label="timeline" value="2023 - 2025" />
      </BadgeRow>
      
      <ul>
        <li>Led GCP/BigQuery migration as sole engineer on a hard deadline, rearchitected Python/Airflow pipelines with parallelized
          Kubernetes pods, reducing runtime 96% (2 hrs to less than 5 min) for 32GB+ datasets. Designed shadow-run validation strategy ensuring
          zero downtime across 6 mission-critical services.</li>
        <li>Built a real-time financial planning dashboard used for what-if scenario analysis (React, TypeScript, AG Grid, Redux) for 200+
          planners, implementing a calculation engine resolving cascading recalculations across 4–5 layers of metric dependencies
          triggered by single cell edits.</li>
        <li>Served as subject matter expert for the UI supplier profitability dashboard, authored architecture and solution design docs, led
          technical feasibility assessments, and owned on-call rotation for production incidents across the platform.</li>
        <li>Refactored React/Redux state management and AG Grid rendering, profiled render cycles, narrowed component subscriptions
          to consumed state slices, and configured row virtualization, improving frontend performance by 25% across large financial
          datasets.</li>
        <li>Owned end-to-end delivery: created release timelines, wrote hour-by-hour go-live runbooks for production deployments, and
          partnered with PMs on epic scoping, task breakdown, and estimation for prioritized initiatives.</li>
        <li>Built a reusable React/TypeScript component library with WCAG accessibility compliance, standardizing UI patterns across 3
          production apps and cutting feature delivery time by 15%.</li>
        <li>Engineered full-stack observability (Splunk, New Relic, OpenTelemetry) across 3+ production services, established monitoring
          baselines to detect regressions and API bottlenecks before end-user impact.</li>
      </ul>
      <BadgeRow style={{ marginTop: 16 }}>
        <Badge label="role" value="software engineer 1" />
        <Badge label="timeline" value="2021 - 2023" />
      </BadgeRow>
      <ul>
        <li>Re-engineered Excel-based supplier finance workflows into a full-stack web application, owned React/TypeScript frontend,
          PostgreSQL schema design, and REST API contracts, eliminating 700+ hours of annual manual effort for 200+ planners.</li>
        <li>Built the supplier profitability dashboard (React, TypeScript, Material UI) to track financial health metrics and vendor
          expectations, designing the UI/UX before any design system existed.</li>
        <li>Implemented secure role-based access control using React, PostgreSQL, and JWT authentication across internal enterprise
          systems. Deployed automated integration and E2E tests (Jest, Cypress) across 3 platform applications, improving deployment
          confidence and reducing regressions.</li>
        <li>Reduced annual cloud infrastructure costs by $42K through Kubernetes autoscaling right-sizing. Contributed to event-driven
          microservices with Java Spring Boot and Kafka for near real-time vendor data ingestion and reporting.</li>
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
