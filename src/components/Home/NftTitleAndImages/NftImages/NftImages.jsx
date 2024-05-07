import orangeCircle from "../../../../assets/orangeCircle.svg";
import stones from "../../../../assets/stones.svg";
import arrow from "../../../../assets/arrow.svg";
import netting from "../../../../assets/netting.svg";
import BtnsArrows from "./BtnsArrows";

const NftImages = () => {
  return (
    <figure className="flex laptop:h-[553.99px] justify-between w-full mobile:h-[400px]  mobile:bg-[#FCFCFD] mobile:mt-[3rem] ">
      <div className=" flex flex-col laptop:justify-start laptop:items-center tablet:justify-evenly items-center desktop:w-[70%] ">
        <img
          src={stones}
          alt="stones"
          className={`stonesDesktop stonesLaptop stonesTablet`}
        />
        <BtnsArrows />
      </div>
      <div className=" flex flex-col  desktop:w-[40%] desktop:items-end laptop:justify-center ">
        <div className=" flex relative   laptop:top-[4%] desktop:top-[4%] mobile:top-[3.6%] mobile:left-[1%] tablet:top-[12%] laptop:w-full smallTablet:w-[85px]  tablet:w-[130px] justify-end items-end desktop:justify-between mobile:justify-between">
          <img
            src={arrow}
            alt="arrow"
            className={`arrowDesktop  arrowLaptop arrowTablet arrowMobile`}
          />
          <img
            src={netting}
            alt="netting"
            className={`nettingDesktop nettingLaptop nettingTablet nettingMobile`}
          />
        </div>
        <img
          src={orangeCircle}
          alt="orange circle"
          className={` orangeCircleDesktop orangeCircleLaptop orangeCircleTablet  `}
        />
      </div>
    </figure>
  );
};

export default NftImages;
