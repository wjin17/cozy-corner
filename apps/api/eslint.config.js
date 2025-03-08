import createConfig from "@packages/eslint-config/create-config";

export default createConfig(
  {
    react: true,
  },
  {
    rules: {
      "antfu/top-level-function": "off",
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: ["README.md", "~__root.tsx"],
        },
      ],
    },
  }
);
