import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import pluginVueA11y from "eslint-plugin-vuejs-accessibility";
import ts from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import creedengo from "@creedengo/eslint-plugin";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...pluginVue.configs["flat/strongly-recommended"],
  ...pluginVueA11y.configs["flat/recommended"],
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "no-undef": "off",
      "vue/multi-word-component-names": "warn",
    },
  },
  eslintConfigPrettier,
  creedengo.configs.recommended
];
