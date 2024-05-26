import { func, number, object, bool } from "prop-types";
import arrowLeft from "../../../../../assets/arrowLeft.svg";
import arrowRight from "../../../../../assets/arrowRight.svg";
import { handleScroll } from "../../../../../helper";

const CARD_WIDTH = 300;

const BtnsArrows = ({
  isWeekly = false,
  scrollPosition,
  setScrollPosition,

  containerTrendiesListRef,
}) => {
  return (
    <div
      className={`${
        isWeekly ? "mix-blend-normal" : " mix-blend-multiply"
      } shadow-btnsArrowsShadow bg-[#FCFCFD] flex justify-center items-center rounded-[17.25px]  containerButtonsDesktop containerButtonsLaptop containerButtonsTablet containerButtonsMobile`}
    >
      <button
        className="bg-[#FCFCFD] flex justify-center items-center rounded-none border-none border-r-[2.16px] border-[#E6E8EC] laptop:h-[25.87px] hover:border-none mobile:w-[44%] tablet:w-[44%]"
        onClick={() =>
          handleScroll(
            -CARD_WIDTH,
            scrollPosition,
            setScrollPosition,
            containerTrendiesListRef
          )
        }
      >
        <img
          alt="arrow left"
          src={arrowLeft}
          className="mobile:w-[15.9px] mobile:h-[15.9px]"
        />
      </button>
      <span className="text-[#E6E8EC]">|</span>
      <button
        className="bg-[#FCFCFD] flex justify-center items-center rounded-none laptop:h-[25.87px] hover:border-none mobile:w-[44%] tablet:w-[44%]"
        onClick={() =>
          handleScroll(
            CARD_WIDTH,
            scrollPosition,
            setScrollPosition,
            containerTrendiesListRef
          )
        }
      >
        <img
          alt="arrow right"
          src={arrowRight}
          className="mobile:w-[15.9px] mobile:h-[15.9px]"
        />
      </button>
    </div>
  );
};
BtnsArrows.propTypes = {
  isWeekly: bool,
  scrollPosition: number,
  setScrollPosition: func,
  containerTrendiesListRef: object,
};
export default BtnsArrows;
