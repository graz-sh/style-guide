// @ts-check

const { TYPESCRIPT_FILES } = require("./constants");
const { getPrettierPlugin } = require("./utils/prettier");

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      files: TYPESCRIPT_FILES,
      extends: [
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:import/typescript",
        getPrettierPlugin(),
        require.resolve("./rules/typescript"),
        require.resolve("./rules/typescript/extension"),
        require.resolve("./rules/typescript/import"),
        require.resolve("./rules/typescript/strict"),
        require.resolve("./rules/tsdoc"),
      ],
    },
  ],
};

module.exports = config;
