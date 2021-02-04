import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
// import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";

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
    }),
    // excludeDependenciesFromBundle()
  ],
  external: ["@vue/reactivity"]
};
