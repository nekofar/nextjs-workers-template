# Next.js Template for Cloudflare Workers

[![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/nekofar/nextjs-workers-template?include_prereleases)](https://github.com/nekofar/nextjs-workers-template/releases)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/nekofar/nextjs-workers-template/build.yml)](https://github.com/nekofar/nextjs-workers-template/actions/workflows/build.yml)
[![GitHub](https://img.shields.io/github/license/nekofar/nextjs-workers-template)](https://github.com/nekofar/nextjs-workers-template/blob/master/LICENSE)
[![X (formerly Twitter) Follow](https://img.shields.io/badge/follow-%40nekofar-ffffff?logo=x&style=flat)](https://x.com/nekofar)
[![Farcaster (Warpcast) Follow](https://img.shields.io/badge/follow-%40nekofar-855DCD.svg?logo=farcaster&logoColor=f5f5f5&style=flat)](https://warpcast.com/nekofar)
[![Donate](https://img.shields.io/badge/donate-nekofar.crypto-a2b9bc?logo=ko-fi&logoColor=white)](https://ud.me/nekofar.crypto)

> [!WARNING]
> Please note that the project is currently in an experimental phase, and it is subject to significant changes as it
> progresses.

## Description

A modern, production-ready template for building Next.js applications that run on Cloudflare Workers. This template comes pre-configured with TypeScript, React 19, Tailwind CSS, shadcn/ui components, and OpenNext for seamless deployment to Cloudflare's global edge network.

## Using This Template

You can use this repository as a template to create a new GitHub repository with the same directory structure and files.
Here's how:

1. On the [repository page](https://github.com/nekofar/nextjs-workers-template), click the **Use this template**
   button.
2. Choose the owner of the new repository and enter a repository name.
3. Optionally, add a description for your repository.
4. Choose the repository visibility (Public or Private).
5. Click **Create repository from template** to create your new repository.

After creating your repository from this template, clone it and install the dependencies:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
cd YOUR-REPOSITORY
pnpm install
```

## Usage

Here's how you can use this template:

- **Building**: Run `pnpm run build` to compile your TypeScript MCP server.
- **Running Tests**: Execute `pnpm run test` to run the Vitest suite with coverage enforcement (minimum 60% lines/statements/functions and 50% branches). Use `pnpm run test:watch` for local development when you don't need coverage gating.
- **Linting**: Use `pnpm run lint` to lint your TypeScript code with Biome.
- **Development**: Run `pnpm run dev` to start the MCP server in development mode.
- **Inspector**: Run `pnpm run inspector` to launch the MCP Inspector for debugging and testing your server interactively.

## License

This project is licensed under the Apache-2.0 License - see
the [LICENSE](https://github.com/nekofar/nextjs-workers-template/blob/master/LICENSE) file for details.
