# Tamper code-review-checker

[![Quality Gateway](https://github.com/marco-souza/code-review-checker/actions/workflows/quality-gateway.yml/badge.svg)](https://github.com/marco-souza/code-review-checker/actions/workflows/quality-gateway.yml)
[![Release](https://github.com/marco-souza/code-review-checker/actions/workflows/gh-release.yml/badge.svg)](https://github.com/marco-souza/code-review-checker/actions/workflows/gh-release.yml)

Tampermonkey script which gives you a code review checklist for your pull
requests.

## Tech Stack 

![SolidJS](https://img.shields.io/badge/SolidJS-2c4f7c?style=for-the-badge&logo=solid&logoColor=c8c9cb)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

## Demo

https://github.com/user-attachments/assets/01618416-79aa-42cd-9d26-abc6d90e41af

## Features

- check items you already review
- send comments to the pull request

## Installation

1. Install Tampermonkey
2. Create a script (develop or production)

### Building a dev script

```bash
bun Install
bun dev
```

### Building a production script

```bash
bun install
bun run build
bun preview
```

## Usage

1. Open a pull request
2. Open the review button
3. Check the items you review
