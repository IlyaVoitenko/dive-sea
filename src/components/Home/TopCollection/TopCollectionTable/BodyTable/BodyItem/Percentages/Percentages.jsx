import { bool, string } from "prop-types";

const Percentages = ({ percentagePerDay, isStatPage = false }) => {
  return (
    <td className="text-center mobile:hidden">
      <span
        className={` ${
          isStatPage
            ? "font-outfit font-[500] desktop:text-[22.84px] desktop:leading-[29.7px] laptop:text-[16.25px] laptop:leading-[21.12px] tablet:text-[16.25px] tablet:leading-[21.12px]  tracking-[1%]"
            : "text-[24.51px] font-poppins font-medium  leading-[31.87px] tracking-[1%] "
        } ${percentagePerDay[0] === "+" ? "text-[#10C352]" : "text-[#E23333]"}`}
      >
        {percentagePerDay}
      </span>
    </td>
  );
};

Percentages.propTypes = { percentagePerDay: string, isStatPage: bool };

export default Percentages;
