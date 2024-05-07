/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { max: "430px" },
      tablet: { min: "640px", max: "1023px" },
      laptop: { min: "1024px", max: "1279px" },
      desktop: { min: "1280px" },
    },
    extend: {
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        public: ["Public Sans", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
