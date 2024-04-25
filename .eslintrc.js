module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
    jest: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 12,
        sourceType: 'module',
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:node/recommended',
        'airbnb-typescript/base',
        'plugin:eslint-comments/recommended',
        'plugin:unicorn/recommended',
        'plugin:sonarjs/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:promise/recommended',
        'plugin:optimize-regex/recommended',
        'plugin:prettier/recommended',
      ],
      plugins: [
        '@typescript-eslint',
        'node',
        'eslint-comments',
        'unicorn',
        'sonarjs',
        'import',
        'promise',
        'optimize-regex',
        'prettier',
        'security',
        'simple-import-sort',
        'unused-imports',
        'deprecation',
      ],
      settings: {
        // Define import resolver for import plugin
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
        node: {
          tryExtensions: ['.json', '.node', '.js', '.ts', '.d.ts'],
        },
      },
      rules: {
        // For faster development
        'no-process-exit': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'off',
        'class-methods-use-this': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'unicorn/no-new-array': 'off',
        'unicorn/no-fn-reference-in-iterator': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/consistent-destructuring': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/prefer-spread': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-process-exit': 'off',
        'unicorn/prefer-module': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'unicorn/prefer-top-level-await': 'off',
        // Import and order style
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'simple-import-sort/exports': 'error',
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'off',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'import/no-deprecated': 'error',
        'import/group-exports': 'off',
        'import/exports-last': 'error',
        'no-restricted-imports': 'off',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'simple-import-sort/imports': [
          'error',
          {
            groups: importGroups,
          },
        ],
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['../*'],
                message:
                  'For imports of parent elements use better path aliases. For example, @domain/shared.',
              },
            ],
          },
        ],
        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: '*', next: 'export' },
          { blankLine: 'any', prev: 'export', next: 'export' },
        ],
        quotes: [
          'error',
          'single',
          {
            allowTemplateLiterals: true,
          },
        ],
        'unused-imports/no-unused-vars': [
          'error',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],

        /* General rules */
        'unicorn/prevent-abbreviations': [
          'warn',
          {
            ignore: ['\\.e2e$', /^ignore/i],
          },
        ],
        // This is disabled because of this issue: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/52595
        'unicorn/prefer-node-protocol': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'deprecation/deprecation': 'warn',
        // Disallow unsupported ECMAScript syntax on the specified version
        // Ignore ES6 modules because people might be using babel
        'node/no-unsupported-features/es-syntax': [
          'error',
          { ignores: ['modules'] },
        ],
        // node plugin cannot resolve TypeScript's path aliases. See https://github.com/mysticatea/eslint-plugin-node/issues/233
        'node/no-missing-import': 'off',
        'promise/no-callback-in-promise': 'off',
        'eslint-comments/disable-enable-pair': [
          'error',
          { allowWholeFile: true },
        ],
      },
    },
  ],
};