import createConfig from "@packages/eslint-config/create-config";

export default createConfig(
  {
    react: true,
  },
  {
    rules: {
      "antfu/top-level-function": "off",
    },
  }
);
