import {
  featuresList,
  sizeLaptopHr,
  sizeTableHr,
  sizeLaptopTitleNft,
  sizeTabletTitleNft,
  sizeLaptopSubtitleNft,
  sizeTabletSubtitleNft,
  sizeLaptopNftBtn,
  sizeTabletNftBtn,
  sizeLaptopItemTitle,
  sizeLaptopItemSubtitle,
  sizeTabletItemTitle,
  sizeTabletItemSubtitle,
  sizeLaptopExploreBtn,
  sizeTabletExploreBtn,
  sizeTabletTextNftBtns,
  sizeLaptopTextNftBtns,
} from "./constants";

const NftTitleAndImages = () => {
  return (
    <div className="flex flex-col">
      <div className=" laptop:w-[567px] tablet:w-[403.24px] flex flex-col mt-[5rem] ">
        <hr
          className={`${sizeLaptopHr} ${sizeTableHr} bg-[#201F1F] border-[0.71px]`}
        />
        <h1
          className={`${sizeLaptopTitleNft} ${sizeTabletTitleNft} font-poppins font-semibold text-[#141416] `}
        >
          Discover And Create NFTs
        </h1>
        <h5
          className={`${sizeLaptopSubtitleNft} ${sizeTabletSubtitleNft} mt-3 font-inter text-gray-400 text-justify font-normal`}
        >
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over
          Thousands Of NFTs And Get a{" "}
          <span
            className={`font-inter font-semibold text-black ${sizeLaptopSubtitleNft} ${sizeTabletSubtitleNft}  text-justify`}
          >
            $20 bonus.
          </span>
        </h5>
        <div className=" flex justify-between laptop:w-[340px] laptop:mt-[2rem] tablet:w-[241.8px] tablet:mt-[1.5rem]">
          <button
            className={`rounded-[12.41px] ${sizeLaptopExploreBtn} ${sizeTabletExploreBtn} font-poppins text-white font-medium ${sizeLaptopTextNftBtns} ${sizeTabletTextNftBtns}`}
          >
            EXPLORE MORE
          </button>{" "}
          <button
            className={`bg-white border-black border-solid ${sizeLaptopNftBtn} ${sizeTabletNftBtn} font-poppins text-black font-medium tracking-[1%] ${sizeLaptopTextNftBtns} ${sizeTabletTextNftBtns}`}
          >
            CREATE NFT
          </button>
        </div>
      </div>
      <div className="flex flow-row justify-between laptop:mt-[3.75rem]  laptop:w-[452.96px] tablet:w-[322.29px] tablet:mt-[3rem]">
        {featuresList.map((item, index) => (
          <div key={index}>
            <span
              className={`text-[#141416] font-public font-semibold ${sizeLaptopItemTitle} ${sizeTabletItemTitle}`}
            >
              {item.title}
            </span>
            <br></br>
            <span
              className={`text-[#848586] font-inter font-medium ${sizeLaptopItemSubtitle} ${sizeTabletItemSubtitle}`}
            >
              {item.subtitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NftTitleAndImages;
