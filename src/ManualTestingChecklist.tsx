import './ManualTestingChecklist.css'

const testCases = [
  {
    id: 'SIT-M01',
    area: 'Booking form',
    priority: 'P1',
    scenario: 'Submit a valid booking enquiry',
    expected: 'A clear confirmation appears and the enquiry is saved once.',
  },
  {
    id: 'SIT-M02',
    area: 'Validation',
    priority: 'P1',
    scenario: 'Submit with required fields empty',
    expected: 'Required-field guidance appears; invalid data is not submitted.',
  },
  {
    id: 'SIT-M03',
    area: 'Validation',
    priority: 'P1',
    scenario: 'Enter a malformed email address',
    expected: 'The address is rejected with helpful feedback.',
  },
  {
    id: 'SIT-M04',
    area: 'Resilience',
    priority: 'P1',
    scenario: 'Simulate an API or server failure',
    expected: 'An honest error message appears; no false success is shown.',
  },
  {
    id: 'SIT-M05',
    area: 'Data integrity',
    priority: 'P2',
    scenario: 'Refresh after a successful submission',
    expected: 'The page does not silently create a duplicate enquiry.',
  },
  {
    id: 'SIT-M06',
    area: 'Responsive UI',
    priority: 'P2',
    scenario: 'Complete the form on a narrow mobile viewport',
    expected: 'Fields, validation messages and submit action remain usable.',
  },
  {
    id: 'SIT-M07',
    area: 'Input robustness',
    priority: 'P2',
    scenario: 'Enter a very long message and unusual characters',
    expected: 'Input is handled safely and the page remains responsive.',
  },
]

export function ManualTestingChecklist() {
  return (
    <section className="manual-testing-section" id="manual-sit">
      <div className="section-heading">
        <div>
          <span className="eyebrow">01B / HUMAN VALIDATION IN SIT</span>
          <h2>A sample manual test checklist.</h2>
        </div>
        <p>
          Automation provides repeatable regression coverage. Exploratory and
          acceptance testing adds human judgement around real journeys,
          usability, edge cases and failure behaviour.
        </p>
      </div>

      <div className="manual-test-board">
        <div className="manual-board-header">
          <div>
            <span className="manual-board-kicker">QUALITYPEOPLE / SIT</span>
            <h3>Booking enquiry — test session</h3>
            <p>Example checklist · illustrative cases, not execution evidence</p>
          </div>
          <span className="manual-session-status">SAMPLE · NOT RUN</span>
        </div>

        <div className="manual-board-summary" aria-label="Checklist summary">
          <div><strong>07</strong><span>Sample cases</span></div>
          <div><strong>04</strong><span>Priority P1</span></div>
          <div><strong>03</strong><span>Priority P2</span></div>
          <div><strong>—</strong><span>Results recorded</span></div>
        </div>

        <div className="manual-test-table-wrap">
          <table className="manual-test-table">
            <thead>
              <tr>
                <th scope="col">Test ID</th>
                <th scope="col">Scenario</th>
                <th scope="col">Expected result</th>
                <th scope="col">Priority</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {testCases.map((testCase) => (
                <tr key={testCase.id}>
                  <td><span className="manual-test-id">{testCase.id}</span><span className="manual-test-area">{testCase.area}</span></td>
                  <td className="manual-test-scenario">{testCase.scenario}</td>
                  <td>{testCase.expected}</td>
                  <td><span className={`manual-priority manual-priority-${testCase.priority.toLowerCase()}`}>{testCase.priority}</span></td>
                  <td><span className="manual-not-run"><span />Not run</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="manual-board-footer">
          <div>
            <span className="manual-footer-mark">i</span>
            <p><strong>How to use this in SIT</strong> Record the build/commit under test, tester, date, actual result and evidence link. Log defects with reproduction steps; rerun impacted checks after fixes.</p>
          </div>
          <span className="manual-evidence-label">EVIDENCE FIRST</span>
        </div>
      </div>
      <p className="manual-disclaimer">Illustrative test design only. These cases are examples, not a claim that manual execution has taken place.</p>
    </section>
  )
}
