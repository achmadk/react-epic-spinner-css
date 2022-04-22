const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    ...(process.env.NODE_ENV === 'production' ? [purgecss({
      content: ['./**/*.html', './**/*.ts', './**/*.tsx'],
      css: ['../dist/*.css'],
      keyframes: true,
      safelist: {
        greedy: [/^spring-spinner/]
      }
    })] : [])
  ]
}
