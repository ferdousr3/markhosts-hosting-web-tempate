module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "2rem",
          xl: "2rem",
          "2xl": "2rem",
        },
      },
      colors: {
        main: "#000645",
        second: "#3e53f6",
        third: "#666a8f",
        four: "#61ce70",
        green: "#13ce66",
        yellow: "#ffc82c",
      },
      boxShadow: {
        "3xl": "0 15px 64px 0 rgb(44 75 184 / 10%)",
      },
    },
  },
  plugins: [],
};
