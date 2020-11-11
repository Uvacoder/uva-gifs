import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const production = process.env.NODE_ENV === "production";

export default {
  input: "src/_assets/app.js",
  output: {
    sourcemap: !production,
    format: "iife",
    dir: "_site/assets/",
  },
  plugins: [
    postcss({
      plugins: [require("tailwindcss")],
      minimize: production,
      extract: true,
    }),
    production && terser(),
  ],
};
