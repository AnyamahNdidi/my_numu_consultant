/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

       fontFamily: {
     inter: ["var(--font-inter)", "sans-serif"],    
  sans: ["var(--font-dm-sans)", "sans-serif"], // default
  
  archivo: ["var(--font-archivo)", "sans-serif"],
  dmsans: ["var(--font-dm-sans)", "sans-serif"],
  lobster: ["var(--font-lobster)", "cursive"],
},
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            lineHeight: '1.6',
            p: {
              marginBottom: '1.25em',
              lineHeight: '1.7',
            },
            h1: {
              fontWeight: 'bold',
              lineHeight: '1.2',
              marginTop: '0',
              marginBottom: '0.5em',
            },
            h2: {
              fontWeight: 'bold',
              lineHeight: '1.25',
              marginTop: '1.5em',
              marginBottom: '0.75em',
            },
            h3: {
              fontWeight: '600',
              lineHeight: '1.3',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      lineHeight: {
        'relaxed': '1.7',
        'loose': '1.8',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
