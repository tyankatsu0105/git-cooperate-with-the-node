module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'subject-case': [0],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [0]
  }
};
