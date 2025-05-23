import globals from "globals";
import daStyle from "eslint-config-dicodingacademy";
import { fixupPluginRules } from "@eslint/compat";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginHooks from "eslint-plugin-react-hooks";
import pluginCypress from "eslint-plugin-cypress/flat";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginCypress.configs.recommended,
  {
    plugins: {
      "react-hooks": fixupPluginRules(pluginHooks),
    },
    rules: pluginHooks.configs.recommended.rules,
  },
  daStyle,
  {
    rules: {
      "linebreak-style": "off",
      "no-alert": "off",
      quotes: "off",
      "no-underscore-dangle": "off",
      "import/prefer-default-export": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-props-no-spreading": "off",
      "react/prop-types": "off",
      indent: "off",
    },
  },
];
