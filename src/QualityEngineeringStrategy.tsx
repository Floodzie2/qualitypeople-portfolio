import './QualityEngineeringStrategy.css'

const principles = [
  {
    number: '01',
    title: 'Shared ownership',
    description: 'Quality is a delivery-team responsibility. Developers, testers, product and operations contribute; QE provides strategy, specialist expertise and independent challenge.',
    practice: 'Agree quality expectations during refinement, make acceptance criteria testable, and review escaped defects as learning opportunities rather than assigning blame.',
  },
  {
    number: '02',
    title: 'Risk-led coverage',
    description: 'Choose testing depth from business impact, change scope, complexity and exposure—not from a target automation percentage.',
    practice: 'Prioritise critical customer journeys, access control, data integrity, integrations and high-change areas. Record residual risk when coverage is intentionally limited.',
  },
  {
    number: '03',
    title: 'Fast, layered feedback',
    description: 'Put the cheapest useful checks closest to the change, then expand confidence through integration, browser, system and operational testing.',
    practice: 'Run type checks, lint and unit tests early; add API and contract checks, targeted Playwright smoke tests, then broader SIT regression and manual exploration.',
  },
  {
    number: '04',
    title: 'Automation with a purpose',
    description: 'Automate repeatable, valuable checks where automation improves speed, consistency or coverage. Keep exploratory and usability testing human-led where judgement matters.',
    practice: 'Track defects found, feedback time, maintenance cost, flaky-test rate and risk covered—not just scripts written or percentage automated.',
  },
  {
    number: '05',
    title: 'AI with evaluation and controls',
    description: 'Treat AI-generated tests and AI-enabled product behaviour as hypotheses that need evaluation, traceability and human oversight.',
    practice: 'Use representative golden datasets, task-specific metrics, baseline comparisons, adversarial cases and review thresholds. Separate raw model performance from deterministic controls.',
  },
  {
    number: '06',
    title: 'Reliable tests and learning loops',
    description: 'A test suite is a product. Its reliability, diagnostic value and maintenance cost determine whether teams trust its feedback.',
    practice: 'Investigate flaky failures by root cause, assign ownership, quarantine selectively with expiry, and use traces, logs and test-data diagnostics to prevent recurrence.',
  },
]

const measures = [
  ['Escaped defects', 'Severity and trend, with discovery stage and root cause'],
  ['Feedback time', 'Time from change or commit to actionable test result'],
  ['Regression health', 'Pass rate, flaky rate, reruns and time to diagnose'],
  ['Risk coverage', 'Critical journeys and controls exercised by evidence'],
  ['Delivery flow', 'Rework, blocked releases and time spent waiting for QA'],
  ['AI quality', 'Task-specific quality, safety, review rate and drift'],
]

export function QualityEngineeringStrategy() {
  return (
    <section className="content-section qe-strategy-section" id="qe-strategy">
      <div className="section-heading">
        <div>
          <span className="eyebrow">QUALITY ENGINEERING / OPERATING MODEL</span>
          <h2>Quality is built by the whole delivery system.</h2>
        </div>
        <p>
          A senior QE approach connects engineering practices, risk decisions and
          measurable outcomes. The goal is not to move every test into automation;
          it is to give teams earlier, more reliable evidence so they can make
          better release decisions.
        </p>
      </div>

      <div className="qe-strategy-intro">
        <span className="qe-strategy-label">THE SHIFT</span>
        <div className="qe-strategy-shift">
          <div>
            <span>FROM</span>
            <strong>QA owns quality</strong>
            <p>Testing happens late; QA becomes the release bottleneck.</p>
          </div>
          <span className="qe-strategy-arrow" aria-hidden="true">→</span>
          <div>
            <span>TO</span>
            <strong>Teams build quality in</strong>
            <p>Risk is discussed early; evidence is produced throughout delivery.</p>
          </div>
        </div>
      </div>

      <div className="qe-principle-grid">
        {principles.map((principle) => (
          <article className="qe-principle-card" key={principle.number}>
            <span className="qe-principle-number">{principle.number}</span>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
            <div className="qe-practice">
              <span>IN PRACTICE</span>
              <p>{principle.practice}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="qe-measure-panel">
        <div>
          <span className="eyebrow">MEASURE OUTCOMES, NOT ACTIVITY</span>
          <h3>How to tell whether QE is improving delivery</h3>
          <p>These are proposed measures for an improvement programme. They should be baselined first, interpreted together and segmented by risk; no single metric is a proxy for quality.</p>
        </div>
        <div className="qe-measure-list">
          {measures.map(([name, detail]) => (
            <div className="qe-measure-row" key={name}>
              <strong>{name}</strong>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="qe-evidence-boundary">
        <div>
          <span className="eyebrow">APPLIED IN THIS PORTFOLIO</span>
          <h3>Principles connected to working evidence</h3>
          <p>
            The QualityPeople project demonstrates selected practices through
            Playwright and API checks, deployed-preview verification, CI delivery,
            JMeter smoke testing, defect records and a synthetic AI evaluation
            harness. These are project examples, not claims that an enterprise-wide
            QE transformation has been completed.
          </p>
        </div>
        <ul>
          <li><a href="#highlights">Test and delivery evidence</a></li>
          <li><a href="#performance">Performance smoke testing</a></li>
          <li><a href="#ai-evaluation">AI evaluation methodology</a></li>
          <li><a href="#defect-evidence">Defect discovery and retest evidence</a></li>
        </ul>
      </div>

      <div className="qe-flaky-panel">
        <span className="eyebrow">RELIABILITY PLAYBOOK</span>
        <h3>Flaky tests: contain the noise, fix the cause.</h3>
        <div className="qe-flaky-steps">
          <div><strong>1. Detect</strong><p>Track intermittent failures, retries and test history.</p></div>
          <div><strong>2. Diagnose</strong><p>Use traces, logs and data to separate test, product, environment and dependency causes.</p></div>
          <div><strong>3. Contain</strong><p>Quarantine only when necessary, with an owner, issue and review date. Retries are diagnostic or temporary containment—not a fix.</p></div>
          <div><strong>4. Prevent</strong><p>Repair synchronisation, isolation, data setup or environment weaknesses, then verify stability over repeated runs.</p></div>
        </div>
      </div>
    </section>
  )
}
