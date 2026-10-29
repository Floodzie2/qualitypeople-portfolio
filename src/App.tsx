
import './App.css'
import { ArchitectureDetail } from './ArchitectureDetail'
import { ArchitectureDiagrams } from './ArchitectureDiagrams'
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
    device: 'Linux-based Mac mini',
    detail: 'Docker · Playwright · JMeter',
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
          <a href="#story">Project context</a>
          <a href="#architecture">Architecture</a>
          <a href="#engineering">Engineering</a>
          <a href="#performance">JMeter performance</a>
          <a href="#manual-sit">Manual SIT</a>
          <a href="#delivery">Deployment</a>
          <a href="#ai-evaluation">AI evaluation</a>
          <a href="#defect-evidence">Defect evidence</a>
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

        <section className="content-section career-section" id="story">
          <div className="section-heading">
            <div>
              <span className="eyebrow">PROJECT CONTEXT</span>
              <h2>Exploring quality engineering through practical work.</h2>
            </div>
            <p>
              QualityPeople is a hands-on engineering project exploring how modern
              development, automated quality checks and evidence-led AI evaluation
              fit together in a practical delivery workflow.
            </p>
          </div>
          <div className="architecture-support-grid">
            <article className="architecture-note">
              <span className="eyebrow">QUALITY PRINCIPLES</span>
              <h3>Quality as a delivery discipline.</h3>
              <p>
                Effective quality engineering combines risk-based thinking,
                delivery awareness and practical automation. The aim is to help
                teams build quality into their processes from the outset,
                improve ways of working and make quality an integral part of
                successful delivery—not just a final testing phase.
              </p>
            </article>
            <article className="architecture-note">
              <span className="eyebrow">AI EXPERIMENTS</span>
              <h3>From unstructured information to test ideas.</h3>
              <p>
                Early experiments with ChatGPT explored turning requirements and
                email threads into candidate test cases. That idea informs a
                more systematic approach: define expected behaviour, test
                outputs, measure errors and review the evidence rather than
                assuming generated content is correct.
              </p>
            </article>
            <article className="architecture-note">
              <span className="eyebrow">CURRENT PRACTICE</span>
              <h3>Build it, test it, measure it.</h3>
              <p>
                QualityPeople is a practical engineering project spanning
                TypeScript, Playwright and API testing, CI/CD and separate
                environments, plus an evaluation harness for AI-generated
                enquiry triage. The work documents limitations as carefully
                as successes.
              </p>
            </article>
          </div>
          <div className="architecture-note evidence-panel">
            <span className="eyebrow">INSPECT THE EVIDENCE</span>
            <h3>Claims should lead to code, tests and results.</h3>
            <p>
              Follow the implementation and its evidence directly in GitHub:
              {' '}
              <a href="https://github.com/Floodzie2/qualitypeople-app" target="_blank" rel="noreferrer">application source ↗</a>
              {' · '}
              <a href="https://github.com/Floodzie2/qualitypeople-app/actions" target="_blank" rel="noreferrer">CI and deployment workflows ↗</a>
              {' · '}
              <a href="https://github.com/Floodzie2/qualitypeople-app/pull/7" target="_blank" rel="noreferrer">merged AI evaluation work ↗</a>
              {' · '}
              <a href="https://github.com/Floodzie2/qualitypeople-app/blob/main/docs/ai-triage-evaluation.md" target="_blank" rel="noreferrer">AI evaluation methodology and experiment log ↗</a>.
            </p>
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

        <ArchitectureDiagrams />
        <ArchitectureDetail />
        <ManualTestingChecklist />

        <section className="content-section performance-section" id="performance">
          <div className="section-heading">
            <div>
              <span className="eyebrow">03 / PERFORMANCE ENGINEERING</span>
              <h2>Performance Testing is now part of CI</h2>
            </div>
            <p>
              A parameterized Apache JMeter smoke test is now part of the application CI
              workflow. It runs against a locally served build, fails the pipeline
              on unsuccessful samples, and publishes the HTML report and raw JTL
              results as a 14-day artifact. The merged CI change is in place; the
              current check is an endpoint smoke test, not a load or capacity test.
              Ollama is available locally on the M4 Mac mini for development
              support. Using it to interpret JMeter results and compare performance
              trends is planned; the hosted application does not depend on a remote
              AI service. Scheduled load testing and AI-assisted performance analysis
              remain planned enhancements.
            </p>
          </div>

          <div className="performance-summary">
            <div className="performance-summary-copy">
              <span className="system-status status-active">CI RUN PASSED · 26 OCT 2026</span>
              <h3>JMeter smoke test — feature-branch CI run</h3>
              <p>
                The run exercised <code>GET /version.json</code> ten times.
                All ten requests returned HTTP 200 with no errors. This is a
                lightweight smoke check of endpoint availability and response
                behaviour, not a capacity or stress test.
              </p>
              <div className="tag-list">
                <span className="tech-tag">Apache JMeter</span>
                <span className="tech-tag">GitHub Actions</span>
                <span className="tech-tag">HTML report</span>
                <span className="tech-tag">Raw results (.jtl)</span>
              </div>
              <a className="text-link" href="https://github.com/Floodzie2/qualitypeople-app/actions/runs/40385523665" target="_blank" rel="noreferrer">
                View successful feature-branch CI run <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="https://github.com/Floodzie2/qualitypeople-app/pull/10" target="_blank" rel="noreferrer">
                View merged CI change <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="performance-metrics" aria-label="JMeter smoke test metrics">
              <div><span>Samples</span><strong>10</strong><small>requests</small></div>
              <div><span>Error rate</span><strong>0.00%</strong><small>0 errors</small></div>
              <div><span>Mean response</span><strong>7.5 ms</strong><small>average</small></div>
              <div><span>Median response</span><strong>3 ms</strong><small>p50</small></div>
              <div><span>Maximum</span><strong>50 ms</strong><small>slowest sample</small></div>
              <div><span>Throughput</span><strong>94.34/s</strong><small>reported by JMeter</small></div>
            </div>
          </div>

          <div className="performance-summary sit-smoke-summary">
            <div className="performance-summary-copy">
              <span className="system-status status-active">SIT VERIFICATION · 26 OCT 2026</span>
              <h3>Verified SIT smoke run</h3>
              <p>
                A separate manual run targeted the deployed Cloudflare Pages SIT
                endpoint. Ten requests to <code>GET /version.json</code> passed
                with no errors. Response times ranged from 99 to 479 ms. With one
                virtual user and only ten samples, this is a verification snapshot,
                not a stable performance baseline or a capacity measurement.
              </p>
              <div className="tag-list">
                <span className="tech-tag">Apache JMeter 5.6.3</span>
                <span className="tech-tag">Cloudflare Pages SIT</span>
                <span className="tech-tag">10 samples</span>
                <span className="tech-tag">Read-only endpoint</span>
              </div>
            </div>
            <div className="performance-metrics" aria-label="Verified SIT JMeter smoke test metrics">
              <div><span>Samples</span><strong>10</strong><small>requests</small></div>
              <div><span>Error rate</span><strong>0.00%</strong><small>0 errors</small></div>
              <div><span>Mean response</span><strong>159.7 ms</strong><small>average</small></div>
              <div><span>Median response</span><strong>131.5 ms</strong><small>p50</small></div>
              <div><span>Maximum</span><strong>479 ms</strong><small>slowest sample</small></div>
              <div><span>Throughput</span><strong>6.165/s</strong><small>short-run result only</small></div>
            </div>
          </div>

          <div className="jmeter-report-card">
            <div className="jmeter-report-heading">
              <div>
                <span className="panel-kicker">SIT REPORT RECONSTRUCTION</span>
                <h3>Apache JMeter · SIT dashboard overview</h3>
              </div>
              <span className="system-status status-active">10 / 10 SUCCESS</span>
            </div>
            <p>
              A compact, portfolio-friendly recreation of the key information in
              the full scrolling SIT HTML report. Values reflect the verified
              SIT statistics for this run; the layout is redrawn, not a literal
              screenshot of JMeter's original interface.
            </p>
            <a className="jmeter-report-image-link" href="/jmeter-report-recreated.svg" target="_blank" rel="noreferrer" aria-label="Open the recreated JMeter report image">
              <img
                className="jmeter-report-image"
                src="/jmeter-report-recreated.svg"
                alt="Recreated JMeter SIT dashboard showing ten successful GET version.json requests, zero errors, 159.7 millisecond mean response time, 131.5 millisecond median, 479 millisecond maximum and a summary response-time range."
              />
            </a>
            <div className="jmeter-report-actions">
              <a className="button button-secondary" href="/jmeter-report-recreated.svg" target="_blank" rel="noreferrer">Open SIT report reconstruction ↗</a>
              <a className="button button-secondary" href="https://github.com/Floodzie2/qualitypeople-app/actions/runs/40385523665" target="_blank" rel="noreferrer">CI run &amp; archived artifact ↗</a>
            </div>
          </div>

          <div className="performance-next-steps">
            <span className="eyebrow">WHAT THIS ENABLES NEXT</span>
            <div className="performance-next-grid">
              <article><span className="card-index">01</span><h3>Repeatable baselines</h3><p>Compare response-time and error trends across builds instead of judging one run in isolation.</p></article>
              <article><span className="card-index">02</span><h3>Scheduled load runs</h3><p>Extend beyond a smoke check to planned nightly performance runs with controlled test data and load profiles.</p></article>
              <article><span className="card-index">03</span><h3>AI-assisted analysis</h3><p>Use local Ollama to explore summarising JMeter results, flagging unusual changes and suggesting investigations—with human review and evidence-backed conclusions.</p></article>
            </div>
          </div>
        </section>

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

          <div className="evidence-gallery">
            <div className="evidence-gallery-heading">
              <div>
                <span className="eyebrow">VISUAL EVIDENCE</span>
                <h3>See the tools at work.</h3>
              </div>
              <p>
                Reconstructed reports and architecture views make the workflow
                easier to inspect. Each visual is labelled so illustrative
                designs are not confused with original tool screenshots.
              </p>
            </div>

            <div className="evidence-gallery-grid">
              <article className="evidence-card">
                <div className="evidence-card-topline">
                  <span className="panel-kicker">BROWSER REGRESSION</span>
                  <span className="system-status status-active">RUN VERIFIED</span>
                </div>
                <a className="evidence-image-link" href="/playwright-regression-recreated.svg" target="_blank" rel="noreferrer" aria-label="Open Playwright regression report reconstruction">
                  <img src="/playwright-regression-recreated.svg" alt="Reconstructed Playwright deployed regression report showing successful build, SIT deployment and browser regression stages tied to a verified commit." loading="lazy" />
                </a>
                <h4>Playwright regression</h4>
                <p>Recorded end-to-end evidence for a deployed preview, including build identity verification. This is a report reconstruction, not a literal Playwright UI screenshot.</p>
                <a className="text-link" href="https://github.com/Floodzie2/qualitypeople-app/actions/runs/40192935797" target="_blank" rel="noreferrer">Open recorded Playwright run ↗</a>
              </article>

              <article className="evidence-card">
                <div className="evidence-card-topline">
                  <span className="panel-kicker">CONTAINERISED E2E TESTING</span>
                  <span className="system-status status-active">RUN VERIFIED</span>
                </div>
                <a className="evidence-image-link" href="/docker-playwright-run-recreated.svg" target="_blank" rel="noreferrer" aria-label="Open Docker Playwright test run reconstruction">
                  <img src="/docker-playwright-run-recreated.svg" alt="Reconstructed terminal view of docker run --rm qualitypeople-playwright, executing npm run test:e2e with all five Chromium end-to-end tests passing in 1.9 seconds." />
                </a>
                <h4>Playwright running inside Docker</h4>
                <p>This is implemented and has been run: a Docker image packages Playwright 1.64.1, Chromium and its browser dependencies with the project dependencies. Running the container executes the end-to-end suite in Linux; the recorded run passed 5/5 tests in 1.9 seconds. The separate headless Linux QA host is a distinct next step.</p>
                <a className="text-link" href="https://github.com/Floodzie2/qualitypeople-app" target="_blank" rel="noreferrer">Explore application repository ↗</a>
                <a className="text-link" href="/docker-test-architecture.svg" target="_blank" rel="noreferrer">View container architecture ↗</a>
              </article>

              <article className="evidence-card">
                <div className="evidence-card-topline">
                  <span className="panel-kicker">CLOUD DELIVERY</span>
                  <span className="system-status status-active">WORKFLOW VERIFIED</span>
                </div>
                <a className="evidence-image-link" href="/cloudflare-deployment-recreated.svg" target="_blank" rel="noreferrer" aria-label="Open Cloudflare deployment overview reconstruction">
                  <img src="/cloudflare-deployment-recreated.svg" alt="Reconstructed Cloudflare Pages project overview distinguishing the application and portfolio projects and showing the CI, SIT, Playwright and production release path." />
                </a>
                <h4>Cloudflare Pages</h4>
                <p>Shows the separation between application and portfolio deployments and the controlled application release path. It summarises the architecture rather than exposing a live account dashboard.</p>
                <a className="text-link" href="https://github.com/Floodzie2/qualitypeople-app/actions" target="_blank" rel="noreferrer">Explore CI and deployment runs ↗</a>
              </article>

              <article className="evidence-card">
                <div className="evidence-card-topline">
                  <span className="panel-kicker">CI / CD</span>
                  <span className="system-status status-active">RECORDED SUCCESS</span>
                </div>
                <a className="evidence-image-link" href="/github-actions-pipeline-recreated.svg" target="_blank" rel="noreferrer" aria-label="Open GitHub Actions pipeline reconstruction">
                  <img src="/github-actions-pipeline-recreated.svg" alt="Reconstructed GitHub Actions workflow with successful CI, SIT deployment, deployed Playwright regression and controlled production validation stages." />
                </a>
                <h4>GitHub Actions release path</h4>
                <p>The successful 25 October 2026 release path, tied to a specific commit, demonstrates that the release process has run end to end—not just that workflows exist.</p>
                <a className="text-link" href="https://github.com/Floodzie2/qualitypeople-app/actions/runs/40193089925" target="_blank" rel="noreferrer">Open production workflow run ↗</a>
              </article>

              <article className="evidence-card">
                <div className="evidence-card-topline">
                  <span className="panel-kicker">AI QUALITY ENGINEERING</span>
                  <span className="system-status status-active">LOCAL EXPERIMENT</span>
                </div>
                <a className="evidence-image-link" href="/ai-evaluation-recreated.svg" target="_blank" rel="noreferrer" aria-label="Open AI evaluation results reconstruction">
                  <img src="/ai-evaluation-recreated.svg" alt="Reconstructed AI evaluation results showing 11 of 12 raw model cases passed and 12 of 12 final API cases passed after deterministic safety post-processing, with five final checks at 100 percent." />
                </a>
                <h4>AI evaluation results</h4>
                <p>The local v13 experiment keeps the raw model miss visible and attributes the final improvement to a narrow deterministic safety control. Results are from 12 synthetic cases, not a general accuracy claim.</p>
                <a className="text-link" href="https://github.com/Floodzie2/qualitypeople-app/blob/main/docs/ai-triage-evaluation.md" target="_blank" rel="noreferrer">Read evaluation methodology ↗</a>
              </article>
            </div>
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
              <h2>Evaluate the model—and the safety net around it.</h2>
            </div>
            <p>
              A model-backed enquiry-triage feature is evaluated against a fixed
              synthetic golden dataset. The latest experiment separates the raw
              model candidate from the final API result, so improvements from
              deterministic safety controls are visible rather than attributed
              to the model.
            </p>
          </div>

          <div className="architecture-cards">
            <article className="architecture-card">
              <div className="card-topline">
                <span className="card-index">01</span>
                <span className="system-status status-active">IMPLEMENTED</span>
              </div>
              <h3>Golden dataset and evaluator</h3>
              <p className="card-description">
                Twelve synthetic cases cover booking and pricing enquiries,
                ambiguity, conflicting dates, spam and prompt injection. The
                evaluator checks schema validity, category accuracy, factual
                summary anchors, missing-information recall and human-review
                decisions. Tests also challenge the evaluator with deliberately
                altered candidate outputs.
              </p>
            </article>
            <article className="architecture-card">
              <div className="card-topline">
                <span className="card-index">02</span>
                <span className="system-status status-active">12 / 12 FINAL CASES PASS</span>
              </div>
              <h3>Latest final API evaluation</h3>
              <p className="card-description">
                The local v13 run passed all five checks across all 12 cases:
                schema validity 100%, category accuracy 100%, summary-anchor
                coverage 100%, missing-information recall 100% and human-review
                accuracy 100%. These results describe this small synthetic
                dataset and the current scoring rules—not general real-world
                accuracy or production readiness.
              </p>
            </article>
            <article className="architecture-card">
              <div className="card-topline">
                <span className="card-index">03</span>
                <span className="system-status status-active">RAW VS FINAL</span>
              </div>
              <h3>Keep the model's misses visible</h3>
              <p className="card-description">
                Before deterministic post-processing, the raw model passed
                11 of 12 cases and missing-information recall was 91.7%.
                The remaining conflict-date case omitted the confirmed event
                date. A narrow safety override adds that required follow-up
                detail; the evaluator reports both the raw candidate and the
                final result so the improvement is attributable to the control,
                not misrepresented as a model improvement.
              </p>
            </article>
            <article className="architecture-card">
              <div className="card-topline">
                <span className="card-index">04</span>
                <span className="system-status status-planned">NEXT ITERATION</span>
              </div>
              <h3>Broaden evidence before stronger claims</h3>
              <p className="card-description">
                The next work is to expand the dataset with more varied and
                adversarial examples, test endpoint error paths and safety
                boundaries, and verify behaviour through the wider application
                flow. The evaluation endpoint is isolated from public enquiry
                submission; no live customer data is used in the golden cases.
              </p>
            </article>
          </div>

          <div className="architecture-support-grid">
            <article className="architecture-note">
              <span className="eyebrow">UNIT TESTS</span>
              <h3>35 tests passing.</h3>
              <p>
                The latest local Vitest run passed all 35 tests across six test
                files, including endpoint response contracts, safety checks,
                golden cases and evaluator behaviour. Type checking also passed
                in the preceding verification run.
              </p>
            </article>
            <article className="architecture-note">
              <span className="eyebrow">MEASURED COVERAGE</span>
              <h3>Strong core logic; endpoint paths remain.</h3>
              <p>
                A local V8 coverage run measured 77.9% overall line coverage.
                The AI evaluation cases and triage logic each reached 100% line
                coverage, the evaluator 98.59%, safety checks 100%, and the
                Cloudflare AI endpoint 68.62%. Coverage measures executed code,
                not whether every behaviour is correct; the endpoint's
                uncovered branches are a priority for the next test pass.
              </p>
            </article>
            <article className="architecture-note">
              <span className="eyebrow">QUALITY LESSON</span>
              <h3>Test the model and the measuring instrument.</h3>
              <p>
                Evaluator calibration now recognises explicit, tested
                paraphrases without treating meaningful distinctions such as
                “event date” and “confirmed event date” as interchangeable.
                The safety override addresses a specific known case; it is not
                a substitute for broader evaluation or human review.
              </p>
            </article>
          </div>

          <p>
            <strong>Scope and limitations:</strong> v13 is a local evaluation
            run against 12 synthetic cases using the current model and
            deterministic post-processing. A 12/12 final score is useful
            regression evidence, not a statistically representative accuracy
            claim. The endpoint is protected and evaluation-only, and is not
            wired into public enquiry submission.
          </p>
          <p>
            Implementation and evidence:
            {' '}
            <a href="https://github.com/Floodzie2/qualitypeople-app/tree/feature/ai-enquiry-evaluation-foundation" target="_blank" rel="noreferrer">
              AI evaluation implementation ↗
            </a>
            {' · '}
            <a href="https://github.com/Floodzie2/qualitypeople-app/blob/main/docs/ai-triage-evaluation.md" target="_blank" rel="noreferrer">
              Evaluation methodology and experiment log ↗
            </a>
            {' · '}
            <a href="https://github.com/Floodzie2/qualitypeople-app/actions" target="_blank" rel="noreferrer">
              CI and test workflows ↗
            </a>.
          </p>
        </section>

        <section className="content-section defect-evidence-section" id="defect-evidence">
          <div className="section-heading">
            <div>
              <span className="eyebrow">06 / DEFECT DETECTION &amp; PREVENTION</span>
              <h2>Find the weakness. Fix it. Prove the retest.</h2>
            </div>
            <p>
              A traceable record of engineering and AI-evaluation findings from
              the project history. Each example links to implementation evidence
              and distinguishes defects in our code or test tooling from quality
              findings in model output.
            </p>
          </div>

          <div className="defect-evidence-principle">
            <div className="defect-evidence-principle-mark" aria-hidden="true">✓</div>
            <div>
              <h3>Evidence-led, not incident theatre.</h3>
              <p>
                These are documented development and pre-release findings. We
                have not labelled them production incidents because the available
                evidence does not establish that customers encountered them in
                the live service. The AI triage experiment is isolated from public
                enquiry submission.
              </p>
            </div>
          </div>

          <div className="defect-evidence-stats" aria-label="Defect evidence summary">
            <div>
              <span className="defect-stat-value">04</span>
              <span className="defect-stat-label">documented finding examples</span>
            </div>
            <div>
              <span className="defect-stat-value">12</span>
              <span className="defect-stat-label">synthetic AI evaluation cases</span>
            </div>
            <div>
              <span className="defect-stat-value">4</span>
              <span className="defect-stat-label">lifecycle stages: detect · diagnose · resolve · retest</span>
            </div>
          </div>

          <div className="defect-evidence-grid">
            <article className="defect-evidence-card">
              <div className="defect-card-meta">
                <span className="defect-type">INTEGRATION DEFECT</span>
                <span className="system-status status-active">FIXED + TESTED</span>
              </div>
              <h3>Workers AI response handling</h3>
              <p>
                The integration needed to handle the provider's structured
                response shape correctly. The implementation history records a
                fix and corresponding coverage, reducing the risk that a valid
                provider response is misread by the application.
              </p>
              <div className="defect-evidence-links">
                <a href="https://github.com/Floodzie2/qualitypeople-app/commit/6aa44bf2aa3aad7cdd01a2b767f7a55246b70cf3" target="_blank" rel="noreferrer">Implementation and fix history ↗</a>
                <a href="https://github.com/Floodzie2/qualitypeople-app/blob/main/src/ai/enquiry-triage.ts" target="_blank" rel="noreferrer">Current triage implementation ↗</a>
              </div>
            </article>

            <article className="defect-evidence-card">
              <div className="defect-card-meta">
                <span className="defect-type">TEST-TOOLING DEFECT</span>
                <span className="system-status status-active">FIXED + TESTED</span>
              </div>
              <h3>Evaluator text normalisation</h3>
              <p>
                The deterministic evaluator had to compare candidate responses
                consistently despite harmless text-format differences. A fix
                to normalisation made the evaluation harness more reliable,
                helping separate genuine model failures from evaluator noise.
              </p>
              <div className="defect-evidence-links">
                <a href="https://github.com/Floodzie2/qualitypeople-app/commit/6aa44bf2aa3aad7cdd01a2b767f7a55246b70cf3" target="_blank" rel="noreferrer">Evaluator implementation history ↗</a>
                <a href="https://github.com/Floodzie2/qualitypeople-app/blob/main/src/ai/enquiry-evaluator.ts" target="_blank" rel="noreferrer">Current evaluator checks ↗</a>
              </div>
            </article>

            <article className="defect-evidence-card">
              <div className="defect-card-meta">
                <span className="defect-type">EVALUATION DEFECT</span>
                <span className="system-status status-active">REFINED + TESTED</span>
              </div>
              <h3>Missing-information matching</h3>
              <p>
                Equivalent ways of expressing missing details could be
                interpreted too narrowly by the evaluator. The matching rules
                and tests were refined so that meaningful wording variations
                are recognised without treating every response as correct.
              </p>
              <div className="defect-evidence-links">
                <a href="https://github.com/Floodzie2/qualitypeople-app/commit/6aa44bf2aa3aad7cdd01a2b767f7a55246b70cf3" target="_blank" rel="noreferrer">Fix and test history ↗</a>
                <a href="https://github.com/Floodzie2/qualitypeople-app/blob/main/src/ai/enquiry-evaluation-cases.ts" target="_blank" rel="noreferrer">Synthetic evaluation cases ↗</a>
              </div>
            </article>

            <article className="defect-evidence-card">
              <div className="defect-card-meta">
                <span className="defect-type">AI QUALITY FINDING</span>
                <span className="system-status status-planned">ITERATIVE IMPROVEMENT</span>
              </div>
              <h3>Summary facts and model behaviour</h3>
              <p>
                Early live-model runs exposed weak coverage of required summary
                facts and missing information. Prompt revisions improved some
                measures, while also showing trade-offs in human-review
                decisions. These are evaluation findings—not customer incidents
                or a statistically representative accuracy claim.
              </p>
              <div className="defect-evidence-links">
                <a href="https://github.com/Floodzie2/qualitypeople-app/blob/main/docs/ai-triage-evaluation.md" target="_blank" rel="noreferrer">Experiment results and limitations ↗</a>
                <a href="https://github.com/Floodzie2/qualitypeople-app/actions" target="_blank" rel="noreferrer">Test and CI evidence ↗</a>
              </div>
            </article>
          </div>

          <div className="defect-lifecycle">
            <span className="eyebrow">THE AUTOMATION VALUE STORY</span>
            <div className="defect-lifecycle-grid">
              <div><span>01</span><h3>Detect</h3><p>A targeted test or evaluation case exposes unexpected behaviour.</p></div>
              <div><span>02</span><h3>Diagnose</h3><p>Failure output and source history help distinguish product, test-tooling and model issues.</p></div>
              <div><span>03</span><h3>Resolve</h3><p>A code, evaluator or prompt change addresses the specific finding.</p></div>
              <div><span>04</span><h3>Retest</h3><p>Focused checks and regression coverage provide evidence that the change behaves as intended.</p></div>
            </div>
          </div>

          <p className="defect-evidence-footnote">
            Metrics are deliberately modest: the four examples above are a
            curated evidence set, not a complete defect register or a claim that
            automation prevented four production incidents. Future entries can
            record discovery stage, severity, detecting test, fix commit, retest
            result and whether a verified user-facing incident occurred.
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
