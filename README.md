# Bun Calculator Demo

A simple calculator demo with Bun's built-in test runner.

## Installation

```bash
# Install Bun if you don't have it
curl -fsSL https://bun.sh/install | bash

# Install dependencies
bun install
```

## Running Tests

```bash
# Run all tests
bun test

# Run tests in watch mode
bun test --watch

# Run tests with coverage
bun test --coverage
```

## Generating Test Reports

### JUnit XML Report

```bash
# Generate JUnit XML report
bun test --reporter=junit --reporter-outfile=test-results.xml
```

## Running the Application

```bash
bun src/index.ts
```
