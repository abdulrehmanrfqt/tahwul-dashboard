## Tahwul Dashboard

A React + TypeScript dashboard project built with Vite.

### Prerequisites

- **Node.js**: v18 or later  
- **Package manager**: npm (bundled with Node), yarn, or pnpm

### 1. Install dependencies

```bash
npm install
# or
yarn
```

### 2. Environment variables (optional)

If your project uses environment variables, create a `.env.local` file in the project root and add any required values (for example API URLs or keys used by your own services).

### 3. Start the development server

```bash
npm run dev
# or
yarn dev
```

Open the URL printed in the terminal (by default `http://localhost:5173`) in your browser.

### 4. Build for production

```bash
npm run build
```

The optimized production build will be generated in the `dist` directory.

### 5. Preview the production build (optional)

```bash
npm run preview
```

This serves the contents of `dist` locally so you can test the production build.

### Project structure

```
tahwul-dashboard/
├── index.html                 # Vite entry HTML
├── src/
│   ├── main.tsx               # React entry point
│   ├── App.tsx                # Root app component
│   ├── index.css              # Global styles
│   ├── vite-env.d.ts          # Vite client types
│   ├── assets/                # Images and SVG icons
│   │   ├── dashboard/          # Dashboard metric icons (SVG)
│   │   ├── sidebar/           # Sidebar nav icons (SVG)
│   │   ├── favicon.ico
│   │   └── *.svg              # Other shared SVGs
│   ├── components/
│   │   ├── layout/            # Header, Sidebar
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── index.ts
│   │   ├── dashboard/         # Dashboard views
│   │   │   ├── Dashboard.tsx
│   │   │   ├── StrategicPlanningDetail.tsx
│   │   │   └── index.ts
│   │   └── shared/            # Reusable UI (e.g. AuditTable)
│   │       ├── AuditTable.tsx
│   │       └── index.ts
│   ├── data/                  # Static/mock data
│   │   └── dashboardData.ts
│   ├── hooks/                 # Custom React hooks
│   │   ├── useDashboardNavigation.ts
│   │   ├── useBarHover.ts
│   │   ├── useGaugeData.ts
│   │   └── index.ts
│   └── types/                 # Shared TypeScript types
│       └── index.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

Use the `@/` path alias in imports (e.g. `@/components/layout/Header`, `@/data/dashboardData`, `@/hooks`).

### Available scripts

- **`dev`** – Start the Vite development server
- **`build`** – Build the app for production
- **`preview`** – Preview the production build

After installing dependencies, run the dev server and start working on the Tahwul dashboard UI and logic.
