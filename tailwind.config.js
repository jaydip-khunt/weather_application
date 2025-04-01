module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        primary: "rgb(64 60 187)",
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1320px',
          xl: '1250px',
        },
      },
      screens: {
        xs: '465px',
      },
    },
  },
  plugins: [],
};
