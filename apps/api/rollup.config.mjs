import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "src/server.ts",
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: "src",
  },
  plugins: [
    typescript({
      moduleResolution: "bundler",
      tsconfig: "./tsconfig.json",
    }),
    resolve({ preferBuiltins: true }),
    commonjs({ ignoreDynamicRequires: true }),
  ],
};
