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
    system: 'GitHub Actions',
    detail: 'Run repeatable quality gates, retain test evidence, and validate the exact release candidate before approval.',
    status: 'IN USE',
  },
  {
    number: '04',
    title: 'Deploy & test',
    system: 'Cloudflare Pages + GitHub Actions',
    detail: 'CI, SIT deployment, Playwright regression against the deployed SIT build, and controlled production release are implemented and have completed successfully end to end. A separate Linux QA host and scheduled JMeter performance testing remain planned.',
    status: 'PARTLY IMPLEMENTED',
  },
]

const qualityGates = [
  {
    label: 'LOCAL',
    title: 'Fast feedback',
    description: 'Type checking, linting, builds and focused component tests run locally and in CI.',
  },
  {
    label: 'CI',
    title: 'Repeatable checks',
    description: 'GitHub Actions runs type checks, linting, production builds, component tests and local Pages Function/D1 integration tests. Docker provides a repeatable Playwright test environment.',
  },
  {
    label: 'SIT',
    title: 'Deployed system regression',
    description: 'Implemented and end-to-end verified: deploy the validated commit to Cloudflare Pages SIT, check the deployed commit identity, and run Playwright regression against that deployed build. Controlled production release follows separate approval.',
  },
  {
    label: 'PERFORMANCE',
    title: 'Load and trend analysis',
    description: 'Planned: scheduled Apache JMeter scenarios, repeatable baselines and retained results, followed by AI-assisted analysis for human review.',
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
          The delivery path is partly implemented and partly planned. The
          application already has working CI, deployed SIT regression and a
          controlled production release. The separate Linux QA host and
          performance-testing layer are the remaining infrastructure goals.
        </p>
      </div>

      <div className="flow-grid" aria-label="Development and delivery flow">
        {stages.map((stage, index) => (
          <article className="flow-card" key={stage.number}>
            <div className="flow-card-top">
              <span className="card-index">{stage.number}</span>
              <span className={`flow-status ${['IN USE', 'PARTLY IMPLEMENTED'].includes(stage.status) ? 'flow-status-active' : ''}`}>
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
            Local development stays quick. CI makes checks repeatable. The SIT
            environment validates the deployed application, not just the
            developer's machine. Production release is a separate approval
            decision, and the complete path has been exercised successfully.
          </p>
        </article>
        <article className="architecture-note">
          <span className="eyebrow">CONTAINERS & PERFORMANCE</span>
          <h3>Extend reproducibility to performance testing.</h3>
          <p>
            Docker is already used in CI to package and run the Playwright
            browser-test environment. A separate Linux QA host, scheduled
            JMeter runs, retained performance results and AI-assisted analysis
            are planned next steps, not yet operational capabilities.
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
