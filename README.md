# Project Title

Employee payslip for a flexible pay cycle

### Prerequisites
- Node
- mocha installed globally: $ npm install -g mocha

### Installing
- Clone the repo and `cd employee-payslip`
- Run `npm install` to install all the dependencies.
- Run `npm start`. This will start a node server on port 4000

### Test API
- URL `http://localhost:4000/payslip`
- Request Type POST
- sample payload `{
            "firstName": "Bharat",
            "lastName": "Bhushan",
            "annualSalary": 60050,
            "superRate": 9,
            "startDate": "01 March – 31 March"
        }
        `
## API Test Cases
 `npm run test`