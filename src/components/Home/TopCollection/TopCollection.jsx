import TopCollectionTable from "./TopCollectionTable";
import ExploreBtn from "../ExploreBtn";
const TopCollection = () => {
  return (
    <div className="flex flex-col justify-evenly items-center bg-white h-[896.59px]  w-full">
      <h2 className="text-[#141416] text-[45.04px] font-poppins font-semibold leading-[44.75px]">
        Top Collection
      </h2>
      <TopCollectionTable />
      <ExploreBtn />
    </div>
  );
};

export default TopCollection;
