import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.cjs.js",
      sourcemap: true,
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      sourcemap: true,
      format: "esm",
    },
    {
      file: "dist/index.browser.js",
      sourcemap: true,
      format: "iife",
      globals: {
        "@vue/reactivity": "VueReactivity"
      },
      name: "Staex"
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    terser(),
  ],
  external: ["@vue/reactivity"]
};
