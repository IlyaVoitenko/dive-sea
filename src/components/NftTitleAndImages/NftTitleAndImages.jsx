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
  sizeLaptopSpanNftBtn,
  sizeTabletSpanNftBtn,
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
          className={`${sizeLaptopSubtitleNft} ${sizeTabletSubtitleNft} font-inter text-gray-400 text-justify   font-normal  tablet:w-[354.88px] `}
        >
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over
          Thousands Of NFTs And Get a{" "}
          <span className="font-inter font-semibold text-black text-[18px] leading-[28px] text-justify">
            $20 bonus.
          </span>
        </h5>
        <div className=" flex justify-between laptop:w-[340px] laptop:mt-[2rem] tablet:w-[241.8px]">
          <button className="rounded-[12.41px] laptop:w-[179px] laptop:h-[60px] ">
            Explore More
          </button>{" "}
          <button
            className={`bg-white border-black border-solid ${sizeLaptopNftBtn} ${sizeTabletNftBtn}`}
          >
            <span
              className={`font-poppins text-black font-medium tracking-[1%] ${sizeLaptopSpanNftBtn} ${sizeTabletSpanNftBtn}`}
            >
              CREATE NFT
            </span>
          </button>
        </div>
      </div>
      <div className="flex flow-row justify-between laptop:mt-[3.75rem]  laptop:w-[452.96px]">
        {featuresList.map((item, index) => (
          <div key={index}>
            <span className="text-[#141416] text-[36.77px] font-public font-semibold leading-[45.96px]">
              {item.title}
            </span>
            <br></br>
            <span className="text-[#848586] font-inter font-medium laptop:leading-[18.39px] laptop:text-[12.26px]">
              {item.subtitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NftTitleAndImages;
