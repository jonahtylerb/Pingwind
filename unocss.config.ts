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
    fontSize: {
      xs: ["clamp(0.88rem, calc(0.93rem + 0.32vw), 1.12rem)", "1.4"],
      sm: ["clamp(1.00rem, calc(0.96rem + 0.53vw), 1.30rem)", "1.4"],
      base: ["clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)", "1.5"],
      md: ["clamp(1.20rem, calc(1.00rem + 1.00vw), 1.64rem)", "1.5"],
      lg: ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)", "1.4"],
      xl: ["clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)", "1.4"],
      "2xl": ["clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)", "1.2"],
      "3xl": ["clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)", "1.1"],
      "4xl": ["clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)", "1"],
      "5xl": ["clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)", "1"],
      "6xl": ["clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)", "1"],
    },
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
