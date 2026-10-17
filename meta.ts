export interface Source {
  /** Any source the `skills` CLI accepts: `owner/repo`, `owner/repo/sub/path`, ... */
  source: string
  category: string
  /** Skill names to pick; omitted means every skill in the source. */
  skills?: string[]
}

export const sources: Source[] = [
  {
    source: 'mattpocock/skills',
    category: 'Workflow',
    skills: [
      'grill-me',
      'grilling',
      'handoff',
      'to-questionnaire',
      'writing-for-agents',
      'teach',
      'code-review',
      'codebase-design',
      'research',
    ],
  },
  {
    source: 'shadcn/improve',
    category: 'Workflow',
  },
  {
    source: 'kucherenko/jscpd/skills/dry-refactoring',
    category: 'Workflow',
  },
  {
    source: 'AminBlg/SimpleEnglish',
    category: 'Writing',
  },
  {
    source: 'cursor/plugins/pstack/skills/unslop',
    category: 'Writing',
  },
  {
    source: 'ayghri/i-have-adhd',
    category: 'Writing',
  },
  {
    source: 'antfu/skills',
    category: 'Workflow',
    skills: [
      'antfu',
      'antfu-create-pr',
      'nuxt',
      'pinia',
      'pnpm',
      'vite',
      'vitest',
      'vue',
    ],
  },
  {
    source: 'vuejs-ai/skills',
    category: 'Vue & Nuxt',
    skills: [
      'vue-best-practices',
      'vue-router-best-practices',
      'vue-pinia-best-practices',
      'vue-testing-best-practices',
      'vue-debug-guides',
      'create-adaptable-composable',
    ],
  },
  {
    source: 'onmax/nuxt-skills',
    category: 'Vue & Nuxt',
    skills: [
      'nuxt-modules',
    ],
  },
  {
    source: 'anthropics/skills/skills/frontend-design',
    category: 'Design',
  },
  {
    source: 'vercel-labs/agent-browser',
    category: 'Browser',
  },
  {
    source: 'vercel-labs/agent-skills',
    category: 'React',
    skills: [
      'vercel-react-best-practices',
      'vercel-react-view-transitions',
      'vercel-composition-patterns',
    ],
  },
  {
    source: 'vercel-labs/agent-skills',
    category: 'Design',
    skills: [
      'web-design-guidelines',
    ],
  },
  {
    source: 'vercel-labs/agent-skills',
    category: 'Writing',
    skills: [
      'writing-guidelines',
    ],
  },
  {
    source: 'aurorascharff/nextjs-app-architecture-skill',
    category: 'React',
  },
  {
    source: 'vercel/next.js/skills/next-partial-prefetching-optimizer',
    category: 'React',
  },
  {
    source: 'cursor/plugins/cursor-team-kit',
    category: 'Workflow',
    skills: [
      'deslop',
      'thermo-nuclear-code-quality-review',
    ],
  },
  {
    source: 'cursor/plugins/pstack',
    category: 'Workflow',
    skills: [
      'tdd',
      'create-verification-skill',
      'maintain-verification-skill',
      'bro',
      'how',
      'why',
    ],
  },
  {
    source: 'cursor/plugins/pstack',
    category: 'Writing',
    skills: [
      'no-comments',
      'technical-writing',
    ],
  },
  {
    source: 'cursor/plugins/pstack',
    category: 'TypeScript',
    skills: [
      'typescript-best-practices',
    ],
  },
  {
    source: 'hashicorp/agent-skills/plugins/terraform',
    category: 'Infrastructure',
    skills: [
      'terraform-style-guide',
    ],
  },
  {
    source: 'humanlayer/skills/plugins/show-me/skills/show-me',
    category: 'Workflow',
  },
  {
    source: 'humanlayer/skills/plugins/visual-pr/skills/visual-pr',
    category: 'Workflow',
  },
  {
    source: 'tt-a1i/archify',
    category: 'Workflow',
  },
  {
    source: 'wheresryan22/anatomy',
    category: 'Design',
  },
  {
    source: 'emilkowalski/skills',
    category: 'Design',
    skills: [
      'emil-design-eng',
      'animate',
      'review-animations',
      'improve-animations',
      'find-animation-opportunities',
      'animation-performance',
      'pick-ui-library',
    ],
  },
  {
    source: 'GoogleChrome/modern-web-guidance',
    category: 'Browser',
  },
  {
    source: 'slidevjs/slidev/skills/slidev',
    category: 'Writing',
  },
]
