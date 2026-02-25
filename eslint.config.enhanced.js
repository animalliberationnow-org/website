// Enhanced ESLint Configuration Example
// To use: rename to eslint.config.js after installing dependencies

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
// Uncomment after installing:
// import jsxA11y from 'eslint-plugin-jsx-a11y';
// import importPlugin from 'eslint-plugin-import';
// import sonarjs from 'eslint-plugin-sonarjs';

export default tseslint.config(
  { ignores: ['dist', 'node_modules', '*.config.js'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      // jsxA11y.flatConfigs.recommended,  // Uncomment after install
      // sonarjs.configs.recommended,       // Uncomment after install
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      // 'import': importPlugin,  // Uncomment after install
    },
    rules: {
      // React Hooks
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // Code Quality
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-alert': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],

      // React Best Practices
      'react-hooks/exhaustive-deps': 'warn',

      // Import Organization (uncomment after installing plugin)
      // 'import/order': [
      //   'error',
      //   {
      //     'groups': [
      //       'builtin',
      //       'external',
      //       'internal',
      //       'parent',
      //       'sibling',
      //       'index'
      //     ],
      //     'newlines-between': 'always',
      //     'alphabetize': { 'order': 'asc' }
      //   }
      // ],
    },
  }
);
