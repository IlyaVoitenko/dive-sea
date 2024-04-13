/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { max: "430px" },

      tablet: "640px",

      laptop: "1024px",

      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        public: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
