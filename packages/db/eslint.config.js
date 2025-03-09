import createConfig from "@packages/eslint-config/create-config";
import drizzle from "eslint-plugin-drizzle";

export default createConfig({
  plugins: { drizzle },
  ignores: ["**/migrations/**"],
  rules: {
    ...drizzle.configs.recommended.rules,
  },
});
