import FiltersBtns from "../../Common/FiltersBtns";
import { TrendList } from "../Weekly/TrendiesList/constants";
import CardsList from "../../Common/CardsList";
import ExploneBtn from "../../Common/ExploreBtn";
const ExploreMarketplace = () => {
  return (
    <div className="flex flex-col justify-evenly items-center h-full w-[90%] mobile:w-full bg-white">
      <div className=" flex flex-col justify-between items-center w-full h-[120px]">
        <h2 className="text-[#141416] font-poppins font-semibold titleExploreMarketplaceDesktop titleExploreMarketplaceLaptop titleExploreMarketplaceTablet titleExploreMarketplaceMobile">
          Explore Marketplace
        </h2>
        <FiltersBtns isShowAllBtn={true} />
      </div>
      <CardsList list={TrendList} />
      <div className="mt-[4rem] flex justify-end  w-full  ">
        <ExploneBtn />
      </div>
    </div>
  );
};

export default ExploreMarketplace;
