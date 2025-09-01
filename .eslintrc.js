module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },
};