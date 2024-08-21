/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      boxContainerDetailProduct:
        "17.56px 17.56px 61.06px 0px rgba(0, 0, 0, 0.12)",
      btnsArrowsShadow: "0px 42px 24.53px -18.4px #0F0F0F1F ",
      itemBid: "  -5.85px 11.7px 20.26px 0px #10101026",
      itemUnhoverBid: "0px 4.5px 54.02px 0px #C5C5C540",
      backgroundCreator: "15.26px 15.26px 53.07px 0px #0000001F",
      creatorCard: "28.22px 8.55px 42.75px 0px #C7C7C799",
      activityBtnShadow: "19.38px 12.92px 66.19px 0px #61616140",
      activityCardItem: "18.78px 12.52px 64.15px 0px #61616140",
      boxShadowUpload:
        "0px 81.98px 81.98px -8.49px rgba(15, 15, 15, 0.1), 0px -81.98px 80px 0px rgba(0, 0, 0, 0.05)",

      boxCreatorsCards: "30px 15px 80px 0px #BFBFBF99",
      boxBtnModelNav: "0px 47.34px 37.87px -28.4px #0F0F0F1F",
      boxWalletBtns: "5px 10px 50px 0px #0000001A",
      boxWalletBtnsLaptop: " 3.56px 7.11px 35.56px 0px #0000001A",
      boxWalletBtnsMobile: "4px 8px 40px 0px #0000001A",
    },
    screens: {
      mobile: { max: "430px" },
      tablet: { min: "640px", max: "1023px" },
      laptop: { min: "1024px", max: "1279px" },
      desktop: { min: "1280px" },
      macbook16: { min: "1196px", max: "1236px" },
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
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
