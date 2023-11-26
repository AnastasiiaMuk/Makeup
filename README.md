# Makeup.Automation
JS automation tests using Cypress

## Setup
1. Clone this repository
2. Install the dependencies of this project with 'npm install'

## Run test suite
1. Open terminal
2. Navigate to the path the project was cloned in
3. Run 'npx cypress open'
 
## Create Allure report
1. Open terminal
2. Navigate to the path the project was cloned in
3. Run 'npm run cy:test'
4. Run 'npx allure generate allure-results --clean -o allure-report'
5. Run 'npx allure open'