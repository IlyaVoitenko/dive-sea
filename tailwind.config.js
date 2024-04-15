/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    dropShadow: {
      custom: "0px 43.12px 34.49px -25.87px ",
    },
    screens: {
      smallMobile: { max: "375px" },

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
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
