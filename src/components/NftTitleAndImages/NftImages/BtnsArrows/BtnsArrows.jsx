import arrowLeft from "../../../../assets/arrowLeft.svg";
import arrowRight from "../../../../assets/arrowRight.svg";

import { containerButtonsLaptop, containerButtonsTablet } from "../style";
const BtnsArrows = () => {
  return (
    <div
      className={` bg-[#FCFCFD] shadow-[rgba(15, 15, 15, 0.12)] flex justify-center items-center rounded-[17.25px] shadow-2xl ${containerButtonsLaptop} ${containerButtonsTablet}`}
    >
      <button className="bg-[#FCFCFD] flex justify-center items-center rounded-none border-none border-r-[2.16px] border-[#E6E8EC] laptop:h-[25.87px] ">
        <img alt="arrow left" src={arrowLeft} />
      </button>
      <button className="bg-[#FCFCFD] flex justify-center items-center rounded-none laptop:h-[25.87px]">
        <img alt="arrow right" src={arrowRight} />
      </button>
    </div>
  );
};

export default BtnsArrows;
