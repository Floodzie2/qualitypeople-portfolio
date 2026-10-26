import './ArchitectureDiagrams.css'

function DiagramNode({ eyebrow, title, detail, status }: { eyebrow: string; title: string; detail: string; status?: 'implemented' | 'planned' }) {
  return (
    <div className="diagram-node">
      <span className="diagram-node-eyebrow">{eyebrow}</span>
      <strong>{title}</strong>
      <p>{detail}</p>
      {status && <span className={`diagram-status diagram-status-${status}`}>{status === 'implemented' ? 'IN PLACE' : 'PLANNED'}</span>}
    </div>
  )
}

function DiagramArrow({ label }: { label?: string }) {
  return <div className="diagram-arrow" aria-hidden="true"><span>↓</span>{label && <small>{label}</small>}</div>
}

export function ArchitectureDiagrams() {
  return (
    <section className="content-section architecture-diagrams-section" id="architecture-diagrams">
      <div className="section-heading">
        <div>
          <span className="eyebrow">02 / SYSTEM BLUEPRINTS</span>
          <h2>Small application. Enterprise-minded engineering.</h2>
        </div>
        <p>
          The application is deliberately small; the architecture demonstrates patterns that
          scale to larger products: separation of concerns, isolated environments, repeatable
          delivery, observable evidence and independent quality gates.
        </p>
      </div>

      <article className="blueprint-card">
        <div className="blueprint-heading">
          <div>
            <span className="panel-kicker">BLUEPRINT A · PLATFORM ARCHITECTURE</span>
            <h3>Distributed development and cloud runtime</h3>
          </div>
          <span className="blueprint-index">A / 01</span>
        </div>

        <div className="blueprint-lane">
          <div className="blueprint-lane-label"><span>01</span><strong>ENGINEERING WORKSTATIONS</strong></div>
          <div className="diagram-node-grid diagram-node-grid-two">
            <DiagramNode eyebrow="DEVELOPMENT CLIENT" title="MacBook Pro" detail="VS Code · Remote SSH · edit, inspect and commit code" status="implemented" />
            <DiagramNode eyebrow="DEV & ORCHESTRATION" title="M4 Mac mini" detail="Git · Node.js · TypeScript · local build and test runs" status="implemented" />
          </div>
        </div>

        <div className="blueprint-lane blueprint-ai-lane">
          <div className="blueprint-lane-label"><span>AI</span><strong>LOCAL AI CAPABILITY</strong></div>
          <div className="diagram-node-grid">
            <DiagramNode eyebrow="LOCAL MODEL RUNTIME · M4 MAC MINI" title="Ollama" detail="Available locally and used to support development work. Intended next use: analyse JMeter results and performance trends without making the hosted application depend on a remote AI service." status="implemented" />
          </div>
          <p className="blueprint-ai-caption">Development use: in place · Performance-result analysis: planned</p>
        </div>

        <DiagramArrow label="Git branches · pull requests · reviewed changes" />

        <div className="blueprint-lane">
          <div className="blueprint-lane-label"><span>02</span><strong>VERSION CONTROL & AUTOMATION</strong></div>
          <div className="diagram-node-grid diagram-node-grid-two">
            <DiagramNode eyebrow="SOURCE REPOSITORIES" title="Application + portfolio" detail="Separate GitHub repositories, histories and release lifecycles" status="implemented" />
            <DiagramNode eyebrow="CONTINUOUS INTEGRATION" title="GitHub Actions" detail="Typecheck · lint · build · unit/integration tests · Docker/Playwright · JMeter smoke gate" status="implemented" />
          </div>
        </div>

        <DiagramArrow label="Validated commits deploy independently" />

        <div className="blueprint-lane">
          <div className="blueprint-lane-label"><span>03</span><strong>CLOUDFLARE EDGE & ENVIRONMENTS</strong></div>
          <div className="diagram-node-grid diagram-node-grid-two">
            <DiagramNode eyebrow="APPLICATION" title="Cloudflare Pages · SIT" detail="Static React/Vite frontend plus Pages Functions API; deployed version identity is checked by automation" status="implemented" />
            <DiagramNode eyebrow="PORTFOLIO" title="Cloudflare Pages · portfolio" detail="Independent deployment for architecture, QA evidence and project narrative" status="implemented" />
          </div>
        </div>

        <div className="blueprint-runtime">
          <div className="blueprint-lane-label"><span>04</span><strong>APPLICATION REQUEST PATH</strong></div>
          <div className="runtime-flow">
            <DiagramNode eyebrow="USER" title="Browser" detail="Browse the site and submit an enquiry" />
            <span className="runtime-arrow" aria-hidden="true">→</span>
            <DiagramNode eyebrow="EDGE DELIVERY" title="Pages frontend" detail="React/Vite assets served by Cloudflare" />
            <span className="runtime-arrow" aria-hidden="true">→</span>
            <DiagramNode eyebrow="SERVERLESS API" title="Pages Functions" detail="Validate and process API requests" />
            <span className="runtime-arrow" aria-hidden="true">→</span>
            <DiagramNode eyebrow="PERSISTENCE" title="Cloudflare D1" detail="SQLite-backed enquiry data" />
          </div>
        </div>

        <div className="blueprint-note">
          <strong>Design principle</strong>
          <p>Source control, CI, hosting, API execution and persistence are separate responsibilities. The deployment path is automated, while the production release remains a distinct controlled step.</p>
        </div>
      </article>

      <article className="blueprint-card qa-blueprint-card">
        <div className="blueprint-heading">
          <div>
            <span className="panel-kicker">BLUEPRINT B · QUALITY ENGINEERING ARCHITECTURE</span>
            <h3>Layered evidence, from code change to release decision</h3>
          </div>
          <span className="blueprint-index">B / 02</span>
        </div>

        <div className="qa-flow">
          <div className="qa-stage qa-stage-dev">
            <span className="qa-stage-number">01</span>
            <div><span className="diagram-node-eyebrow">LOCAL FEEDBACK</span><strong>Developer checks</strong><p>TypeScript typecheck · lint · component/unit tests · local build</p></div>
            <span className="diagram-status diagram-status-implemented">IN PLACE</span>
          </div>
          <DiagramArrow label="Push branch · open pull request" />
          <div className="qa-stage qa-stage-ci">
            <span className="qa-stage-number">02</span>
            <div><span className="diagram-node-eyebrow">CI QUALITY GATES</span><strong>GitHub Actions</strong><p>Build and unit tests · Pages Function/D1 integration · Dockerised Playwright E2E · JMeter smoke test · retain test evidence</p></div>
            <span className="diagram-status diagram-status-implemented">IN PLACE</span>
          </div>
          <div className="qa-outcomes">
            <div className="qa-outcome qa-outcome-fail"><strong>Any required gate fails</strong><p>Stop, inspect logs and evidence, fix the change, then rerun.</p></div>
            <div className="qa-outcome qa-outcome-pass"><strong>Required gates pass</strong><p>Review the change and merge the pull request.</p></div>
          </div>
          <DiagramArrow label="Merge and deploy to the dedicated SIT environment" />
          <div className="qa-stage qa-stage-sit">
            <span className="qa-stage-number">03</span>
            <div><span className="diagram-node-eyebrow">DEPLOYED-SYSTEM REGRESSION</span><strong>SIT API + Playwright</strong><p>Verify the deployed commit identity; run API regression and browser journeys against the deployed application.</p></div>
            <span className="diagram-status diagram-status-implemented">IN PLACE</span>
          </div>
          <DiagramArrow label="Review evidence and resolve release-blocking defects" />
          <div className="qa-stage qa-stage-human">
            <span className="qa-stage-number">04</span>
            <div><span className="diagram-node-eyebrow">HUMAN QUALITY GATE</span><strong>Manual exploratory and acceptance testing</strong><p>Use the SIT checklist to explore usability, realistic journeys, edge cases and failure handling; record actual results and evidence.</p></div>
            <span className="diagram-status diagram-status-implemented">CHECKLIST AVAILABLE</span>
          </div>
          <DiagramArrow label="Candidate validation + separate release approval" />
          <div className="qa-stage qa-stage-release">
            <span className="qa-stage-number">05</span>
            <div><span className="diagram-node-eyebrow">CONTROLLED RELEASE</span><strong>Production candidate validation</strong><p>Validate the full commit SHA, successful CI and matching preview evidence before the separately controlled production deployment.</p></div>
            <span className="diagram-status diagram-status-implemented">VALIDATION WORKFLOW</span>
          </div>
        </div>

        <div className="qa-support-grid">
          <div className="qa-support-card">
            <span className="diagram-node-eyebrow">PERFORMANCE TESTING</span>
            <strong>Smoke now · load later</strong>
            <p>The CI JMeter test checks ten read-only version endpoint requests. Ollama is already installed on the M4 and used for development; using it to interpret JMeter results and compare performance trends is the next planned step. Scheduled load profiles and trend history are also planned.</p>
            <span className="diagram-status diagram-status-implemented">JMeter SMOKE + LOCAL OLLAMA</span>
            <span className="diagram-status diagram-status-planned">LOAD + AI ANALYSIS PLANNED</span>
          </div>
          <div className="qa-support-card">
            <span className="diagram-node-eyebrow">ENVIRONMENT ISOLATION</span>
            <strong>Repeatable execution</strong>
            <p>Docker already provides a repeatable Playwright browser-test environment in CI. A separate Linux QA host is a future extension.</p>
            <span className="diagram-status diagram-status-implemented">DOCKER IN CI</span>
            <span className="diagram-status diagram-status-planned">LINUX HOST PLANNED</span>
          </div>
          <div className="qa-support-card">
            <span className="diagram-node-eyebrow">AI QUALITY</span>
            <strong>Evaluate, don’t assume</strong>
            <p>A protected evaluation harness checks synthetic enquiry cases against expected outputs and records model behaviour separately from deterministic safeguards.</p>
            <span className="diagram-status diagram-status-implemented">EVALUATION HARNESS</span>
          </div>
        </div>
      </article>

      <p className="blueprint-disclaimer">Architecture diagrams distinguish implemented capabilities from planned extensions. They describe this portfolio's current design and intended delivery controls, not a claim that every future component is already running.</p>
    </section>
  )
}
