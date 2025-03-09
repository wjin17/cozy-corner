import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { sep } from "node:path";
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
  external: (id) => {
    return id.includes(`${sep}node_modules${sep}`);
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
