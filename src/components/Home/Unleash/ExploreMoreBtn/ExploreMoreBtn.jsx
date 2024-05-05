import { bool } from "prop-types";
import whiteArrowRight from "../../../../assets/whiteArrowRight.svg";

const ExploreMoreBtn = ({ isMobileHidden }) => {
  return (
    <div
      className={`flex mt-[2rem] mobile:${isMobileHidden ? "hidden" : "block"}`}
    >
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
  );
};
ExploreMoreBtn.propTypes = {
  isMobileHidden: bool,
};
export default ExploreMoreBtn;
