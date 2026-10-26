# QualityPeople engineering portfolio

**Building quality in. Proving it.**

Live portfolio: [howIbuiltit.qualitypeople.ie](https://howIbuiltit.qualitypeople.ie)  
Application: [www.qualitypeople.ie](https://www.qualitypeople.ie)  
Portfolio source: [GitHub](https://github.com/Floodzie2/qualitypeople-portfolio)  
Application source: [GitHub](https://github.com/Floodzie2/qualitypeople-app)

## Why this project exists

QualityPeople is a practical learning and portfolio project documenting how a small web application can be developed and tested with modern engineering practices. It connects hands-on implementation with a quality-engineering approach: small changes, automated feedback, explicit environments, and evidence before release.

The portfolio is intentionally transparent about what is implemented, what is planned, and what the tests have—and have not—demonstrated.

## What it covers

- **Distributed development:** a MacBook Pro used as a VS Code client, an M4 Mac mini for development and orchestration, and a planned Linux-based QA machine.
- **Quality engineering:** TypeScript, Playwright browser automation, API checks, regression strategy and manual system-integration testing.
- **Delivery:** separate GitHub repositories and Cloudflare Pages destinations for the application and portfolio.
- **Performance engineering:** planned repeatable JMeter load tests, with AI-assisted interpretation treated as something to validate rather than trust automatically.
- **AI quality engineering:** a protected, evaluation-only enquiry-triage endpoint tested against 12 synthetic cases, including ambiguity, conflicting dates and prompt injection.

## AI evaluation: current reported baseline

The latest documented run passes **7 of 12 cases** end to end. The evaluator reports 100% schema validity, 91.7% category accuracy, 91.7% summary-anchor coverage, 58.3% missing-information recall and 100% human-review accuracy.

These figures need context: explicit evaluator calibration improved how paraphrases are scored, so the increase in all-check passes is not evidence by itself that the model improved. Missing-information completeness and a prompt-injection case remain unresolved. The endpoint is not connected to public enquiry submission, and the small synthetic set does not establish production readiness.

See the [AI triage evaluation pull request](https://github.com/Floodzie2/qualitypeople-app/pull/7) and the [experiment log](https://github.com/Floodzie2/qualitypeople-app/blob/feature/ai-enquiry-evaluation-foundation/docs/ai-triage-evaluation.md).

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
