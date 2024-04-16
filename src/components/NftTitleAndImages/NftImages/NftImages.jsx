import orangeCircle from "../../../assets/testOrange.svg";
import stones from "../../../assets/stones.svg";
import arrow from "../../../assets/arrow.svg";
import netting from "../../../assets/netting.svg";

import BtnsArrows from "./BtnsArrows";

import {
  stonesLaptop,
  stonesTablet,
  arrowLaptop,
  arrowTablet,
  arrowMobile,
  orangeCircleLaptop,
  orangeCircleTablet,
  nettingLaptop,
  nettingTablet,
  nettingMobile,
} from "./style";
const NftImages = () => {
  return (
    <figure className=" flex laptop:h-[553.99px] w-full mobile:h-[400px] mobile:bg-[#FCFCFD] mobile:mt-[3rem]">
      <div className=" flex flex-col laptop:justify-start laptop:items-center tablet:justify-evenly items-center ">
        <img
          src={stones}
          alt="stones"
          className={` ${stonesLaptop} ${stonesTablet}`}
        />
        <BtnsArrows />
      </div>
      <div className=" flex flex-col laptop:items-center laptop:justify-end">
        <div className=" flex relative  laptop:top-[5%] mobile:top-[3%] mobile:left-[1%] tablet:top-[12%] laptop:w-[280px] tablet:w-[130px]  justify-between tablet:justify-evenly items-end ">
          <img
            src={arrow}
            alt="arrow"
            className={`${arrowLaptop} ${arrowTablet} ${arrowMobile}`}
          />
          <img
            src={netting}
            alt="netting"
            className={` ${nettingLaptop} ${nettingTablet} ${nettingMobile}`}
          />
        </div>
        <img
          src={orangeCircle}
          alt="orange circle"
          className={`${orangeCircleLaptop} ${orangeCircleTablet}`}
        />
      </div>
    </figure>
  );
};

export default NftImages;
