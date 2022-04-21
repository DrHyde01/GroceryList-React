module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#00e472",
        customYellow: "#fdff9f",
      },

      keyframes: {
        titleAppear: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        titleAppear: "titleAppear 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
