module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          25: "#fbfaff",
          50: "#f5f3ff",
          100: "#ece9fe",
          200: "#ddd6fe",
          300: "#c3b5fd",
          400: "#a48afb",
          500: "#875bf7",
          600: "#7839ee",
          700: "#6927da",
          800: "#5720b7",
          900: "#491c96",
        },
        gray: {
          25: "#fcfcfd",
          50: "#f9fafb",
          100: "#f2f4f7",
          200: "#eaecf0",
          300: "#d0d5dd",
          400: "#98a2b3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1d2939",
          900: "#101828",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
