# Reza Rizki Ramadhan — Engineering Portfolio Monorepo

A high-performance React + Vite monorepo showcasing the multidisciplinary convergence of **Full-Stack Architecture**, **Rigorous Quality Assurance**, and **Systems-Level Business Analysis**.

Engineered adhering to the **Obsidian Prism** design system specification (`DESIGN.md`).

---

## 🏛️ Monorepo Architecture

This repository is structured as a scalable pnpm/npm workspace monorepo:

```text
Project-Portofolio-Reza/
├── apps/
│   └── web/                   # Vite + React 18 + TypeScript portfolio application
│       ├── src/
│       │   ├── components/    # Navbar, Hero, TelemetryTerminal, About, Projects, etc.
│       │   ├── data/          # Structured portfolio case studies & credentials
│       │   ├── types/         # Strict TypeScript type definitions
│       │   ├── App.tsx        # Application root with active-scroll tracking
│       │   ├── index.css      # Custom styling & font layer configuration
│       │   └── main.tsx       # React DOM root
│       ├── index.html         # Web shell with typography & symbols
│       ├── tailwind.config.js # Extended theme preset consumer
│       └── vite.config.ts     # Bundler configuration
├── packages/
│   ├── config/                # Shared design system tokens & Tailwind preset
│   │   ├── tailwind-preset.js # Obsidian Prism colors, typography & spacing
│   │   └── package.json
│   └── ui/                    # Shared component primitives
│       ├── src/
│       │   ├── Button.tsx     # Primary, secondary & ghost action components
│       │   ├── Badge.tsx      # Multi-discipline glowing pill indicators
│       │   ├── Card.tsx       # Frosted glass Level 1 & Level 2 elevation cards
│       │   └── index.ts
│       └── package.json
├── pnpm-workspace.yaml        # Workspace package definitions
└── package.json               # Root scripts orchestrator
```

---

## 🎨 Design System: Obsidian Prism

- **Atmosphere**: Deep Obsidian slate canvas (`#0b0f19` / `#0f131d`) with ambient radial glows.
- **Accents**:
  - **Electric Violet** (`#8b5cf6` / `#d0bcff`) for Full-Stack development, primary actions, and brand highlights.
  - **Technical Cyan** (`#06b6d4` / `#4cd7f6`) for QA automation, telemetry streams, and contract verification.
- **Typography**:
  - **Plus Jakarta Sans** for authoritative geometric headlines and metric counters.
  - **Inter** for readable architectural descriptions and logs.
- **Elevation**: Frosted glassmorphism (`backdrop-blur-xl`, `rgba(17, 24, 39, 0.75)`), hairline seams, and subtle light catches.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ or v22+)
- `pnpm` (recommended) or `npm`

### Installation

From the root directory:

```bash
pnpm install
```

### Running Development Server

To launch the Vite development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

### Production Build

To type-check and generate production build artifacts:

```bash
pnpm build
```

To preview the production build locally:

```bash
pnpm preview
```

---

## 🌟 Interactive Features

1. **Active Telemetry Terminal**:
   - Interactive command runner (`order-lock`, `prophet-ml`, `jwt-security`)
   - Real-time animated test suite pass indicators
   - Multi-discipline status tiles (FastAPI, Supabase RLS, BPMN 2.0, Prophet ML)
2. **Dynamic Project Filter**:
   - Seamless categorization across *All Work*, *QA Engineering*, *System Analysis*, and *Full Stack*.
3. **Deep Case Study Modal**:
   - Comprehensive SRS, architecture breakdown, test matrix, and strategic objectives for flagship projects.
4. **Interactive Proposal Form**:
   - Form state management, input validation, and feedback notifications.
5. **Smooth Adaptive Navigation**:
   - Automatic active section tracking on scroll with mobile drawer navigation.
