
import './App.css'
import { ArchitectureDetail } from './ArchitectureDetail'
import { ManualTestingChecklist } from './ManualTestingChecklist'

const capabilities = [
  {
    number: '01',
    title: 'Quality engineering',
    description:
      'Build a reliable testing approach spanning browser automation, API validation, test data and regression.',
    technologies: ['Playwright', 'TypeScript', 'API testing'],
  },
  {
    number: '02',
    title: 'Distributed infrastructure',
    description:
      'Explore how development, build, test and delivery responsibilities can be separated across machines and environments.',
    technologies: ['macOS', 'Linux', 'Docker'],
  },
  {
    number: '03',
    title: 'Performance engineering',
    description:
      'Develop repeatable performance tests and investigate how AI can help interpret load-test results.',
    technologies: ['Apache JMeter', 'CI pipelines', 'AI analysis'],
  },
  {
    number: '04',
    title: 'AI-assisted engineering',
    description:
      'Use AI to support implementation and testing, then evaluate its output rather than trusting it blindly.',
    technologies: ['AI tooling', 'Test evaluation', 'Evidence'],
  },
]

const systems = [
  {
    name: 'Development',
    device: 'MacBook Pro',
    detail: 'VS Code · Remote workflow',
    status: 'IN USE',
  },
  {
    name: 'Build & orchestration',
    device: 'M4 Mac mini',
    detail: 'Git · Node.js · TypeScript',
    status: 'IN USE',
  },
  {
    name: 'QA environment',
    device: 'Linux machine',
    detail: 'Docker · Automated testing',
    status: 'PLANNED',
  },
  {
    name: 'Delivery',
    device: 'GitHub & Cloudflare',
    detail: 'Version control · Deployment',
    status: 'IN USE',
  },
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="QualityPeople home">
          <span className="brand-mark">Q</span>
          <span>
            QUALITY<span className="brand-light">PEOPLE</span>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#architecture">Architecture</a>
          <a href="#engineering">Engineering</a>
          <a href="#manual-sit">Manual SIT</a>
          <a href="#delivery">Deployment</a>
          <a href="#ai-evaluation">AI evaluation</a>
          <a href="#approach">AI &amp; approach</a>
        </nav>

        <a
          className="header-link"
          href="https://github.com/Floodzie2/qualitypeople-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              A PRACTICAL ENGINEERING PORTFOLIO
            </div>

            <h1>
              Building quality in.
              <br />
              <span>Proving it.</span>
            </h1>

            <p className="hero-description">
              Exploring modern software delivery through distributed
              development, automated quality engineering, performance testing
              and AI-assisted workflows.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#architecture">
                Explore the architecture <span aria-hidden="true">↓</span>
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/Floodzie2/qualitypeople-portfolio"
                target="_blank"
                rel="noreferrer"
              >
                Explore the code <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="hero-footnote">
              <span>LEARN BY BUILDING</span>
              <span className="footnote-divider" />
              <span>TEST WITH EVIDENCE</span>
              <span className="footnote-divider" />
              <span>IMPROVE CONTINUOUSLY</span>
            </div>
          </div>

          <div className="architecture-preview" aria-label="Engineering system overview">
            <div className="preview-heading">
              <div>
                <span className="panel-kicker">SYSTEM OVERVIEW</span>
                <h2>A distributed approach</h2>
              </div>
              <span className="live-indicator">PROJECT MAP</span>
            </div>

            <div className="system-list">
              {systems.map((system, index) => (
                <div className="system-row" key={system.name}>
                  <div className="system-icon" aria-hidden="true">
                    {['⌘', '▣', '⬡', '☁'][index]}
                  </div>
                  <div className="system-copy">
                    <span className="system-name">{system.name}</span>
                    <strong>{system.device}</strong>
                    <span className="system-detail">{system.detail}</span>
                  </div>
                  <span
                    className={`system-status ${
                      system.status === 'IN USE'
                        ? 'status-active'
                        : 'status-planned'
                    }`}
                  >
                    {system.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="preview-footer">
              <span className="connection-line" />
              <span>Connected through code, tests and delivery pipelines</span>
            </div>
          </div>
        </section>

        <section className="metrics-strip" aria-label="Engineering principles">
          <div>
            <span className="metric-number">01</span>
            <span className="metric-label">BUILD IN SMALL STEPS</span>
          </div>
          <div>
            <span className="metric-number">02</span>
            <span className="metric-label">AUTOMATE THE REPEATABLE</span>
          </div>
          <div>
            <span className="metric-number">03</span>
            <span className="metric-label">VALIDATE BEFORE RELEASE</span>
          </div>
          <div>
            <span className="metric-number">04</span>
            <span className="metric-label">EVALUATE AI WITH EVIDENCE</span>
          </div>
        </section>

        <section className="content-section" id="architecture">
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / THE PLATFORM</span>
              <h2>One project. Multiple environments.</h2>
            </div>
            <p>
              A closer look at the machines, tools and delivery practices
              behind the application — including the parts still being built.
            </p>
          </div>

          <div className="architecture-cards">
            {systems.map((system, index) => (
              <article className="architecture-card" key={system.name}>
                <div className="card-topline">
                  <span className="card-index">0{index + 1}</span>
                  <span
                    className={`system-status ${
                      system.status === 'IN USE'
                        ? 'status-active'
                        : 'status-planned'
                    }`}
                  >
                    {system.status}
                  </span>
                </div>
                <h3>{system.name}</h3>
                <p className="card-device">{system.device}</p>
                <p className="card-description">{system.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <ArchitectureDetail />
        <ManualTestingChecklist />

        <section className="content-section" id="delivery">
          <div className="section-heading">
            <div>
              <span className="eyebrow">02 / DEPLOYMENT</span>
              <h2>Two projects. Two live destinations.</h2>
            </div>
            <p>
              The application and this portfolio are deployed independently
              from separate GitHub repositories to Cloudflare Pages. Custom
              domains use CNAME records managed through MyHost DNS, keeping
              the existing email configuration in place.
            </p>
          </div>

          <div className="architecture-cards">
            <article className="architecture-card">
              <div className="card-topline">
                <span className="card-index">01</span>
                <span className="system-status status-active">LIVE · HTTPS</span>
              </div>
              <h3>QualityPeople application</h3>
              <p className="card-device">qualitypeople-app</p>
              <p className="card-description">
                <a href="https://www.qualitypeople.ie" target="_blank" rel="noreferrer">
                  www.qualitypeople.ie ↗
                </a>
                <br />
                GitHub source → Cloudflare Pages deployment
              </p>
            </article>
            <article className="architecture-card">
              <div className="card-topline">
                <span className="card-index">02</span>
                <span className="system-status status-active">LIVE · HTTPS</span>
              </div>
              <h3>Engineering portfolio</h3>
              <p className="card-device">qualitypeople-portfolio</p>
              <p className="card-description">
                <a href="https://www.howibuilt.qualitypeople.ie" target="_blank" rel="noreferrer">
                  www.howibuilt.qualitypeople.ie ↗
                </a>
                <br />
                Separate GitHub source → separate Cloudflare Pages deployment
              </p>
            </article>
          </div>
          <p>
            <strong>Deployment is more than publishing a website.</strong> The
            application repository also defines a CI-to-SIT delivery path:
            successful CI commits are deployed to a dedicated Cloudflare Pages
            SIT project, and the deployed build is checked against the expected
            commit SHA.
          </p>

          <div className="architecture-cards">
            <article className="architecture-card">
              <div className="card-topline">
                <span className="card-index">03</span>
                <span className="system-status status-active">IMPLEMENTED</span>
              </div>
              <h3>Automated quality gates</h3>
              <p className="card-description">
                GitHub Actions runs type checks, linting, builds, component
                tests and local Pages Function/D1 integration tests. Docker
                packages the Playwright test environment for repeatable E2E runs.
              </p>
            </article>
            <article className="architecture-card">
              <div className="card-topline">
                <span className="card-index">04</span>
                <span className="system-status status-active">END-TO-END VERIFIED</span>
              </div>
              <h3>Release candidate validation</h3>
              <p className="card-description">
                The controlled release workflow validates the exact candidate
                against successful CI and matching deployed-SIT regression
                evidence, requires explicit production confirmation, and
                deploys the approved commit. The full path has now completed
                successfully in GitHub Actions.
              </p>
            </article>
          </div>
          <p>
            <strong>Verified end to end:</strong> on 25 October 2026, CI,
            SIT deployment, Playwright regression against the matching deployed
            preview, and controlled production deployment all succeeded for
            commit <code>3892d2882d7e9c3dc12f6d301bcd1a68c82b6660</code>.
            The production workflow's three jobs — explicit release approval,
            exact-candidate validation, and deployment — all passed. This is
            evidence from actual runs, not just workflow configuration.
            <a href="https://github.com/Floodzie2/qualitypeople-app/actions/runs/40192743234" target="_blank" rel="noreferrer"> CI</a>
            {' · '}
            <a href="https://github.com/Floodzie2/qualitypeople-app/actions/runs/40192889307" target="_blank" rel="noreferrer"> SIT</a>
            {' · '}
            <a href="https://github.com/Floodzie2/qualitypeople-app/actions/runs/40192935797" target="_blank" rel="noreferrer"> deployed Playwright</a>
            {' · '}
            <a href="https://github.com/Floodzie2/qualitypeople-app/actions/runs/40193089925" target="_blank" rel="noreferrer"> production release</a>.
          </p>
        </section>

        <section className="content-section engineering-section" id="engineering">
          <div className="section-heading">
            <div>
              <span className="eyebrow">03 / QUALITY ENGINEERING</span>
              <h2>Quality is built into the workflow.</h2>
            </div>
            <p>
              From fast feedback during development to regression and
              performance checks, each layer has a job to do.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.number}>
                <span className="card-index">{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className="tag-list">
                  {capability.technologies.map((technology) => (
                    <span className="tech-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="approach-copy">
            <span className="eyebrow">04 / AI WITH ACCOUNTABILITY</span>
            <h2>AI can help build it. Evidence must prove it.</h2>
            <p>
              AI-assisted development is part of the experiment, not a
              substitute for engineering judgement. The goal is to assess
              generated changes, verify behaviour and understand where AI
              genuinely adds value.
            </p>
            <a className="text-link" href="#engineering">
              Explore the engineering approach <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="principles-panel">
            {[
              ['01', 'Assist', 'Use AI to explore, draft and explain.'],
              ['02', 'Verify', 'Run checks and review the evidence.'],
              ['03', 'Evaluate', 'Measure usefulness, accuracy and limitations.'],
            ].map(([number, title, description]) => (
              <div className="principle-row" key={number}>
                <span className="principle-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section" id="ai-evaluation">
          <div className="section-heading">
            <div>
              <span className="eyebrow">05 / AI QUALITY ENGINEERING</span>
              <h2>Evaluate the evaluator, then evaluate the model.</h2>
            </div>
            <p>
              The enquiry-triage experiment is being built as a measurable
              testing problem: define expected behaviour, validate the scoring
              logic, then compare a real model against the same synthetic cases.
            </p>
          </div>

          <div className="architecture-cards">
            <article className="architecture-card">
              <div className="card-topline">
                <span className="card-index">01</span>
                <span className="system-status status-planned">FEATURE BRANCH</span>
              </div>
              <h3>Golden evaluation set</h3>
              <p className="card-description">
                Twelve identity-free cases cover booking, availability, pricing,
                ambiguity, conflicting dates, spam and prompt injection. Each
                defines expected category, summary facts, missing information
                and whether a human should review the result.
              </p>
            </article>
            <article className="architecture-card">
              <div className="card-topline">
                <span className="card-index">02</span>
                <span className="system-status status-planned">IMPLEMENTED</span>
              </div>
              <h3>Test the test instrument</h3>
              <p className="card-description">
                Controlled candidate outputs establish a known-good baseline.
                Mutation tests deliberately corrupt category, summary facts,
                follow-up information and review decisions to check that the
                evaluator detects regressions.
              </p>
            </article>
            <article className="architecture-card">
              <div className="card-topline">
                <span className="card-index">03</span>
                <span className="system-status status-planned">IMPLEMENTED · LIVE RUN PENDING</span>
              </div>
              <h3>Case-level diagnostics</h3>
              <p className="card-description">
                Reports identify failed case IDs and explain the mismatch:
                incorrect category, missing fact anchors, omitted follow-up
                details or the wrong human-review decision. Aggregate scores
                alone can hide the reason a system failed.
              </p>
            </article>
            <article className="architecture-card">
              <div className="card-topline">
                <span className="card-index">04</span>
                <span className="system-status status-planned">PREVIEW SETUP PENDING</span>
              </div>
              <h3>Real-model evaluation</h3>
              <p className="card-description">
                A guarded Cloudflare Workers AI adapter and repeatable runner
                are implemented on the feature branch. The preview binding must
                be configured and the 12-case live run completed before any
                model-quality score is reported. No live customer data is used.
              </p>
            </article>
          </div>

          <div className="architecture-support-grid">
            <article className="architecture-note">
              <span className="eyebrow">LEARNING 01</span>
              <h3>Metrics are only as good as their definitions.</h3>
              <p>
                Early controlled tests exposed a literal anchor mismatch
                (“cost” versus “charge”) and a mutation that still contained
                one expected word. Normalisation and explicit failure reasons
                improved repeatability, but substring matching is not semantic
                understanding.
              </p>
            </article>
            <article className="architecture-note">
              <span className="eyebrow">LEARNING 02</span>
              <h3>Safety is part of the acceptance criteria.</h3>
              <p>
                The experiment treats message text as untrusted input, rejects
                malformed model output, keeps identity fields out of the model
                request, and reserves human review for ambiguous, contradictory
                and manipulation-attempt cases. A perfect aggregate score on a
                small synthetic set is not proof of production readiness.
              </p>
            </article>
          </div>
          <p>
            Implementation and evaluation code:
            {' '}
            <a href="https://github.com/Floodzie2/qualitypeople-app/pull/7" target="_blank" rel="noreferrer">
              AI enquiry triage evaluation pull request ↗
            </a>.
            The live model evaluation is not yet complete; results will be
            published here only after the preview run has been executed and
            reviewed.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">Q</span>
          <span>
            QUALITY<span className="brand-light">PEOPLE</span>
          </span>
        </a>
        <span>Engineering in progress. Evidence over claims.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
