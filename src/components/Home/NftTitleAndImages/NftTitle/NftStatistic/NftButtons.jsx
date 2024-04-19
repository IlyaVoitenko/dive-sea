import { widthWindowProps } from "../../../../../props";
import greenStartLabel from "../../../../../assets/greenStartLabel.svg";
import star from "../../../../../assets/start.svg";
import { starts, featuresList } from "../../constants";

const NftStatistic = ({ widthWindow }) => {
  return (
    <div className="flex flow-row justify-between mobile:justify-center  laptop:mt-[3.75rem]  laptop:w-[452.96px] tablet:w-[322.29px] tablet:mt-[3rem]">
      {widthWindow > 426 ? (
        featuresList.map((item, index) => (
          <div key={index}>
            <span
              className={`text-[#141416] font-public font-semibold sizeLaptopItemTitle sizeTabletItemTitle`}
            >
              {item.title}
            </span>
            <br></br>
            <span
              className={`text-[#848586] font-inter font-medium sizeLaptopItemSubtitle sizeTabletItemSubtitle`}
            >
              {item.subtitle}
            </span>
          </div>
        ))
      ) : (
        <div className="flex flex-row justify-evenly items-center w-full mt-3">
          <img src={greenStartLabel} alt="" />
          <figure className="flex flex-row justify-center items-center mt-1">
            {starts.map((_, index) => (
              <img
                key={index}
                alt="star"
                src={star}
                className="w-[12.78px] h-[12.24px]"
              />
            ))}
          </figure>

          <span className="text-[12.81px] font-medium text-[#334155] font-jakarta leading-[19.22px]">
            4900+
          </span>
        </div>
      )}
    </div>
  );
};
NftStatistic.propTypes = widthWindowProps;

export default NftStatistic;
