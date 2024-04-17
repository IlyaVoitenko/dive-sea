import NftStatistic from "./NftStatistic";
import NftButtons from "./NftButtons";
import TitleAndLine from "./TitleAndLine";
import TitleAndSubtitle from "./TitleAndSubtitle";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const NftTitle = () => {
  const widthWindow = useWindowDimensions();
  return (
    <div className="flex flex-col ">
      <div className=" laptop:w-[567px] tablet:w-[403.24px] mobile:w-[310.94px] flex flex-col mt-[5rem] mobile:justify-center mobile:items-center ">
        <TitleAndLine widthWindow={widthWindow} />
        <TitleAndSubtitle />
        <NftButtons />
      </div>
      <NftStatistic widthWindow={widthWindow} />
    </div>
  );
};

export default NftTitle;
