/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'light-on-off': 'onOff 2s infinite',
      },
      keyframes: {
        onOff: {
          '0%, 100%': { backgroundColor: '#00FF00' }, // Light green
          '50%': { backgroundColor: '#171717' }, // Black
        },
      },
      fontSize: {
        '56px': '56px',
        '18px': '18px',
      },
      fontFamily: {
        sans: ['PT Sans', 'sans-serif'],
      },
    },
    screens: {
      mq2800: {
        raw: "screen and (max-width: 2800px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      ss: {
        raw: "screen and (min-width: 450px)",
      },
    },
    fontSize: {
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  safelist: [
    'animate-light-on-off', // Ensures this class isn't purged by Tailwind
  ],
};
