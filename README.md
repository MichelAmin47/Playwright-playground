# Playwright-playground

Node: v14.15.4
Npm: v6.14.10

## Playwright attributes
Playwright comes with auto-wait built in meaning it waits for elements to be actionable prior to performing actions.

Locators are the central piece of Playwright's auto-waiting and retry-ability. Locators represent a way to find element(s) on the page at any moment and are used to perform actions on elements such as .click .fill etc. Custom locators can be created with the page.locator(selector[, options]) method. 

Selectors are strings that are used to create Locators. Playwright supports many different selectors like Text, CSS, XPath and many more. Learn more about available selectors and how to pick one in this in-depth guide.

### Test Isolation
Playwright Test is based on the concept of test fixtures such as the built in page fixture, which is passed into your test. Pages are isolated between tests due to the Browser Context, which is equivalent to a brand new browser profile, where every test gets a fresh environment, even when multiple tests run in a single Browser.

### CSS
Selectors defined as engine=body or in short-form can be combined with the >> token, e.g. selector1 >> selector2 >> selectors3. When selectors are chained, the next one is queried relative to the previous one's result.

For Example,

css=article >> css=.bar > .baz >> css=span[attr=value]

### Running tests in TypeScript

Running a single test file
npx playwright test landing-page.spec.ts

Running tests in headed mode
npx playwright test landing-page.spec.ts --headed

Running Tests on specific browsers
npx playwright test landing-page.ts --project=chromium
