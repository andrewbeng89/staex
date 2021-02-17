import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

const extensions = [".js"];

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "es"
  },
  plugins: [
    resolve({ extensions }),
    babel({
      extensions,
      include: ["src/**/*"],
      runtimeHelpers: true
    })
  ],
  external: ["@vue/reactivity"]
};
