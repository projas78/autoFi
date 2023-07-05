# AutoFi Challenge

This project is a test automation framework using Cypress for the AutoFi application.

## Getting Started

These instructions will guide you through the process of setting up and running the project.

## Prerequisites

Before running the project, make sure you have the following software installed on your machine:

- Node.js

## Installation

1. Clone the repository:

```bash
git clone https://github.com/projas78/autoFi
```

2. Navigate to the project directory:

```bash
cd autoFi
```

3. Install dependencies:

```bash
npm install
```
### TypeScript Configuration

Create a `tsconfig.json` file in the project root directory.

Add the following configuration to the `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```

#### Cypress Configuration

The Cypress configuration is already provided by default in the project.

### Running the Tests

To run the tests, follow these steps:

1. Open Cypress:

```bash
npm run cy:open
```

2. Select the desired test file from the Cypress interface to run the tests.

### Creating a Test

To create a new test, follow these steps:

1. Create a new `.spec.ts` file in the `cypress/integration` directory.

2. Write your test using Cypress commands and assertions.

### Documentation

For more detailed information about the project and how to use it, please refer to the full documentation.

### License

This project is licensed under the [License Name]. See the `LICENSE` file for details.

Feel free to modify the README as needed and add any additional sections or information that would be relevant for someone new to Cypress and test automation.