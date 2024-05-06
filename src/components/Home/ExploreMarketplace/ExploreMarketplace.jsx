import FiltersBtns from "./FiltersBtns";
import TrendiesCard from "../Weekly/TrendiesList/TrendiesCard";
import { TrendList } from "../Weekly/TrendiesList/constants";
import ExploneBtn from "../../ExploreBtn";
const ExploreMarketplace = () => {
  return (
    <div className="flex flex-col justify-evenly items-center h-full w-[90%] mobile:w-full bg-white">
      <h2 className="text-[#141416] font-poppins font-semibold titleExploreMarketplaceDesktop titleExploreMarketplaceLaptop titleExploreMarketplaceTablet titleExploreMarketplaceMobile">
        Explore Marketplace
      </h2>
      <FiltersBtns />
      <div className="flex flex-wrap justify-evenly mobile:justify-center gap-[40px] desktop:w-full">
        {TrendList.map((card) => (
          <TrendiesCard key={card.id} card={card} />
        ))}
      </div>
      <div className="mt-[4rem] flex justify-end  w-full ">
        <ExploneBtn />
      </div>
    </div>
  );
};

export default ExploreMarketplace;
