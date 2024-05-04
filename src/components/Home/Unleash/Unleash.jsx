import whiteArrowRight from "../../../assets/whiteArrowRight.svg";
import Notification from "./Notification";
import BestSellers from "./BestSellers";
import UnleashRecentViewed from "./UnleashRecentViewed";
const Unleash = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <hr className="w-[90%]" />
      <div className="flex w-full  justify-end desktop:mt-[4rem] laptop:mt-[4rem] tablet:mt-[2rem]">
        <div className="flex w-[95%] justify-end ">
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
          <section className="relative w-full laptop:h-[436.02px]">
            <Notification />
            <BestSellers />
            <UnleashRecentViewed />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Unleash;
