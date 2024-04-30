import iconCategory from "../../../../assets/IconCategory.svg";
import iconCollection from "../../../../assets/IconCollection.svg";
import iconPrice from "../../../../assets/IconPrice.svg";
const FiltersBtns = () => {
  return (
    <div className="flex justify-evenly items-center mt-[4rem] mb-[4rem] text-[#141416] tablet:w-[75%] laptop:w-[60%] mobile:w-full desktop:w-1/2">
      <button className="filerBtns mobile:hidden">
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

export default FiltersBtns;
