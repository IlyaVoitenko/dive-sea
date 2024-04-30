import TrendiesList from "./TrendiesList";
import RecentViewed from "./RecentViewed";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
const Weekly = () => {
  const widthWindow = useWindowDimensions();

  return (
    <div className="relative flex flex-col justify-start items-center bg-[#F1F1F1] w-screen laptop:h-[989px]  desktop:mt-[4rem] tablet:mt-[2.5rem] laptop:mt-[1rem]">
      <h2 className="font-poppins text-[#C5C5C5] font-semibold titleLaptopWeekly titleDesktopWeekly titleTabletWeekly titleMobileWeekly">
        Weekly - Top NFT
      </h2>
      <TrendiesList />
      {widthWindow >= 1024 && <RecentViewed />}
    </div>
  );
};

export default Weekly;
