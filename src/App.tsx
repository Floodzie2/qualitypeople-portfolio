
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
          <a href="#story">My QA journey</a>\n          <a href="#architecture">Architecture</a>
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

        <section className="content-section career-section" id="story">
          <div className="section-heading">
            <div>
              <span className="eyebrow">MY QA JOURNEY</span>
              <h2>From QA leadership to AI-first quality engineering.</h2>
            </div>
            <p>
              QualityPeople connects years of quality leadership with current,
              hands-on engineering: building software, automating delivery gates,
              and measuring whether AI systems behave as expected.
            </p>
          </div>
          <div className="architecture-support-grid">
            <article className="architecture-note">
              <span className="eyebrow">LEADERSHIP</span>
              <h3>Quality as a delivery discipline.</h3>
              <p>
                After five years as Head of QA at Storyful, I bring a leadership
                perspective on risk, delivery, test strategy and making quality
                part of how teams work—not just a final testing phase.
              </p>
            </article>
            <article className="architecture-note">
              <span className="eyebrow">EARLY AI EXPERIMENTS</span>
              <h3>From unstructured conversations to test ideas.</h3>
              <p>
                While at Storyful, I experimented with early ChatGPT to turn
                requirements and email threads into candidate test cases. That
                exploration now informs a more systematic approach: define
                expected behaviour, test outputs, measure errors and review
                the evidence rather than assuming generated content is correct.
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
                <a href="https://howIbuiltit.qualitypeople.ie" target="_blank" rel="noreferrer">
                  howIbuiltit.qualitypeople.ie ↗
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
              <h2>Test the model. Test the tests. Learn from failure.</h2>
            </div>
            <p>
              A hands-on experiment in evaluating a real AI triage model against
              a fixed set of synthetic enquiries. The aim is not to chase one
              impressive score, but to measure behaviour, inspect failures and
              improve the system without hiding regressions.
            </p>
          </div>

          <div className="architecture-cards">
            <article className="architecture-card">
              <div className="card-topline">
                <span className="card-index">01</span>
                <span className="system-status status-active">IMPLEMENTED</span>
              </div>
              <h3>Golden evaluation set</h3>
              <p className="card-description">
                Twelve synthetic, identity-free cases cover booking, availability,
                pricing, ambiguity, conflicting dates, spam and prompt injection.
                Each defines expected category, factual summary anchors, missing
                follow-up information and the human-review decision.
              </p>
            </article>
            <article className="architecture-card">
              <div className="card-topline">
                <span className="card-index">02</span>
                <span className="system-status status-active">TESTED</span>
              </div>
              <h3>Test the test instrument</h3>
              <p className="card-description">
                Controlled candidate outputs and mutation tests check whether
                the evaluator catches deliberately corrupted categories,
                summaries, missing-information lists and review decisions.
                This reduces the risk of trusting a broken scoring script.
              </p>
            </article>
            <article className="architecture-card">
              <div className="card-topline">
                <span className="card-index">03</span>
                <span className="system-status status-active">LIVE MODEL RUNS</span>
              </div>
              <h3>Measure more than one thing</h3>
              <p className="card-description">
                The runner reports schema validity, category accuracy, summary
                anchor coverage, missing-information recall and human-review
                accuracy, with case-level diagnostics. A correct category does
                not guarantee a safe review decision.
              </p>
            </article>
            <article className="architecture-card">
              <div className="card-topline">
                <span className="card-index">04</span>
                <span className="system-status status-planned">IN PROGRESS</span>
              </div>
              <h3>Prompt iteration and regression control</h3>
              <p className="card-description">
                Prompt revisions brought human-review accuracy back to 100%,
                while later evaluator changes made explicit paraphrases count
                correctly. The latest documented run passes 7 of 12 cases end to end; the evaluation work is now merged into the application repository.
                Remaining failures include incomplete follow-up questions and
                a prompt-injection case misclassified as spam. These remain
                open defects, not score adjustments to conceal.
              </p>
            </article>
          </div>

          <div className="architecture-support-grid">
            <article className="architecture-note">
              <span className="eyebrow">EXPERIMENT / BASELINE</span>
              <h3>Start with a measurable baseline.</h3>
              <p>
                The initial prompt passed every check in 1 of 12 cases. Schema
                validity was 100%, but category accuracy was 66.7%, summary
                anchor coverage 46.4%, missing-information recall 25.0%, and
                human-review accuracy 91.7%.
              </p>
              <p>
                <strong>What these numbers mean:</strong> schema validity checks
                whether the response follows the required structured format;
                it does not prove the content is correct. Category accuracy
                measures how often the enquiry was put in the right category.
                Summary anchor coverage measures how many expected facts—such
                as the event type, date, place or time—were preserved in the
                summary. Missing-information recall measures how many of the
                follow-up details the reference says are needed were actually
                identified. Human-review accuracy measures whether the model
                correctly judged when a person should review the enquiry.
              </p>
              <p>
                In practical terms, the first run produced validly structured
                responses every time, but only about two-thirds had the right
                category, fewer than half of the expected summary facts were
                captured, and only one-quarter of required follow-up details
                were found. The review decision was correct in 11 of 12 cases.
                Each metric answers a different question; a perfect format
                score cannot compensate for missing or incorrect content.
              </p>
            </article>
            <article className="architecture-note">
              <span className="eyebrow">ITERATION / PROMPT 1</span>
              <h3>Clarify intent and resist manipulation.</h3>
              <p>
                The next version improved all-check passes to 4 of 12 and
                category accuracy to 83.3%. Summary coverage reached 79.2%,
                missing-information recall 37.5%, while human-review accuracy
                stayed at 91.7%.
              </p>
            </article>
            <article className="architecture-note">
              <span className="eyebrow">ITERATION / PROMPT 3</span>
              <h3>Restore human-review accuracy.</h3>
              <p>
                The third prompt revision reached 100% category accuracy,
                80.6% summary anchor coverage and 45.8% missing-information
                recall. Human-review accuracy returned to 100%, but only 2 of
                12 cases passed every check under the then-current evaluator.
                The results exposed a need to distinguish true model failures
                from brittle phrase-matching in the scoring logic.
              </p>
            </article>
            <article className="architecture-note">
              <span className="eyebrow">EVALUATOR CALIBRATION</span>
              <h3>Recognise paraphrases without relaxing the standard.</h3>
              <p>
                Explicit, tested wording equivalences were added for phrases
                such as “venue location” and “venue or event location”, and
                for clear summary paraphrases. The latest run passes 7 of 12
                cases: schema validity 100%, category accuracy 91.7%, summary
                anchor coverage 91.7%, missing-information recall 58.3% and
                human-review accuracy 100%. This is primarily an evaluator
                calibration improvement, not proof that the model itself got
                better. The remaining failures are still visible.
              </p>
            </article>
            <article className="architecture-note">
              <span className="eyebrow">CURRENT FAILURE / PROMPT INJECTION</span>
              <h3>One safety case still fails.</h3>
              <p>
                The latest run classifies the injection example as spam rather
                than a booking request and omits date and location follow-up
                information. The next experiment should reinforce that customer
                text is untrusted input, preserve the underlying triage task,
                and request human review where appropriate. The golden cases
                remain unchanged; passing them all is not yet a claim of
                production readiness.
              </p>
            </article>
            <article className="architecture-note">
              <span className="eyebrow">QUALITY LESSON</span>
              <h3>Test the model and the test instrument.</h3>
              <p>
                Evaluator tests now cover explicit paraphrase equivalences and
                guard against treating meaningful distinctions such as “event
                date” and “confirmed event date” as interchangeable. Local
                type checking passes and all 27 unit tests pass. The next step
                is to improve missing-information extraction and prompt-injection
                handling without weakening expected behaviour.
              </p>
            </article>
          </div>

          <p>
            <strong>Safety and scope:</strong> the evaluation endpoint is
            protected by a token, enabled only in the evaluation environment,
            and is not connected to public enquiry submission. The cases use
            no live customer data. Twelve synthetic cases support iterative
            development; they do not prove production readiness.
          </p>
          <p>
            Implementation and evaluation code:
            {' '}
            <a href="https://github.com/Floodzie2/qualitypeople-app/pull/7" target="_blank" rel="noreferrer">
              AI enquiry triage evaluation PR (merged) ↗
            </a>
            {' · '}
            <a href="https://github.com/Floodzie2/qualitypeople-app/blob/main/docs/ai-triage-evaluation.md" target="_blank" rel="noreferrer">
              Experiment log and methodology ↗
            </a>.
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
