```markdown
# ✨ Design System Starter

A modular, versioned React component library with Storybook, theming support, documentation, and a demo app to show components in use. This monorepo is built for scalable frontend development and consistent UI patterns across applications.

---

## 🧱 Project Structure

```

ab-design-system-challenge/
├── packages/
│   └── design-system/      # Component library (published to npm)
├── apps/
│   ├── dummy-website/      # Example app using the design system
│   └── docs-site/          # Lightweight markdown-based documentation site
├── .storybook/             # Storybook configuration
├── .changeset/             # Automated versioning metadata
├── package.json            # Workspaces and shared scripts
└── README.md

````

---

## 🧩 Features

- **React** component library with reusable UI components
- **Custom theming** via ThemeProvider or CSS variables
- **Storybook** integration for isolated component development
- **Markdown-based docs site** to cover usage, design decisions, and upgrade notes
- **Semantic versioning** with [Changesets](https://github.com/changesets/changesets)
- **Dummy website** to simulate real-world component usage
- **npm workspaces** for monorepo management

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
````

### 2. Run Storybook (component previews)

```bash
npm run storybook
```

### 3. Build the design system

```bash
cd packages/design-system
npm run build
```

### 4. Start the dummy app

```bash
cd apps/dummy-website
npm start
```

### 5. Start the docs site

```bash
cd apps/docs-site
npm start
```

---

## 🧪 Component Development

Each component should include:

* A React implementation (`.tsx`)
* A CSS Module or styled-component file
* A `*.stories.tsx` file for Storybook
* A `README.md` (or usage doc) to explain props, behavior, and variations

Example structure:

```
design-system/
└── src/
    └── components/
        └── Button/
            ├── Button.tsx
            ├── Button.module.css
            ├── Button.stories.tsx
            └── README.md
```

---

## 🎨 Theming Support

The design system supports multiple color palettes and themes. Use a `ThemeProvider` and share design tokens across applications to maintain a consistent style while allowing brand flexibility.

---

## 🗃 Versioning & Publishing

This repo uses Changesets for semantic versioning, changelog generation, and release automation.

### Create a changeset:

```bash
npx changeset
```

### Apply version changes:

```bash
npx changeset version
```

### Publish to npm:

```bash
npm publish --workspace=packages/design-system
```

---

## 📖 Docs Site

The docs site (`apps/docs-site`) renders markdown files and helps centralize:

* Design principles
* Component usage
* Theming strategies
* Figma or design links
* Release notes and changelogs

---

## 🧑‍🤝‍🧑 Contributing

1. Clone the repo
2. Add or modify a component in `packages/design-system`
3. Create/modify Storybook stories
4. Add or update documentation
5. Create a changeset with `npx changeset`
6. Open a PR with your changes

Please keep component logic isolated from theming and follow design tokens.

---

## 🧠 Guiding Principles

* **Component isolation**: Logic, presentation, and themes are separated
* **Single source of truth**: Each release maps to a known design revision
* **Scalability**: Works across many apps with controlled upgrades
* **Consistency**: Enforces design alignment through tokens and visual testing

---

## 📎 License

MIT

