import { sep } from "node:path";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import builtinModules from "builtin-modules";

export default {
  input: "src/server.ts",
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: "src",
  },
  external(id) {
    return builtinModules.includes(id) || /^(react|react-dom)($|\/)/.test(id);
  },
  plugins: [
    typescript({
      moduleResolution: "bundler",
      tsconfig: "./tsconfig.node.json",
    }),
    resolve({ preferBuiltins: true }),
    commonjs({ ignoreDynamicRequires: true, ignore: builtinModules }),
  ],
};
