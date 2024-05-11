import TopCollectionTable from "./TopCollectionTable";
import ExploreBtn from "../../Common/ExploreBtn";
const TopCollection = () => {
  return (
    <div className="flex flex-col justify-evenly items-center bg-white h-[896.59px]  w-full">
      <h2 className="titleTopCollection">Top Collection</h2>
      <TopCollectionTable />
      <ExploreBtn />
    </div>
  );
};

export default TopCollection;
