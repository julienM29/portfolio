import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import js from "@eslint/js";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error"
    }
  }
];