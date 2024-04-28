import cardMark from "../../../../../../../assets/cardMark.svg";
import { topCollectionUsersProps } from "../../../../../../../props";
const { volume, percentagePerDay } = topCollectionUsersProps;

const Volume = ({ volume, percentagePerDay }) => {
  return (
    <td className="flex mobile:flex-col justify-center mobile:justify-evenly items-center h-full ">
      <div className="flex justify-center items-center">
        <img
          src={cardMark}
          alt="card mark"
          className="laptop:w-[31.52px] laptop:h-[31.52px] mobile:w-[17.34px] mobile:h-[17.34px]"
        />
        <span className="font-poppins font-semibold text-[24.51px] mobile:text-[15.41px] text-[#141416] leading-[34.32px] mobile:leading-[21.58px]">
          {volume}
        </span>
      </div>

      <span
        className={`  mobile:text-[13.49px] font-poppins font-normal tablet:hidden  mobile:leading-[20.23px]  ${
          percentagePerDay[0] === "+" ? "text-[#10C352]" : "text-[#E23333]"
        }`}
      >
        {percentagePerDay}
      </span>
    </td>
  );
};
Volume.propTypes = {
  volume,
  percentagePerDay,
};
export default Volume;
