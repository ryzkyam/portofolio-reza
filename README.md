c:\Project-Portofolio-Reza/
├── apps/
│   └── web/                                # React 18 + Vite + TypeScript application
│       ├── src/
│       │   ├── components/
│       │   │   ├── Navbar.tsx              # Sticky glassmorphic navbar with active scroll tracking & mobile drawer
│       │   │   ├── Hero.tsx                # Hero section with narrative copy, gradient title, CTAs, metrics
│       │   │   ├── TelemetryTerminal.tsx   # Interactive terminal with test suites, command runner & node status
│       │   │   ├── About.tsx               # Multidisciplinary profile, quick metrics, and 3 triad domain cards
│       │   │   ├── Projects.tsx            # Filterable case studies with category tabs (All, QA, BA, FullStack)
│       │   │   ├── ProjectModal.tsx        # In-depth architectural case study modal dialog (Esc/backdrop close)
│       │   │   ├── Skills.tsx              # 4-column Comprehensive Technical Matrix
│       │   │   ├── Certificates.tsx        # 4 verified industry credentials with IDs
│       │   │   ├── Contact.tsx             # Interactive proposal submission form with validation & alerts
│       │   │   └── Footer.tsx              # Footer with copyright and network links
│       │   ├── data/
│       │   │   └── portfolioData.ts        # Typed portfolio data models & case studies
│       │   ├── types/
│       │   │   └── portfolio.ts            # Strict TypeScript interfaces
│       │   ├── App.tsx                     # Main layout with atmospheric background glows
│       │   ├── index.css                   # Custom scrollbars, fonts & typography definitions
│       │   └── main.tsx                    # React DOM entry point
│       ├── index.html                      # Plus Jakarta Sans, Inter & Material Symbols Outlined
│       ├── tailwind.config.js              # Tailwind configuration extending shared preset
│       └── vite.config.ts                  # Vite bundler configuration with port 3000
├── packages/
│   ├── config/                             # Shared workspace configuration
│   │   ├── tailwind-preset.js              # "Obsidian Prism" theme tokens (colors, fonts, radii, spacing)
│   │   └── package.json
│   └── ui/                                 # Reusable UI component package
│       ├── src/
│       │   ├── Button.tsx                  # Primary glow, secondary cyan & ghost action buttons
│       │   ├── Badge.tsx                   # QA, Full Stack & BA status pill badges
│       │   ├── Card.tsx                    # Frosted glass Level 1 & Level 2 elevation containers
│       │   └── index.ts
│       ├── tsconfig.json
│       └── package.json
├── pnpm-workspace.yaml                     # Workspace package definitions
├── package.json                            # Root scripts runner
└── README.md                               # Project documentation
