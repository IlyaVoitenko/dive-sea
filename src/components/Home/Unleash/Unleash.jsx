import whiteArrowRight from "../../../assets/whiteArrowRight.svg";
const Unleash = () => {
  return (
    <div className="w-[90%]">
      <hr />
      <div className="flex  desktop:mt-[4rem] laptop:mt-[4rem] tablet:mt-[2rem]">
        <section>
          <h2 className="font-poppins font-semibold unleashTitleDesktop unleashTitleLaptop unleashTitleTablet ">
            <span className="text-[#ACADB9] block">Just Unleash -</span>
            <span className="text-[#141416]">Your Inner Collector</span>{" "}
          </h2>
          <ul className="text-[#141416] list-image-marker font-poppins font-normal unleashListItemDesktop unleashListItemLaptop  mobile:hidden">
            <li>Best Seller All Around World</li>
            <li>$2M+ Transactions Every Day</li>
            <li>Secure Transactions</li>
            <li>Exclusive Collections From Sellers</li>
            <li>Easy Buying and Selling</li>
            <li>Join Our Community</li>
          </ul>
          <div className="flex mt-[2rem]">
            <button className="flex justify-between items-center bg-black unleashBtnContainerLaptop unleashBtnContainerDesktop unleashBtnContainerTablet">
              <span className=" text-white font-poppins font-medium  unleashBtnTextDesktop unleashBtnTextLaptop unleashBtnTextTablet ">
                Explore More
              </span>
              <img
                src={whiteArrowRight}
                alt="explore more arrow"
                className="desktop:h-[22.14px] desktop:w-[22.14px] laptop:h-[15.75px] laptop:w-[15.75px]"
              />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Unleash;
