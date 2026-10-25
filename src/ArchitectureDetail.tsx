import './ArchitectureDetail.css'

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
          The core delivery path is implemented and has been exercised end to
          end. The diagram separates automated quality gates from the planned
          Linux QA host and performance-testing extension.
        </p>
      </div>

      <div className="delivery-flow" aria-label="End-to-end delivery flow">
        <div className="delivery-node">
          <span className="delivery-node-number">01 / DEVELOP</span>
          <h3>MacBook Pro + M4 Mac mini</h3>
          <p>VS Code over Remote SSH, edit code, run local checks and build.</p>
          <span className="delivery-state">IN USE</span>
        </div>
        <div className="delivery-arrow" aria-hidden="true">↓</div>
        <div className="delivery-node">
          <span className="delivery-node-number">02 / COMMIT &amp; VERIFY</span>
          <h3>GitHub Actions CI</h3>
          <p>Typecheck · lint · build · component tests · Pages Function/D1 integration · Docker/Playwright.</p>
          <span className="delivery-state">IMPLEMENTED</span>
        </div>

        <div className="delivery-branches">
          <div className="delivery-branch delivery-branch-fail">
            <span className="branch-label">IF CHECKS FAIL</span>
            <h4>Stop and investigate</h4>
            <p>Review the failure, fix the change and run the gates again.</p>
          </div>
          <div className="delivery-branch delivery-branch-pass">
            <span className="branch-label">IF CHECKS PASS</span>
            <h4>Deploy the validated commit</h4>
            <p>Continue to the dedicated Cloudflare Pages SIT environment.</p>
          </div>
        </div>

        <div className="delivery-arrow" aria-hidden="true">↓</div>
        <div className="delivery-node">
          <span className="delivery-node-number">03 / SIT REGRESSION</span>
          <h3>Verify the deployed build</h3>
          <p>Check the deployed commit SHA, then run Playwright regression against the deployed SIT site.</p>
          <span className="delivery-state">IMPLEMENTED &amp; VERIFIED</span>
        </div>
        <div className="delivery-arrow" aria-hidden="true">↓</div>
        <div className="delivery-node delivery-node-release">
          <span className="delivery-node-number">04 / RELEASE</span>
          <h3>Controlled production deployment</h3>
          <p>Separate approval gate before releasing the validated version to production.</p>
          <span className="delivery-state">IMPLEMENTED</span>
        </div>

        <div className="delivery-future">
          <div className="future-heading">
            <span className="branch-label">PLANNED EXTENSION</span>
            <h3>Expand the QA capability</h3>
          </div>
          <div className="future-items">
            <div><strong>Linux QA host</strong><span>Separate execution environment</span></div>
            <div><strong>Apache JMeter</strong><span>Scheduled load tests and baselines</span></div>
            <div><strong>AI-assisted analysis</strong><span>Interpret results for human review</span></div>
          </div>
        </div>
      </div>

      <div className="architecture-support-grid">
        <article className="architecture-note">
          <span className="eyebrow">ENVIRONMENT STRATEGY</span>
          <h3>Keep environments purposeful.</h3>
          <p>
            Local development stays quick. CI makes checks repeatable. SIT
            validates the deployed application, not just the developer's
            machine. Production release remains a separate approval decision.
          </p>
        </article>
        <article className="architecture-note">
          <span className="eyebrow">CONTAINERS &amp; PERFORMANCE</span>
          <h3>Build on the existing Docker workflow.</h3>
          <p>
            Docker is already used in CI to package and run the Playwright
            browser-test environment. The separate Linux QA host, scheduled
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
