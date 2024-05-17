import FiltersBtns from "../../Common/FiltersBtns";
import CardsList from "../../Common/CardsList";
import ExploneBtn from "../../Common/ExploreBtn";
import { useSelector } from "react-redux";
import { arrayCardsSelector } from "../../../store/selectors";
const ExploreMarketplace = () => {
  const cardsList = useSelector(arrayCardsSelector);
  const cardsListCropped = cardsList.slice(0, 7);
  return (
    <div className="flex flex-col justify-evenly items-center h-full w-[90%] mobile:w-full bg-white">
      <div className=" flex flex-col justify-between items-center w-full h-[120px]">
        <h2 className="text-[#141416] font-poppins font-semibold titleExploreMarketplaceDesktop titleExploreMarketplaceLaptop titleExploreMarketplaceTablet titleExploreMarketplaceMobile">
          Explore Marketplace
        </h2>
        <FiltersBtns isShowAllBtn={true} />
      </div>
      <CardsList list={cardsListCropped} />
      <div className="mt-[4rem] flex justify-end  w-full  ">
        <ExploneBtn />
      </div>
    </div>
  );
};

export default ExploreMarketplace;
