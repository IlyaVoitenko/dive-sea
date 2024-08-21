import cardMark from "../../../../../../../assets/cardMark.svg";
import { bool, string } from "prop-types";

const Volume = ({ volume, percentagePerDay, isStatPage = false }) => {
  return (
    <td className="flex mobile:flex-col justify-center mobile:justify-evenly items-center h-full ">
      <div className="flex justify-center items-center">
        <img
          src={cardMark}
          alt="card mark"
          className={`  ${
            isStatPage
              ? "cardMarkImg"
              : "laptop:w-[31.52px] laptop:h-[31.52px] mobile:w-[17.34px] mobile:h-[17.34px]"
          } `}
        />
        <span
          className={` ${
            isStatPage
              ? "textWithCardMarkImg"
              : "font-poppins font-semibold text-[24.51px] mobile:text-[15.41px] text-[#141416] leading-[34.32px] mobile:leading-[21.58px]"
          }`}
        >
          {volume}
        </span>
      </div>

      <span
        className={` ${
          isStatPage
            ? "font-outfit font-[500] desktop:text-[22.84px] desktop:leading-[29.7px] laptop:text-[16.25px] laptop:leading-[21.12px] tablet:text-[16.25px] tablet:leading-[21.12px]  tracking-[1%] tablet:hidden laptop:hidden desktop:hidden"
            : "mobile:text-[13.49px] font-poppins font-normal tablet:hidden laptop:hidden desktop:hidden   mobile:leading-[20.23px] "
        }   ${
          percentagePerDay[0] === "+" ? "text-[#10C352]" : "text-[#E23333]"
        }`}
      >
        {percentagePerDay}
      </span>
    </td>
  );
};
Volume.propTypes = {
  volume: string,
  percentagePerDay: string,
  isStatPage: bool,
};
export default Volume;
