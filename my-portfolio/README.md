# Portfolio Website

This repository contains the source code for a React based portfolio website located in the `my-portfolio` directory.

## Prerequisites

- [Node.js](https://nodejs.org/) and npm installed.
- A command line terminal.

## Running the site locally

1. Change into the project folder:
   ```bash
   cd my-portfolio
   ```
2. Install dependencies from `package.json`:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm start
   ```
   The site should open at [http://localhost:3000](http://localhost:3000). The server runs only on your machine so it is safe to experiment.

## Safe usage tips

- Install only the dependencies listed in this repository and avoid running commands from untrusted sources.
- You can run `npm audit` after installing dependencies to check for known vulnerabilities.
- Keep the server bound to localhost (default behavior of `npm start`) and do not expose it to the internet unless you fully trust the code.

## Running tests

From inside the `my-portfolio` folder you can run the tests once with:
```bash
CI=true npm test --silent
```
