/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray1: {
          "100": "#fcfcfc",
          "200": "#212121",
          "300": "#1a1a1a",
          "400": "#171628",
          "500": "#16181e",
          "600": "#171717",
          "700": "#131413",
          "800": "#021c05",
          "900": "rgba(12, 12, 12, 0.56)",
          "1000": "rgba(33, 33, 33, 0.5)",
        },
        darkgray: "#aeaeae",
        darkgreen: "#0e5a17",
        lime: "#12ec2d",
        limegreen: "#00d414",
        seagreen: "#36803d",
        lightslategray: "#838592",
        gainsboro: "#e0dfe1",
        lavender: {
          "100": "#f3efff",
          "200": "#d4d4e7",
        },
        dimgray: {
          "100": "#666",
          "200": "#605f5f",
          "300": "#555",
          "400": "#545454",
          "500": "#4a4a5c",
          "600": "rgba(84, 84, 84, 0.5)",
          "700": "rgba(84, 84, 84, 0.09)",
        },
        "black-20": "rgba(17, 17, 19, 0.2)",
        black: "#111113",
        "black-60": "rgba(17, 17, 19, 0.6)",
        "gray-600": "#52525b",
        "gray-900": "#18181b",
        whitesmoke: "#f9f9f9",
        darkslategray: {
          "100": "#4a4a52",
          "200": "#474747",
          "300": "#3f3f3f",
          "400": "rgba(51, 94, 99, 0.09)",
          "500": "rgba(0, 43, 49, 0.16)",
        },
        lawngreen: "#96fc04",
      },
      spacing: {},
      fontFamily: {
        geist: "Geist",
        body: "Inter",
        franie: "Franie",
      },
      borderRadius: {
        "12xs": "1px",
        "13xl": "32px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xs: "12px",
      "21xl": "40px",
      "13xl": "32px",
      "5xl": "24px",
      "23xl": "42px",
      "15xl": "34px",
      "6xl": "25px",
      lg: "18px",
      lgi: "19px",
      "37xl": "56px",
      "26xl": "45px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
