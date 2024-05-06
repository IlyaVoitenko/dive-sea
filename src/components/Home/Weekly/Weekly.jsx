import TrendiesList from "./TrendiesList";
import RecentViewed from "./RecentViewed";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
const Weekly = () => {
  const widthWindow = useWindowDimensions();

  return (
    <div className="relative flex flex-col justify-start items-center bg-[#F1F1F1] w-screen laptop:h-[989px] desktop:h-[800px] desktop:mt-[4rem] tablet:mt-[2.5rem] laptop:mt-[1rem]">
      <h2 className="font-poppins text-[#C5C5C5] font-semibold titleLaptopWeekly titleDesktopWeekly titleTabletWeekly titleMobileWeekly">
        Weekly - Top NFT
      </h2>
      <TrendiesList />
      {widthWindow >= 1024 && (
        <section className="absolute bg-white flex flex-col justify-start items-center rounded-[16px] desktop:top-[82%]  top-[87%] left-[60%] w-[365px] h-[246px]">
          <RecentViewed />
        </section>
      )}
    </div>
  );
};

export default Weekly;
