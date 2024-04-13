import star from "../../assets/start.svg";
import greenStartLabel from "../../assets/greenStartLabel.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {
  starts,
  featuresList,
  sizeLaptopHr,
  sizeTableHr,
  sizeMobileHr,
  sizeLaptopTitleNft,
  sizeTabletTitleNft,
  sizeMobileTitleNft,
  sizeLaptopSubtitleNft,
  sizeTabletSubtitleNft,
  sizeMobileSubtitleNft,
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
  const widthWindow = useWindowDimensions();
  return (
    <div className="flex flex-col">
      <div className=" laptop:w-[567px] tablet:w-[403.24px] mobile:w-[310.94px] flex flex-col mt-[5rem] mobile:justify-center mobile:items-center ">
        <div className="flex mobile:flex-row  mobile:justify-center mobile:items-center">
          <hr
            className={`${sizeLaptopHr} ${sizeTableHr} ${sizeMobileHr} bg-[#201F1F] border-[0.71px] mobile:border-[0.62px] border-solid `}
          />
          {widthWindow <= 425 && (
            <span className="font-poppins text-[#201F1F] ml-2 text-[9.25px] leading-[11.1px] tracking-[1.23px]">
              OVER 1M CREATORS
            </span>
          )}
        </div>

        <h1
          className={`${sizeLaptopTitleNft} ${sizeTabletTitleNft} ${sizeMobileTitleNft} font-poppins font-semibold text-[#141416] `}
        >
          Discover And Create NFTs
        </h1>
        <h5
          className={`${sizeLaptopSubtitleNft} ${sizeTabletSubtitleNft} ${sizeMobileSubtitleNft} mt-3 font-inter text-gray-400 text-justify font-normal`}
        >
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over
          Thousands Of NFTs And Get a{" "}
          <span
            className={`font-inter font-semibold text-black ${sizeLaptopSubtitleNft} ${sizeTabletSubtitleNft}  text-justify`}
          >
            $20 bonus.
          </span>
        </h5>
        <div className="flex justify-between mobile:w-full laptop:w-[340px] laptop:mt-[2rem] tablet:w-[241.8px] tablet:mt-[1.5rem] mobile:mt-[1rem]">
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
      <div className="flex flow-row justify-between mobile:justify-center laptop:mt-[3.75rem]  laptop:w-[452.96px] tablet:w-[322.29px] tablet:mt-[3rem]">
        {widthWindow > 425 ? (
          featuresList.map((item, index) => (
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
          ))
        ) : (
          <div className="flex flex-row justify-evenly items-center w-full mt-3">
            <img src={greenStartLabel} alt="" />
            <figure className="flex flex-row justify-center items-center mt-1">
              {starts.map((_, index) => (
                <img
                  key={index}
                  alt="star"
                  src={star}
                  className="w-[12.78px] h-[12.24px]"
                />
              ))}
            </figure>

            <span className="text-[12.81px] font-medium text-[#334155] font-jakarta leading-[19.22px]">
              4900+
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NftTitleAndImages;
