const sassLintConfig = {
  options: {
    'merge-default-rules': true,
    formatter: 'stylish',
    'max-warnings': 50,
  },
  files: {
    include: './app/src/assets/sass/**/*.s+(a|c)ss',
    ignore: ['./app/src/assets/sass/lib/**/*', './app/src/assets/sass/_*'],
  },
  rules: {
    'leading-zero': [2, { include: true }],
    'nesting-depth': [
      2,
      {
        'max-depth': 4,
      },
    ],
    'clean-import-paths': [
      1,
      {
        'filename-extension': true,
        'leading-underscore': false,
      },
    ],
    'extends-before-mixins': 2,
    'extends-before-declarations': 2,
    'placeholder-in-extend': 2,
    'mixins-before-declarations': [
      2,
      {
        exclude: ['breakpoint', 'mq'],
      },
    ],
    'no-warn': 1,
    'no-debug': 1,
    'no-ids': 2,
    'no-important': 2,
    'hex-notation': [
      2,
      {
        style: 'uppercase',
      },
    ],
    indentation: [
      2,
      {
        size: 2,
      },
    ],
    'property-sort-order': [
      1,
      {
        order: ['display', 'margin'],
        'ignore-custom-properties': true,
      },
    ],
    'variable-for-property': [
      2,
      {
        properties: ['margin', 'content'],
      },
    ],
  },
};

module.exports = sassLintConfig;
