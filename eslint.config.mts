import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import {defineConfig} from "eslint/config";

export default defineConfig([
		{
				files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
				plugins: {js},
				extends: ["js/recommended"],
				languageOptions: {globals: {...globals.browser, ...globals.node}},
		},
		{
				ignores: [
".docusaurus"
				]
		},
		tseslint.configs.recommended,
		eslintConfigPrettier,
		{files: ["**/*.json"], plugins: {json}, language: "json/json", extends: ["json/recommended"]},
		{files: ["**/*.md"], plugins: {markdown}, language: "markdown/commonmark", extends: ["markdown/recommended"]},
		{files: ["**/*.css"], plugins: {css}, language: "css/css", extends: ["css/recommended"]},
]);
