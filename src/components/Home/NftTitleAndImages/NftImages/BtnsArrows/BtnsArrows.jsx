import { func, number, object } from "prop-types";
import arrowLeft from "../../../../../assets/arrowLeft.svg";
import arrowRight from "../../../../../assets/arrowRight.svg";
import { handleScroll } from "../../../../../helper";

const cardWidth = 300;

const BtnsArrows = ({
  scrollPosition,
  setScrollPosition,
  containerTrendiesListRef,
}) => {
  return (
    <div
      className={` bg-[#FCFCFD] shadow-[rgba(15, 15, 15, 0.12)] flex justify-center items-center rounded-[17.25px] shadow-2xl containerButtonsLaptop containerButtonsTablet containerButtonsMobile`}
    >
      <button
        className="bg-[#FCFCFD] flex justify-center items-center rounded-none border-none border-r-[2.16px] border-[#E6E8EC] laptop:h-[25.87px] hover:border-none"
        onClick={() =>
          handleScroll(
            -cardWidth,
            scrollPosition,
            setScrollPosition,
            containerTrendiesListRef
          )
        }
      >
        <img alt="arrow left" src={arrowLeft} />
      </button>
      <button
        className="bg-[#FCFCFD] flex justify-center items-center rounded-none laptop:h-[25.87px] hover:border-none"
        onClick={() =>
          handleScroll(
            cardWidth,
            scrollPosition,
            setScrollPosition,
            containerTrendiesListRef
          )
        }
      >
        <img alt="arrow right" src={arrowRight} />
      </button>
    </div>
  );
};
BtnsArrows.propTypes = {
  scrollPosition: number,
  setScrollPosition: func,
  containerTrendiesListRef: object,
};
export default BtnsArrows;
