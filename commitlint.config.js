module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'subject-case': [0],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
        'breaking',
        'other'
      ]
    ]
  }
};
