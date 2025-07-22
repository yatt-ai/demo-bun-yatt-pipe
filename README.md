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

# Generate JSON test report
bun test --coverage --reporter=json > test-results.json
```

## Running the Application

```bash
bun src/index.ts
```

## Features

- TypeScript support out of the box
- Built-in test runner with Jest-like syntax
- Coverage reports
- Watch mode
- Multiple reporter formats

## Comparison with Go's Testing

Bun's test runner is similar to Go's testing framework with some key differences:

1. **Syntax**: Bun uses a Jest-like syntax with `describe`, `test`, and `expect` while Go uses function-based tests
2. **Built-in assertions**: Bun has built-in assertions like `toBe`, `toEqual`, etc., while Go requires a separate library like Testify
3. **Test organization**: Bun allows nesting test suites with `describe` blocks
4. **Reports**: Both support various output formats (JSON, etc.)
5. **Coverage**: Both provide code coverage analysis

## Test Example

```typescript
import { describe, test, expect } from "bun:test";
import { add } from "./calculator";

describe("add", () => {
  test("should add positive numbers", () => {
    expect(add(5, 3)).toBe(8);
  });
});
```
# demo-bun-yatt-pipe
