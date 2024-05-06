import { number, shape } from "prop-types";
import cardMark from "../../../../../assets/cardMark.svg";
import { topCollectionUsersProps } from "../../../../../props";
const UnleashRecentViewedItem = ({ user, index }) => {
  const { name, userName, avatarImg, volume, percentagePerDay } = user;
  return (
    <section className="flex items-center justify-between w-full">
      <div className="flex">
        <div className="relative">
          <figure>
            <img
              src={avatarImg}
              alt="avatar user"
              className="border-[1.92px] rounded-full desktop:w-[46.09px] desktop:h-[46.09px] laptop:w-[28.93px] laptop:h-[28.93px] tablet:w-[28.93px] tablet:h-[28.93px]  mobile:w-[19.45px] mobile:h-[19.45px]"
            />
          </figure>
          <span className="flex justify-center items-center text-[#141416]  bg-white rounded-full  top-[60%] left-[60%]  tablet:top-[60%] absolute font-poppins   font-semibold  indexUnleashRecentViewedDesktop  indexUnleashRecentViewedLaptop indexUnleashRecentViewedTablet indexUnleashRecentViewedMobile ">
            {index}
          </span>
        </div>
        <div className="flex flex-col  justify-between ml-4">
          <span className="text-[#141416] font-poppins font-medium desktop:text-[15.36px] laptop:text-[9.64px] tablet:text-[9.64px] mobile:text-[6.48px] mobile:leading-[9.07px]  desktop:leading-[21.51px] laptop:leading-[13.5px] ">
            {name}
          </span>
          <span className="text-[#64748B] font-poppins desktop:text-[12.48px] laptop:text-[7.83px] tablet:text-[7.83px] mobile:text-[5.27px] font-normal desktop:leading-[18.72px] laptop:leading-[11.75px] mobile:leading-[7.9px]">
            {userName}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center  justify-center">
        <figure className="flex justify-center items-center">
          <img
            src={cardMark}
            alt="card mark"
            className="desktop:w-[17.28px] desktop:h-[17.28px] laptop:w-[10.85px] laptop:h-[10.85px]  tablet:w-[10.85px] tablet:h-[10.85px] mobile:w-[7.29px] mobile:h-[7.29px]"
          />
          <span className="font-poppins font-semibold text-[15.36px] laptop:text-[9.64px] tablet:text-[9.64px] mobile:text-[6.48px] text-[#141416] leading-[21.51px] laptop:leading-[13.5px] mobile:leading-[9.07px]">
            {volume}
          </span>
        </figure>
        <span
          className={`font-poppins font-[400] laptop:text-[8.44px] laptop:leading-[12.66px]  tablet:text-[8.44px] tablet:leading-[12.66px]  mobile:text-[5.67px] mobile:leading-[8.51px] ${
            percentagePerDay[0] === "+" ? "text-[#10C352]" : "text-[#E23333]"
          }`}
        >
          {percentagePerDay}
        </span>
      </div>
    </section>
  );
};
UnleashRecentViewedItem.propTypes = {
  user: shape(topCollectionUsersProps).isRequired,
  index: number,
};
export default UnleashRecentViewedItem;
