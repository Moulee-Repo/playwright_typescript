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

## Run tests on BrowserStack

Copy `.env.example` to `.env` and set your BrowserStack username and access
key. `.env` is ignored by Git and excluded from the Docker build context. The
BrowserStack profile runs both BDD and native suites on Chromium in Windows 11;
optional browser, OS, project, and build settings are in `.env.example`.

```sh
npm run test:browserstack
```

To run the BrowserStack profile from the Docker image, use the same `.env` file:

```sh
docker compose run --build --rm playwright-tests npm run test:browserstack
```

The GitHub Actions workflow also has a manual `workflow_dispatch` run for
BrowserStack. Add `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY` as
repository Actions secrets before starting it.
