module.exports = {
  rules: {
    'type-enum': [2, 'always', ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-full-stop': [2, 'never'],
    'subject-max-length': [2, 'always', 72],
  },
};