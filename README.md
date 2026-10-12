# @jvmsangkal/skills

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

JV's curated agent skills.

A hand-picked set of [agent skills](https://agentskills.io) from across the ecosystem, declared in one npm package so a project gets all of them with a single install. 

Powered by [skills-npm](https://github.com/antfu/skills-npm).

## Setup

Install [skills-npm](https://github.com/antfu/skills-npm) and this pack as dev dependencies, then let skills-npm wire itself into your `prepare` script:

```bash
pnpm i -D skills-npm @jvmsangkal/skills
pnpx skills-npm setup
```

`setup` adds `"prepare": "skills-npm"` to your `package.json` and runs the first sync. From then on every `npm install` keeps the skills in sync. It would looks like this

```json
{
  "scripts": {
    "prepare": "skills-npm"
  },
  "devDependencies": {
    "skills-npm": "^4.0.0",
    "@jvmsangkal/skills": "^1.0.0"
  }
}
```

What you get:

- Every skill listed below is installed into `.agents/skills/<name>` and linked into the skill directories of the agents detected on your machine (Claude Code, Cursor, OpenCode, Codex, ...). Pass `--agents claude-code,cursor` to choose explicitly.
- `skills-npm-lock.json` and `skills-lock.json` record what came from where. Commit them.
- Removing `@jvmsangkal/skills` from your dependencies removes the skills on the next sync.

The pack tracks each upstream's default branch. To pull in the latest upstream changes without waiting for a new pack release:

```bash
pnpx skills update
```

## Skills

<!-- skills:start -->

### Workflow

| Skill | Description | Source |
| --- | --- | --- |
| [grill-me](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/grill-me/SKILL.md) | A relentless interview to sharpen a plan or design. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [grilling](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/grilling/SKILL.md) | Grill the user relentlessly about a plan, decision, or idea. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [handoff](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/handoff/SKILL.md) | Compact the current conversation into a handoff document for another agent to pick up. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [to-questionnaire](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/to-questionnaire/SKILL.md) | Turn a decision you can't fully answer into a questionnaire for someone else to fill in. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [writing-for-agents](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/writing-for-agents/SKILL.md) | Writing documents for agents. Use when creating or editing skills, or modifying AGENTS.md or CLAUDE.md. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [teach](https://github.com/mattpocock/skills/blob/HEAD/skills/productivity/teach/SKILL.md) | Teach the user a new skill or concept, within this workspace. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [code-review](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/code-review/SKILL.md) | Review the changes since a fixed point (commit, branch, tag, or merge-base) along two axes: Standards (does the code follow this repo's documented coding standards?) and Spec (does the code match what the originating issue/spec asked for?). | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [codebase-design](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/codebase-design/SKILL.md) | Shared vocabulary for designing deep modules. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [research](https://github.com/mattpocock/skills/blob/HEAD/skills/engineering/research/SKILL.md) | Investigate a question against high-trust primary sources and capture the findings as a Markdown file in the repo. | [mattpocock/skills](https://github.com/mattpocock/skills) |
| [improve](https://github.com/shadcn/improve/blob/HEAD/skills/improve/SKILL.md) | Survey any codebase as a senior advisor and produce prioritized, self-contained implementation plans for OTHER models/agents to execute. | [shadcn/improve](https://github.com/shadcn/improve) |
| [dry-refactoring](https://github.com/kucherenko/jscpd/blob/HEAD/skills/dry-refactoring/SKILL.md) | Guided workflow to eliminate copy-paste duplication detected by jscpd. | [kucherenko/jscpd](https://github.com/kucherenko/jscpd/tree/HEAD/skills/dry-refactoring) |
| [antfu](https://github.com/antfu/skills/blob/HEAD/skills/antfu/SKILL.md) | Anthony Fu's opinionated tooling and conventions for JavaScript/TypeScript projects. | [antfu/skills](https://github.com/antfu/skills) |
| [antfu-create-pr](https://github.com/antfu/skills/blob/HEAD/skills/antfu-create-pr/SKILL.md) | Create a reviewable GitHub pull request from the current branch with a Conventional Commits title, a concise evidence-based body, and before/after screenshots for UI changes. | [antfu/skills](https://github.com/antfu/skills) |
| [deslop](https://github.com/cursor/plugins/blob/HEAD/cursor-team-kit/skills/deslop/SKILL.md) | Remove AI-generated code slop and clean up code style | [cursor/plugins](https://github.com/cursor/plugins/tree/HEAD/cursor-team-kit) |
| [thermo-nuclear-code-quality-review](https://github.com/cursor/plugins/blob/HEAD/cursor-team-kit/skills/thermo-nuclear-code-quality-review/SKILL.md) | Run an extremely strict maintainability review for abstraction quality, giant files, and spaghetti-condition growth. | [cursor/plugins](https://github.com/cursor/plugins/tree/HEAD/cursor-team-kit) |
| [tdd](https://github.com/cursor/plugins/blob/HEAD/pstack/skills/tdd/SKILL.md) | Use only when the user explicitly asks for TDD, a failing test, or a regression test, OR when the bug has an obvious cheap local test target. | [cursor/plugins](https://github.com/cursor/plugins/tree/HEAD/pstack) |
| [create-verification-skill](https://github.com/cursor/plugins/blob/HEAD/pstack/skills/create-verification-skill/SKILL.md) | Generate a project-local verification skill that drives your app the way a user does - any language, framework, or platform. | [cursor/plugins](https://github.com/cursor/plugins/tree/HEAD/pstack) |
| [maintain-verification-skill](https://github.com/cursor/plugins/blob/HEAD/pstack/skills/maintain-verification-skill/SKILL.md) | Periodic pass that keeps a project's verification skill and feature map honest: parallel source readers per feature, one live session driving every feature, at most one PR of proven corrections. | [cursor/plugins](https://github.com/cursor/plugins/tree/HEAD/pstack) |
| [bro](https://github.com/cursor/plugins/blob/HEAD/pstack/skills/bro/SKILL.md) | Restate the last message in plain human language, with no jargon. | [cursor/plugins](https://github.com/cursor/plugins/tree/HEAD/pstack) |
| [how](https://github.com/cursor/plugins/blob/HEAD/pstack/skills/how/SKILL.md) | Use for "how does X work", code walkthroughs before changing something, and placement / ownership / layering questions ("where should this live", "which package owns this", "is this the right layer"). | [cursor/plugins](https://github.com/cursor/plugins/tree/HEAD/pstack) |
| [why](https://github.com/cursor/plugins/blob/HEAD/pstack/skills/why/SKILL.md) | Use for 'why does X work this way', 'why we picked Y', design rationale, regressions, postmortems, or data-backed thresholds. | [cursor/plugins](https://github.com/cursor/plugins/tree/HEAD/pstack) |
| [show-me](https://github.com/humanlayer/skills/blob/HEAD/plugins/show-me/skills/show-me/SKILL.md) | Help the user understand the current topic visually with concise diagrams, code-shape sketches, and focused HTML artifacts. | [humanlayer/skills](https://github.com/humanlayer/skills/tree/HEAD/plugins/show-me/skills/show-me) |
| [visual-pr](https://github.com/humanlayer/skills/blob/HEAD/plugins/visual-pr/skills/visual-pr/SKILL.md) | Only use when the user explicitly invokes this skill by name. | [humanlayer/skills](https://github.com/humanlayer/skills/tree/HEAD/plugins/visual-pr/skills/visual-pr) |

### Writing

| Skill | Description | Source |
| --- | --- | --- |
| [simple-english](https://github.com/AminBlg/SimpleEnglish/blob/HEAD/skills/simple-english/SKILL.md) | Write or rewrite text in plain, layman-readable English in the spirit of ASD-STE100 Simplified Technical English: short sentences, active voice, simple tenses, one word one meaning, condition before command, every technical term defined at first use, no AI slop. | [AminBlg/SimpleEnglish](https://github.com/AminBlg/SimpleEnglish) |
| [unslop](https://github.com/cursor/plugins/blob/HEAD/pstack/skills/unslop/SKILL.md) | Cut AI tells from any writing. Must always apply. | [cursor/plugins](https://github.com/cursor/plugins/tree/HEAD/pstack/skills/unslop) |
| [i-have-adhd](https://github.com/ayghri/i-have-adhd/blob/HEAD/skills/i-have-adhd/SKILL.md) | Shape output for a reader with ADHD: lead with the next action, number multi-step work, restate state across turns, suppress tangents, give specific time estimates, make wins visible. | [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) |
| [writing-guidelines](https://github.com/vercel-labs/agent-skills/blob/HEAD/skills/writing-guidelines/SKILL.md) | Review docs/prose for Writing Guidelines compliance. | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |
| [no-comments](https://github.com/cursor/plugins/blob/HEAD/pstack/skills/no-comments/SKILL.md) | Spawn Comment Sicko, fix accepted findings, and offer encodings for claimed constraints. | [cursor/plugins](https://github.com/cursor/plugins/tree/HEAD/pstack) |
| [technical-writing](https://github.com/cursor/plugins/blob/HEAD/pstack/skills/technical-writing/SKILL.md) | Layered technical-writing standard: Diátaxis structure, Google developer style sentences, STE instruction rules, Global English syntax. | [cursor/plugins](https://github.com/cursor/plugins/tree/HEAD/pstack) |

### Vue & Nuxt

| Skill | Description | Source |
| --- | --- | --- |
| [vue-best-practices](https://github.com/vuejs-ai/skills/blob/HEAD/skills/vue-best-practices/SKILL.md) | MUST be used for Vue.js tasks. Strongly recommends Composition API with `<script setup>` and TypeScript as the standard approach. | [vuejs-ai/skills](https://github.com/vuejs-ai/skills) |
| [vue-router-best-practices](https://github.com/vuejs-ai/skills/blob/HEAD/skills/vue-router-best-practices/SKILL.md) | Vue Router 4 patterns, navigation guards, route params, and route-component lifecycle interactions. | [vuejs-ai/skills](https://github.com/vuejs-ai/skills) |
| [vue-pinia-best-practices](https://github.com/vuejs-ai/skills/blob/HEAD/skills/vue-pinia-best-practices/SKILL.md) | Pinia stores, state management patterns, store setup, and reactivity with stores. | [vuejs-ai/skills](https://github.com/vuejs-ai/skills) |
| [vue-testing-best-practices](https://github.com/vuejs-ai/skills/blob/HEAD/skills/vue-testing-best-practices/SKILL.md) | Use for Vue.js testing. Covers Vitest, Vue Test Utils, component testing, mocking, testing patterns, and Playwright for E2E testing. | [vuejs-ai/skills](https://github.com/vuejs-ai/skills) |
| [vue-debug-guides](https://github.com/vuejs-ai/skills/blob/HEAD/skills/vue-debug-guides/SKILL.md) | Vue 3 debugging and error handling for runtime errors, warnings, async failures, and SSR/hydration issues. | [vuejs-ai/skills](https://github.com/vuejs-ai/skills) |
| [create-adaptable-composable](https://github.com/vuejs-ai/skills/blob/HEAD/skills/create-adaptable-composable/SKILL.md) | Create a library-grade Vue composable that accepts maybe-reactive inputs (MaybeRef / MaybeRefOrGetter) so callers can pass a plain value, ref, or getter. | [vuejs-ai/skills](https://github.com/vuejs-ai/skills) |
| [nuxt-modules](https://github.com/onmax/nuxt-skills/blob/HEAD/skills/nuxt-modules/SKILL.md) | Use when creating Nuxt modules: (1) Published npm modules (@nuxtjs/, nuxt-), (2) Local project modules (modules/ directory), (3) Runtime extensions (components, composables, plugins), (4) Server extensions (API routes, middleware), (5) Releasing/publishing modules to npm, (6) Setting up CI/CD workflows for modules. | [onmax/nuxt-skills](https://github.com/onmax/nuxt-skills) |

### Design

| Skill | Description | Source |
| --- | --- | --- |
| [frontend-design](https://github.com/anthropics/skills/blob/HEAD/skills/frontend-design/SKILL.md) | Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. | [anthropics/skills](https://github.com/anthropics/skills/tree/HEAD/skills/frontend-design) |
| [web-design-guidelines](https://github.com/vercel-labs/agent-skills/blob/HEAD/skills/web-design-guidelines/SKILL.md) | Review UI code for Web Interface Guidelines compliance. | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |

### Browser

| Skill | Description | Source |
| --- | --- | --- |
| [agent-browser](https://github.com/vercel-labs/agent-browser/blob/HEAD/skills/agent-browser/SKILL.md) | Browser automation CLI for AI agents. Use when the user needs to interact with websites, including navigating pages, filling forms, clicking buttons, taking screenshots, extracting data, testing web apps, or automating any browser task. | [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) |

### React

| Skill | Description | Source |
| --- | --- | --- |
| [vercel-react-best-practices](https://github.com/vercel-labs/agent-skills/blob/HEAD/skills/react-best-practices/SKILL.md) | React and Next.js performance optimization guidelines from Vercel Engineering. | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |
| [vercel-react-view-transitions](https://github.com/vercel-labs/agent-skills/blob/HEAD/skills/react-view-transitions/SKILL.md) | Guide for implementing smooth, native-feeling animations using React's View Transition API (`<ViewTransition>` component, `addTransitionType`, and CSS view transition pseudo-elements). | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |
| [vercel-composition-patterns](https://github.com/vercel-labs/agent-skills/blob/HEAD/skills/composition-patterns/SKILL.md) | React composition patterns that scale. Use when refactoring components with boolean prop proliferation, building flexible component libraries, or designing reusable APIs. | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |
| [nextjs-app-architecture](https://github.com/aurorascharff/nextjs-app-architecture-skill/blob/HEAD/SKILL.md) | Build or audit Next.js 16 App Router apps using a next-beats-style React Server Components architecture. | [aurorascharff/nextjs-app-architecture-skill](https://github.com/aurorascharff/nextjs-app-architecture-skill) |

### TypeScript

| Skill | Description | Source |
| --- | --- | --- |
| [typescript-best-practices](https://github.com/cursor/plugins/blob/HEAD/pstack/skills/typescript-best-practices/SKILL.md) | TypeScript best practices. Use when reading or editing any .ts or .tsx file. | [cursor/plugins](https://github.com/cursor/plugins/tree/HEAD/pstack) |

### Infrastructure

| Skill | Description | Source |
| --- | --- | --- |
| [terraform-style-guide](https://github.com/hashicorp/agent-skills/blob/HEAD/plugins/terraform/skills/terraform-style-guide/SKILL.md) | Generate Terraform HCL code following HashiCorp's official style conventions and best practices. | [hashicorp/agent-skills](https://github.com/hashicorp/agent-skills/tree/HEAD/plugins/terraform) |

<!-- skills:end -->

## License

[MIT](./LICENSE) License © [JV](https://github.com/jvmsangkal)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@jvmsangkal/skills?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmx.dev/package/@jvmsangkal/skills
[npm-downloads-src]: https://img.shields.io/npm/dm/@jvmsangkal/skills?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmx.dev/package/@jvmsangkal/skills
[license-src]: https://img.shields.io/github/license/jvmsangkal/skills-pack.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/jvmsangkal/skills-pack/blob/main/LICENSE

Based on [antfu/skills-pack](https://github.com/antfu/skills-pack) (MIT).
