# <Drozdovsky Automation Tests JS>

## Motivation
I built this project to harness the power of CodeceptJS for automated testing. As a tester, I wanted to streamline the testing process, improve test coverage, and ensure the quality of our software products.

## Why CodeceptJS?
CodeceptJS offers an elegant and efficient way to write end-to-end tests for web applications. Its simplicity and versatility make it an ideal choice for creating automated tests that mimic real user interactions.

## Problem Solving
This project solves the challenge of manual testing by automating the testing process. It helps identify bugs and regressions early in the development cycle, ensuring a more reliable and stable application.

## What I Learned
Throughout this project, I learned the following:

- **CodeceptJS Fundamentals:** I gained a deep understanding of CodeceptJS and its core concepts, such as Actors, Helpers, and Step Objects.

- **Test Scripting:** I mastered the art of writing clear and concise test scripts that simulate user interactions.

- **Custom Helpers:** I created custom helpers to extend CodeceptJS's capabilities, such as checking for element existence and validating responses.

- **Test Organization:** I learned how to structure tests, scenarios, and test data for maintainability and scalability.

- **Continuous Integration:** I integrated automated tests into our CI/CD pipeline to ensure that tests run automatically on each code push.

- **Reporting:** I implemented reporting tools to generate test reports that provide insights into test results.

By developing this CodeceptJS-based testing project, I've enhanced my skills as an automated tester and contributed to the overall quality of our software products.

## Installation

To run the automated tests in this project, you need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (Node Package Manager) installed on your system. Follow these steps to set up the project:

1. **Clone the Repository:** 
git clone https://github.com/yourusername/your-testing-project.git

2. **Navigate to the Project Directory:**
cd your-testing-project

3. **Install CodeceptJS and Dependencies:**
npm install codeceptjs --save-dev

4. **Initialize CodeceptJS:**
npx codeceptjs init

5. **Install CodeceptJS Helpers:**
Depending on your testing needs, you may want to install additional helpers (e.g., Playwright, Puppeteer, WebDriver) and plugins. Refer to the [CodeceptJS Documentation](https://codecept.io/helpers/) for more information on available helpers.

6. **Create Your Tests:**
Write your test scripts using CodeceptJS. Place your test files in the appropriate directory (e.g., `tests`).

## Running Tests

You can execute the tests using the following command:
npx codeceptjs run