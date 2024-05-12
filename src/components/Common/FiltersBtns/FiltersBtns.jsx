import { bool } from "prop-types";
import iconCategory from "../../../assets/IconCategory.svg";
import iconCollection from "../../../assets/IconCollection.svg";
import iconPrice from "../../../assets/IconPrice.svg";
const FiltersBtns = ({ isShowAllBtn = false }) => {
  return (
    <div
      className={`flex justify-evenly items-center   text-[#141416] tablet:w-[75%] laptop:w-[60%] mobile:w-full desktop:w-[545.8px]  ${
        !isShowAllBtn && "laptop:w-[500px] mt-[2rem]"
      }`}
    >
      <button
        className={`filerBtns mobile:hidden ${!isShowAllBtn && "hidden"}`}
      >
        <span>All</span>
      </button>
      <button className="filerBtns">
        <img src={iconCategory} alt="icon category" className="filterImgs" />
        <span>Category</span>
      </button>
      <button className="filerBtns">
        <img
          src={iconCollection}
          alt="icon collection"
          className="filterImgs"
        />
        <span>Collection</span>
      </button>
      <button className="filerBtns">
        <img src={iconPrice} alt="icon price" className="filterImgs" />
        <span>Price</span>
      </button>
    </div>
  );
};
FiltersBtns.propTypes = { isShowAllBtn: bool };
export default FiltersBtns;
