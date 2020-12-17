module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
        serif: ["Poppins"],
        mono: ["SFMono-Regular", "Menlo"],
        poppin: ["Poppins"],
      },
      colors: {
        transparent: {
          100: `rgba(12, 12, 12, 0.3)`,
        },
        blue: "#08A0F7",
        purple: "#525298",
        purpleTransparent: "#52529833",
        blueTransparent: "#08A0F733",
        cyan: "#36D9D8",
        yellow: "#FFBF47",
        orange: "#FF8700",
        dark: {
          300: "#2D303E",
          500: "#252836",
          900: "#1F1D2B",
        },
        light: {
          100: "#F4F5F9",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
