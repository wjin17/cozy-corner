import createConfig from "@packages/eslint-config/create-config";

export default createConfig(
  {
    react: true,
  },
  {
    rules: {
      "react-dom/no-unsafe-iframe-sandbox": "off",
      "react-refresh/only-export-components": "off",
      "style/arrow-parens": "off",
      "style/indent-binary-ops": "off",
      "antfu/top-level-function": "off",
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            pascalCase: true, // Allows PascalCase for component files (e.g., MyComponent.jsx)
            camelCase: true, // Allows camelCase for utility files (e.g., myUtility.js)
          },
          ignore: [
            /^[A-Z]+(?:\.[a-z]+)*\.(?:spec|test|stories)\.[jt]sx?$/, // Ignore test and story files
            /^vite\.config\.[jt]s$/, // Ignore Vite config files
            /^vite-env\.[jt]s$/, // Ignore Prettier config files
            /^\.eslintrc\.[jt]s$/, // Ignore ESLint config files
            /^\.prettierrc\.[jt]s$/, // Ignore Prettier config files
          ],
        },
      ],
    },
  },
);
