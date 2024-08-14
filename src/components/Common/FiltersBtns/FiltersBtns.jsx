import { bool } from "prop-types";
import { useDispatch } from "react-redux";
import {
  setAllProducts,
  setFilterByCollections,
  setFilterByPrice,
  setFilterById,
} from "../../../store/reducers/product";
import iconCategory from "../../../assets/IconCategory.svg";
import iconCollection from "../../../assets/IconCollection.svg";
import iconPrice from "../../../assets/IconPrice.svg";
const FiltersBtns = ({ isShowAllBtn = false, isStatPage = false }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`flex justify-evenly items-center   text-[#141416] tablet:w-[75%] laptop:w-[60%] mobile:w-full desktop:w-[545.8px] ${
        isStatPage && "mb-12 mt-1"
      }  ${!isShowAllBtn && "laptop:w-[500px] mt-[2rem]"}`}
    >
      <button
        onClick={() => dispatch(setAllProducts())}
        className={`filerBtns mobile:hidden ${!isShowAllBtn && "hidden"} ${
          isStatPage && "hidden"
        }`}
      >
        <span>All</span>
      </button>
      <button className="filerBtns" onClick={() => dispatch(setFilterById())}>
        <img src={iconCategory} alt="icon category" className="filterImgs" />
        <span>Category</span>
      </button>
      <button
        className="filerBtns"
        onClick={() => dispatch(setFilterByCollections())}
      >
        <img
          src={iconCollection}
          alt="icon collection"
          className="filterImgs"
        />
        <span>Collection</span>
      </button>
      <button
        className="filerBtns"
        onClick={() => dispatch(setFilterByPrice())}
      >
        <img src={iconPrice} alt="icon price" className="filterImgs" />
        <span>Price</span>
      </button>
    </div>
  );
};
FiltersBtns.propTypes = { isShowAllBtn: bool, isStatPage: bool };
export default FiltersBtns;
