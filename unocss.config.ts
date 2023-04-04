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
    presetDaisy(),
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
      xs: ["clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem)", "1"],
      sm: ["clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem)", "1"],
      base: ["clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)", "1"],
      md: ["clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)", "1"],
      lg: ["clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem)", "1"],
      xl: ["clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem)", "1"],
      "2xl": ["clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)", "1"],
      "3xl": ["clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem)", "1"],
      "4xl": ["clamp(3.36rem, calc(2.87rem + 2.45vw), 4.77rem)", "1"],
      "5xl": ["clamp(4.03rem, calc(3.36rem + 3.36vw), 5.96rem)", "1"],
      "6xl": ["clamp(4.84rem, calc(3.93rem + 4.54vw), 7.45rem)", "1"],
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
