module.exports = {
  purge: ['./src/**/*.svelte', './src/**/*.html'],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
