# Skuad Assignment

Live on [https://skuad.rishabhjain.dev]

## Tools used

- Next.Js - Frontend, Backend
- Vercel - Deplyment
- TailwindCSS - Design

## Setup

### Pre-requisite

- FaunaDB account
- Node.JS installed
- Yarn installed

### Steps

- Clone the repo
- Import schema.gql to faunadb for creating appropriate indexes and collections.
- Run - `yarn`
- Copy `.env.sample` file to `.env`
- Add the value of in the FaunaDB secret key in the `env` file
- Run - `yarn dev`

## TODO

- Search
- Tags
- Testcases - UI (Cypress/TestProject.io), UnitTest - Jest, Snapshots - Enzyme
- Condition for only having 1 open threads
- Promotion to MOD in a board.
