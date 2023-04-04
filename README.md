# 👋 Welcome to Pingwind!

This is the template I use for making websites. I hope you enjoy it.

## 📦 Features

- Astro is a modern, responsive, and responsive front-end framework for building modern websites.
- SolidJS for reactive components.
- UnoCSS for styling.
- DaisyUI is a component-based UI library.

### 🎁 Extras

- Fontsource + UnoCSS fonts for typography. With my own dynamic classes for font sizes.
- Astro assets for static assets. Please note this is experimental.
- and more...

## 🚀 Project Structure

Inside of your Pingwind project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   │   └── Counter.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Solid files are `.tsx` files in the `src/components/` directory.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
