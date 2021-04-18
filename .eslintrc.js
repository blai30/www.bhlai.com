module.exports = {
  'root': true,
  'ignorePatterns': [
    'projects/**/*',
  ],
  'overrides': [
    {
      'files': [
        '*.ts',
      ],
      'parserOptions': {
        'project': [
          'tsconfig.json',
          'e2e/tsconfig.json',
        ],
        'createDefaultProgram': true,
      },
      'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      'rules': {
        '@angular-eslint/directive-selector': [
          'error',
          {
            'type': 'attribute',
            'prefix': 'app',
            'style': 'camelCase',
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            'type': 'element',
            'prefix': 'app',
            'style': 'kebab-case',
          },
        ],
      },
    },
    {
      'files': [
        '*.html',
      ],
      'extends': [
        'plugin:@angular-eslint/template/recommended',
      ],
      'rules': {},
    },
  ],
};
