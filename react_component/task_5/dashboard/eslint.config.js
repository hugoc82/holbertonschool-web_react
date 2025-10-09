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
      // tes r�gles existantes si tu en avais
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
      // r�gles sp�cifiques tests si besoin
    }
  }
];
