import globals from "globals";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser
      }
    },
    rules: {
      // tes règles existantes si tu en avais
    }
  },
  {
    files: ["**/*.spec.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    },
    rules: {
      // règles spécifiques tests si besoin
    }
  }
];
