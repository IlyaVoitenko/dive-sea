import Notification from "./Notification";
import BestSellers from "./BestSellers";
import ExploreMoreBtn from "./ExploreMoreBtn";
import UnleashRecentViewed from "./UnleashRecentViewed";
import horizontalNetting from "../../../assets/horizontalNetting.svg";
const Unleash = () => {
  return (
    <div className="w-full mobile:h-full flex flex-col justify-center items-center mobile:mt-5">
      <hr className="w-[90%] mobile:hidden" />
      <div className="flex w-full justify-end desktop:mt-[4rem] laptop:mt-[4rem] tablet:mt-[2rem]">
        <div className="flex mobile:flex-col w-[95%] mobile:w-full justify-end mobile:justify-center ">
          <section className="mobile:flex mobile:flex-col mobile:justify-center mobile:items-center">
            <h2 className="font-poppins font-semibold unleashTitleDesktop unleashTitleLaptop unleashTitleTablet  unleashTitleMobile ">
              <span className="text-[#ACADB9] block  mobile:w-full">
                Just Unleash -
              </span>
              <span className="text-[#141416]">Your Inner Collector</span>{" "}
            </h2>
            <ul className="text-[#141416] list-image-marker font-poppins font-normal unleashListItemDesktop unleashListItemLaptop  mobile:hidden ">
              <li>Best Seller All Around World</li>
              <li>$2M+ Transactions Every Day</li>
              <li>Secure Transactions</li>
              <li>Exclusive Collections From Sellers</li>
              <li>Easy Buying and Selling</li>
              <li>Join Our Community</li>
            </ul>
            <ExploreMoreBtn isMobileHidden={true} />
          </section>
          <section className="relative w-full laptop:h-[436.02px] tablet:h-[400px] desktop:h-[613.08px] mobile:h-[370px]">
            <Notification />
            <BestSellers />
            <UnleashRecentViewed />
            <figcaption className="absolute z-[0] horizontalNettingPositions">
              <img
                src={horizontalNetting}
                alt="horizontal netting"
                className=" laptop:h-[198px] laptop:w-[400px] desktop:w-[400px]  desktop:h-[198px]"
              />
            </figcaption>
          </section>
          <div className=" flex justify-center items-center laptop:hidden desktop:hidden tablet:hidden">
            <ExploreMoreBtn isMobileHidden={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unleash;
