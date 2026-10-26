# QualityPeople engineering portfolio

**Building quality in. Proving it.**

Live portfolio: [howIbuiltit.qualitypeople.ie](https://howIbuiltit.qualitypeople.ie)  
Application: [www.qualitypeople.ie](https://www.qualitypeople.ie)  
Portfolio source: [GitHub](https://github.com/Floodzie2/qualitypeople-portfolio)  
Application source: [GitHub](https://github.com/Floodzie2/qualitypeople-app)

## Why this project exists

QualityPeople is a practical learning and portfolio project documenting how a small web application can be developed and tested with modern engineering practices. It connects hands-on implementation with a quality-engineering approach: small changes, automated feedback, explicit environments, and evidence before release.

The portfolio is intentionally transparent about what is implemented, what is planned, and what the tests have—and have not—demonstrated.

## Professional context

QualityPeople connects QA leadership experience with current hands-on engineering. After five years as Head of QA at Storyful, the project is a practical way to explore modern delivery, automation and AI quality engineering from both a leadership and implementation perspective.

While at Storyful, I experimented with early ChatGPT to turn requirements and email threads into candidate test cases. The current work builds on that idea with explicit expected behaviour, repeatable tests and measurable evaluation of AI outputs—while documenting failure modes and limitations rather than treating generated content as inherently trustworthy.

## Follow the engineering evidence

- [Application source](https://github.com/Floodzie2/qualitypeople-app)
- [CI and deployment workflows](https://github.com/Floodzie2/qualitypeople-app/actions)
- [Merged AI triage evaluation work](https://github.com/Floodzie2/qualitypeople-app/pull/7)
- [AI evaluation methodology and experiment log](https://github.com/Floodzie2/qualitypeople-app/blob/main/docs/ai-triage-evaluation.md)

## What it covers

- **Distributed development:** a MacBook Pro used as a VS Code client, an M4 Mac mini for development and orchestration, and a planned Linux-based QA machine.
- **Quality engineering:** TypeScript, Playwright browser automation, API checks, regression strategy and manual system-integration testing.
- **Delivery:** separate GitHub repositories and Cloudflare Pages destinations for the application and portfolio.
- **Performance engineering:** a parameterised JMeter smoke plan and CI integration are in a focused pull request; the feature-branch run passed and produced an HTML report plus raw JTL artifact. Broader load testing and AI-assisted interpretation remain planned.
- **AI quality engineering:** a protected, evaluation-only enquiry-triage endpoint tested against 12 synthetic cases, including ambiguity, conflicting dates and prompt injection.


## JMeter smoke-test evidence

A focused application pull request adds Apache JMeter 5.6.3 to CI. The test starts the built application locally and sends ten read-only requests to `GET /version.json` with one virtual user. It checks for HTTP 200 and a `commitSha` field, fails the workflow if any sample fails, and uploads the generated HTML dashboard and raw JTL results as a 14-day GitHub Actions artifact.

- [Focused JMeter CI pull request](https://github.com/Floodzie2/qualitypeople-app/pull/10)
- [Successful feature-branch CI run and report artifact](https://github.com/Floodzie2/qualitypeople-app/actions/runs/40385523665)

The CI run completed 10 samples with **0 errors**. Its reported mean was **7.5 ms**, median **3 ms**, and maximum **50 ms** for that short local-preview run. These figures describe that specific run, not a stable performance baseline.

A separate manual SIT verification on 26 October 2026 also completed 10 requests with **0 errors**. Its report showed a **159.7 ms mean**, **131.5 ms median**, **99 ms minimum**, and **479 ms maximum**. The portfolio's dashboard image is a labelled reconstruction of those summary statistics, not a literal screenshot of JMeter's HTML page. The reported **6.165 requests/second** is from this brief run and must not be treated as a capacity result.

This is currently a smoke test for endpoint availability and basic response behaviour—not a load, stress or capacity test. Scheduled load profiles, historical trend comparisons and AI-assisted result analysis are future work. Any AI analysis should be evaluated against the raw results and human-reviewed before conclusions are accepted.

## What the AI evaluation metrics mean

The initial run passed every check in just 1 of 12 cases. The individual metrics explain why:

- **Schema validity (100%) — Is the response well-formed?** Every output matched the expected structured format and field types. This checks shape, not truth or usefulness.
- **Category accuracy (66.7%) — Did it classify the enquiry correctly?** Roughly two-thirds of the 12 cases received the expected category, such as a booking request or a pricing enquiry.
- **Summary anchor coverage (46.4%) — Did the summary preserve the important facts?** The evaluator checks for expected factual anchors, such as event type, date, venue and time. This score means fewer than half of the expected anchors were found in the summaries.
- **Missing-information recall (25.0%) — Did it identify the details still needed?** Of the follow-up details marked as necessary in the reference cases, the model identified only one-quarter. For a booking, that might mean noticing that the date, location or budget still needs to be confirmed.
- **Human-review accuracy (91.7%) — Did it know when a person should review the case?** The review/no-review decision matched the expected decision in 11 of 12 cases.

These metrics measure different things. A response can be perfectly valid JSON yet put an enquiry in the wrong category, omit key facts or fail to ask for essential details. That is why the evaluation uses multiple checks rather than treating schema validity as overall quality.

## AI evaluation: latest local findings

The latest local v13 evaluation passed **12 of 12 synthetic cases** on the final API result. The evaluator reports 100% schema validity, category accuracy, summary-anchor coverage, missing-information recall and human-review accuracy across this dataset.

The raw model result is reported separately: it passed **11 of 12 cases**, with missing-information recall of **91.7%**. The remaining raw-model miss was a conflicting-date case where the model omitted the confirmed event date from its follow-up requirements. A narrow deterministic safety override adds that detail to the final result. Reporting both outputs keeps the model's limitation visible and avoids presenting a post-processing improvement as a model improvement.

### Local unit-test and coverage baseline

- **35/35 unit tests passed** across six test files.
- **77.9% line coverage overall** (76.53% statements, 75% branches, 87.03% functions).
- AI evaluation cases: 100% line coverage.
- AI triage logic: 100% line coverage.
- Evaluator: 98.59% line coverage.
- Safety checks: 100% line coverage.
- Cloudflare AI endpoint: 68.62% line coverage.

Coverage is a measure of executed code, not a guarantee of test quality or correctness. The endpoint's uncovered branches are the next investigation target.

### What this does—and does not—show

The result demonstrates a functioning evaluation harness, explicit expected behaviour, case-level diagnostics, evaluator tests and a deterministic control for one known conflict-date failure. It does **not** establish 100% real-world accuracy: the dataset contains only 12 synthetic cases, the results are from a local run, and the current scoring criteria have defined limits.

Next work is to expand the golden dataset, exercise endpoint failure paths and safety boundaries, and validate the feature through broader application journeys. The protected evaluation endpoint is not connected to public enquiry submission and the dataset contains no live customer data.

## Run the portfolio locally

Requirements: a current Node.js release and npm.

```bash
git clone https://github.com/Floodzie2/qualitypeople-portfolio.git
cd qualitypeople-portfolio
npm install
npm run dev
```

Useful checks before publishing:

```bash
npm run typecheck
npm run lint
npm run build
```

## Architecture and publishing

The portfolio and application are maintained in separate repositories and deployed independently to Cloudflare Pages. Changes should be made on a branch, reviewed in a pull request, and published only after the relevant checks and preview have been reviewed.

## Guiding principle

**Evidence over claims.** A passing build shows that the site builds; automated tests provide evidence about specific behaviours; neither should be presented as proof of qualities they do not measure.
