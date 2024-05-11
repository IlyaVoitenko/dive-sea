import { bool } from "prop-types";
import iconCategory from "../../../assets/IconCategory.svg";
import iconCollection from "../../../assets/IconCollection.svg";
import iconPrice from "../../../assets/IconPrice.svg";
const FiltersBtns = ({ isShowAllBtn = false }) => {
  return (
    <div className="flex justify-evenly items-center mt-[4rem] mb-[4rem] text-[#141416] tablet:w-[75%] laptop:w-[60%] mobile:w-full desktop:w-[545.8px]">
      <button
        className={`filerBtns mobile:hidden ${!isShowAllBtn && "hidden"}`}
      >
        <span>All</span>
      </button>
      <button className="filerBtns">
        <img src={iconCategory} alt="icon category" />
        <span>Category</span>
      </button>
      <button className="filerBtns">
        <img src={iconCollection} alt="icon collection" />
        <span>Collection</span>
      </button>
      <button className="filerBtns">
        <img src={iconPrice} alt="icon price" />
        <span>Price</span>
      </button>
    </div>
  );
};
FiltersBtns.propTypes = { isShowAllBtn: bool };
export default FiltersBtns;
