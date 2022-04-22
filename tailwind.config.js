module.exports = {
  content: ['./src/**/*.astro', './src/**/*.md', './src/**/*.jsx'],
  theme: {
    fontSize: {
      xs: ['0.75rem', 1.5],
      sm: ['0.875rem', 1.43],
      base: ['1rem', 1.5],
      lg: ['1.125rem', 1.5],
      xl: ['1.25rem', 1.5],
      '2xl': ['1.5rem', 1.33],
      '3xl': ['1.875rem', 1.26],
      '4xl': [
        '2.25rem',
        {
          lineHeight: 1.22,
          letterSpacing: '-0.02em',
        },
      ],
      '5xl:': [
        '3rem',
        {
          lineHeight: 1.25,
          letterSpacing: '-0.02em',
        },
      ],
      '6xl': [
        '3.75rem',
        {
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
        },
      ],
      '7xl': [
        '4.5rem',
        {
          lineHeight: 1.25,
          letterSpacing: '-0.02em',
        },
      ],
    },
    extend: {
      colors: {
        gray: {
          25: '#fdfdfc',
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d7d3d0',
          400: '#a9a29d',
          500: '#79716b',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        brand: {
          25: '#fefaf5',
          50: '#fef6ee',
          100: '#fdead7',
          200: '#f9dbaf',
          300: '#f7b27a',
          400: '#f38744',
          500: '#ef6820',
          600: '#e04f16',
          700: '#b93815',
          800: '#932f19',
          900: '#772917',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
