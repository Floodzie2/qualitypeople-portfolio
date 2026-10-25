import './ArchitectureDetail.css'

const stages = [
  {
    number: '01',
    title: 'Develop',
    system: 'MacBook Pro',
    detail: 'Edit in VS Code over Remote SSH. The laptop is the interface; the M4 does the project work.',
    status: 'IN USE',
  },
  {
    number: '02',
    title: 'Build & verify',
    system: 'M4 Mac mini',
    detail: 'Run Node.js, TypeScript, local checks and builds in the project workspace.',
    status: 'IN USE',
  },
  {
    number: '03',
    title: 'Version & gate',
    system: 'GitHub',
    detail: 'Keep changes reviewable and use repeatable workflow checks before a release is approved.',
    status: 'IN PROGRESS',
  },
  {
    number: '04',
    title: 'Deploy & test',
    system: 'Cloudflare + Linux QA',
    detail: 'Target flow: deploy a validated build to a test environment, then run API, browser and performance regression.',
    status: 'PLANNED',
  },
]

const qualityGates = [
  {
    label: 'LOCAL',
    title: 'Fast feedback',
    description: 'Type checking, linting and focused component or unit tests while developing.',
  },
  {
    label: 'CI',
    title: 'Repeatable checks',
    description: 'Run the agreed quality gates on changes and retain results as evidence.',
  },
  {
    label: 'SIT',
    title: 'System regression',
    description: 'Target: API and Playwright end-to-end tests, test data, and manual exploratory acceptance.',
  },
  {
    label: 'NIGHTLY',
    title: 'Performance trend',
    description: 'Target: scheduled Apache JMeter runs, with AI helping summarise results for human review.',
  },
]

export function ArchitectureDetail() {
  return (
    <section className="architecture-detail-section" id="architecture-flow">
      <div className="section-heading">
        <div>
          <span className="eyebrow">01A / HOW THE PARTS WORK TOGETHER</span>
          <h2>From a code change to test evidence.</h2>
        </div>
        <p>
          The design separates the workstation, build capability, source control,
          deployment and QA responsibilities. Some steps are already in use;
          others are the target architecture, not claims of completed delivery.
        </p>
      </div>

      <div className="flow-grid" aria-label="Target development and delivery flow">
        {stages.map((stage, index) => (
          <article className="flow-card" key={stage.number}>
            <div className="flow-card-top">
              <span className="card-index">{stage.number}</span>
              <span className={`flow-status ${stage.status === 'IN USE' ? 'flow-status-active' : ''}`}>
                {stage.status}
              </span>
            </div>
            <span className="flow-stage">{stage.title}</span>
            <h3>{stage.system}</h3>
            <p>{stage.detail}</p>
            {index < stages.length - 1 && (
              <span className="flow-connector" aria-hidden="true">→</span>
            )}
          </article>
        ))}
      </div>

      <div className="architecture-support-grid">
        <article className="architecture-note">
          <span className="eyebrow">ENVIRONMENT STRATEGY</span>
          <h3>Keep environments purposeful.</h3>
          <p>
            Local development should stay quick. CI should make checks repeatable.
            A System Integration Testing (SIT) environment should validate the
            deployed application, not just the developer's machine. Production
            release remains a separate approval decision.
          </p>
        </article>
        <article className="architecture-note">
          <span className="eyebrow">CONTAINERS & PERFORMANCE</span>
          <h3>Make QA reproducible.</h3>
          <p>
            The planned Linux QA host can run containerised services and test
            tooling without loading every workload onto the 16 GB M4. Docker
            containers, JMeter schedules and retained result files will be added
            incrementally and labelled clearly as they become real.
          </p>
        </article>
      </div>

      <div className="quality-gates">
        <div className="quality-gates-heading">
          <span className="eyebrow">QUALITY GATES</span>
          <h3>Different checks at different stages.</h3>
        </div>
        <div className="quality-gates-grid">
          {qualityGates.map((gate) => (
            <article className="quality-gate" key={gate.label}>
              <span className="gate-label">{gate.label}</span>
              <h4>{gate.title}</h4>
              <p>{gate.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
