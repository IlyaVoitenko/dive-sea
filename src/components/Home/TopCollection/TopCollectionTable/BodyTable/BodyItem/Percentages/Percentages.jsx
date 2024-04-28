import { topCollectionUsersProps } from "../../../../../../../props";

const { percentagePerDay } = topCollectionUsersProps;

const Percentages = ({ percentagePerDay }) => {
  return (
    <td className="text-center mobile:hidden">
      <span
        className={` text-[24.51px] font-poppins font-medium  leading-[31.87px] tracking-[1%] ${
          percentagePerDay[0] === "+" ? "text-[#10C352]" : "text-[#E23333]"
        }`}
      >
        {percentagePerDay}
      </span>
    </td>
  );
};

Percentages.propTypes = { percentagePerDay };

export default Percentages;
