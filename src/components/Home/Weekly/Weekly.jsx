import TrendiesList from "./TrendiesList";
import BtnsArrows from "../NftTitleAndImages/NftImages/BtnsArrows";
const Weekly = () => {
  return (
    <div className=" flex flex-col justify-start items-center bg-[#F1F1F1] w-screen laptop:h-[989px] desktop:mt-[4rem] tablet:mt-[2.5rem] laptop:mt-[1rem]">
      <h2 className="font-poppins text-[#C5C5C5] font-semibold titleLaptopWeekly titleDesktopWeekly titleTabletWeekly">
        Weekly - Top NFT
      </h2>
      <TrendiesList />
      <BtnsArrows />
    </div>
  );
};

export default Weekly;
