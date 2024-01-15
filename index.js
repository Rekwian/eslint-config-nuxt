module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:vue-pug/vue3-recommended',
  ],
  ignorePatterns: [
    '**/node_modules/',
    '**/vendor/',
    '**/vendors/',
    'out/',
    'dist/',
    'build/',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['**/*.js', '**/*.ts', '**/*.mjs', '**/*.mts', '**/*.cjs', '**/*.cts', '**/*.vue']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'max-len': 0,
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-unused-vars': ['error', { argsIgnorePattern: '_' }],
    'object-curly-newline': 'off',
    'sort-keys': ['warn', 'asc'],
    'no-param-reassign': 0,
    'no-undef': 0,
    'vue/attributes-order': ['error', {
      alphabetical: true,
      order: [
        [
          'CONDITIONALS',
          'LIST_RENDERING',
          'TWO_WAY_BINDING',
          'RENDER_MODIFIERS',
          'OTHER_DIRECTIVES',
          'SLOT',
          'DEFINITION',
        ],
        [
          'ATTR_STATIC',
          'ATTR_SHORTHAND_BOOL',
          'GLOBAL',
          'UNIQUE',
        ],
        'ATTR_DYNAMIC',
        'EVENTS',
        'CONTENT',
      ],
    }],
    'vue/block-lang': ['error', {
      script: { lang: ['js'] },
      style: {
        lang: ['sass', 'scss', 'css'],
      },
      template: {
        lang: 'pug',
      },
    }],
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', { registeredComponentsOnly: false }],
    'vue/html-quotes': 0,
    'vue/max-attributes-per-line': 0,
    'vue/multi-word-component-names': 0,
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@': './',
          assets: './assets',
          store: './store',
          '~': './',
        },
        extensions: ['.js', '.ts', '.mjs', '.mts', 'cjs', '.cts', '.vue'],
      },
    },
  },
};
