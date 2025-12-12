import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import eslintPluginPlaywright from 'eslint-plugin-playwright';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: { ...globals.node, test: 'readonly', expect: 'readonly' },
    },
    plugins: {
      playwright: eslintPluginPlaywright,
    },
    rules: {},
    ...js.configs.recommended,
  },
]);
