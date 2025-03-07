// jest.config.js
import { createDefaultPreset } from "ts-jest";

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  ...createDefaultPreset(),
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "./tsconfig.client.json", // Path to your tsconfig.json
      },
    ],
  },
};
