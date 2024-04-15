import orangeCircle from "../../../assets/testOrange.svg";
import stones from "../../../assets/stones.svg";
import arrow from "../../../assets/arrow.svg";
import netting from "../../../assets/netting.svg";
import arrowLeft from "../../../assets/arrowLeft.svg";
import arrowRight from "../../../assets/arrowRight.svg";

import {
  stonesLaptop,
  arrowLaptop,
  orangeCircleLaptop,
  nettingLaptop,
  containerButtonsLaptop,
} from "./style";
const NftImages = () => {
  return (
    <figure className=" flex laptop:h-[553.99px] w-full ">
      <div className=" flex flex-col justify-start items-center">
        <img src={stones} alt="stones" className={` ${stonesLaptop}`} />
        <div
          className={` bg-[#FCFCFD] flex justify-center items-center rounded-[17.25px] shadow-2xl ${containerButtonsLaptop}`}
        >
          <button className="bg-[#FCFCFD] flex justify-center items-center rounded-none border-none border-r-[2.16px] border-[#E6E8EC] laptop:h-[25.87px]">
            <img alt="arrow left" src={arrowLeft} />
          </button>
          <button className="bg-[#FCFCFD] flex justify-center items-center rounded-none laptop:h-[25.87px]">
            <img alt="arrow right" src={arrowRight} />
          </button>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-end">
        <div className=" flex relative top-[5%] w-[280px]  justify-between items-end ">
          <img src={arrow} alt="arrow" className={`  ${arrowLaptop}`} />
          <img src={netting} alt="netting" className={` ${nettingLaptop}`} />
        </div>
        <img
          src={orangeCircle}
          alt="orange circle"
          className={`${orangeCircleLaptop}`}
        />
      </div>
    </figure>
  );
};

export default NftImages;
