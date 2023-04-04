import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), UnoCSS()],
  experimental: {
    assets: true,
  },
});
