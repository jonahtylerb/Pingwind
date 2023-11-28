import {
  defineConfig,
  presetTagify,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { presetDaisy } from "unocss-preset-daisy";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetTagify(),
    presetDaisy({
      themes: ["forest"],
    }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  rules: [
    [
      /^family-([a-zA-Z]*)$/,
      ([, c]) => {
        return {
          "font-family": `${c}, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
        };
      },
    ],
  ],
  shortcuts: [
    {
      "flex-center": "items-center justify-center",
    },
    {
      "absolute-center": "-translate-1/2 left-1/2 top-1/2",
    },
    [/^size-(.*)$/, ([, s]) => `h-${s} w-${s}`],
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
});
