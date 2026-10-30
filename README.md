# playwright_typescript

## Run tests in Docker

Docker runs the BDD and native Playwright suites using the official Playwright
image pinned to the same version as `@playwright/test` in `package-lock.json`.
Reports and test results are written to the host `reports/` and `test-results/`
directories.

```sh
docker compose run --build --rm playwright-tests
```

To run one suite, override the default command:

```sh
docker compose run --build --rm playwright-tests npm run test:native
docker compose run --build --rm playwright-tests npm run test:bdd
```

The native suite uses the bundled Chromium, Firefox, and WebKit browsers in
Docker. Branded Chrome and Edge projects remain available when running outside
Docker. If a visual snapshot has not yet been recorded on Linux, create and
review the Docker baseline before running the suite in CI:

```sh
docker compose run --build --rm playwright-tests npx playwright test --config=playwright.native.config.ts --update-snapshots
```
