import { defineConfig } from 'eslint-define-config';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser'; // Імпортуємо парсер

export default defineConfig([
  {
    ignores: ['build/**/*', 'node_modules/**/*'],
    languageOptions: {
      parser: typescriptParser, // Використовуємо парсер як об'єкт
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.eslint.json',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': 'off',
      'prettier/prettier': [
        'error',
        { singleQuote: true, trailingComma: 'es5' },
      ],
    },
  },
]);
