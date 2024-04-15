import NftTitle from "./NftTitle";
import NftImages from "./NftImages";
const NftTitleAndImages = () => {
  return (
    <div className="flex  w-full justify-end">
      <div className="flex laptop:w-[95%] tablet:w-[95%]  ">
        <NftTitle />
        <NftImages />
      </div>
    </div>
  );
};

export default NftTitleAndImages;
