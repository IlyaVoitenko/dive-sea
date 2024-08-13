import { bool, func } from "prop-types";
import boxWithStar from "../../../assets/boxWithStar.svg";
import boxWithStarUnactive from "../../../assets/boxWithStarUnactive.svg";
import compassActive from "../../../assets/compassActive.svg";
import compassUnactive from "../../../assets/compassUnactive.svg";

const BtnsFilter = ({ isFilterActive, setIsFilterActive }) => {
  return (
    <div className="text-[#000000] flex desktop:w-[663px] desktop:h-[43.33px] laptop:w-[478.36px] laptop:h-[30.81px] tablet:w-[365px] tablet:h-[30.81px] mobile:w-[314px] mobile:h-[33.94px] mt-[4rem]">
      <button
        onClick={() => setIsFilterActive(!isFilterActive)}
        className={` btnsFiltersCreatorPage ${
          isFilterActive
            ? "btnsFiltersCreatorPageActive"
            : "btnsFiltersCreatorPageNotActive"
        }`}
      >
        <img
          src={isFilterActive ? boxWithStar : boxWithStarUnactive}
          className="desktop:w-[24.91px] desktop:h-[23.83px] laptop:w-[17.73px] laptop:h-[16.96px] tablet:w-[17.73px] tablet:h-[16.96px] mobile:w-[19.64px] mobile:h-[18.79px]"
          alt="box with star"
        />
        &nbsp; Collection
      </button>
      <button
        onClick={() => setIsFilterActive(!isFilterActive)}
        className={`btnsFiltersCreatorPage ${
          !isFilterActive
            ? "btnsFiltersCreatorPageActive"
            : "btnsFiltersCreatorPageNotActive"
        }`}
      >
        <img
          src={!isFilterActive ? compassActive : compassUnactive}
          className="desktop:w-[24.91px] desktop:h-[23.83px] laptop:w-[17.73px] laptop:h-[16.96px] tablet:w-[17.73px] tablet:h-[16.96px] mobile:w-[19.64px] mobile:h-[18.79px]"
          alt="box with star"
        />
        &nbsp; Activity
      </button>
    </div>
  );
};
BtnsFilter.propTypes = { isFilterActive: bool, setIsFilterActive: func };
export default BtnsFilter;
