import bannerStones from "../../../assets/stoneTest.svg";
import stoneTestOpacity from "../../../assets/stoneTestOpacity.svg";

const BannerNft = () => {
  return (
    <div className="flex justify-center items-center  bannerContainerSize">
      <div className="bg-[#141416] rounded-[15.79px] flex mobile:flex-col justify-around bannerSize">
        <section className="flex flex-col items-start justify-around mobile:pt-[1rem] mobile:justify-start  mobile:items-center w-[45%] mobile:w-full mobile:h-[200px]">
          <div className=" flex flex-col justify-between mobile:justify-center h-[35%]">
            <h2 className="bannerNftTitle">Create and Sell NFTs</h2>
            <p className="bannerNftSubtitle">World’s Largest NFT Place</p>
          </div>

          <div className="flex justify-between w-[70%]  mobile:w-[70%] mobile:mt-[1rem] tablet:w-[90%] desktop:w-[70%]">
            <button className="bg-white  btnsBannerNft">
              <span className="text-[#141416] font-outfit font-semibold mobile:text-[10.58px] mobile:leading-[13.76px] mobile:tracking-[1%] tablet:text-[15.2px] tablet:leading-[19.77px] tablet:tracking-[1%] laptop:text-[15.2px] laptop:leading-[19.77px] laptop:tracking-[1%] desktop:text-[21.36px] desktop:leading-[27.76px] desktop:tracking-[1%] ">
                Explore More
              </span>
            </button>
            <button className="border-white bg-[#141416]  btnsBannerNft">
              <span className="text-white font-outfit font-semibold mobile:text-[10.58px] mobile:leading-[13.76px] mobile:tracking-[1%] tablet:text-[15.2px] tablet:leading-[19.77px] tablet:tracking-[1%]  laptop:text-[15.2px] laptop:leading-[19.77px] laptop:tracking-[1%] desktop:text-[21.36px] desktop:leading-[27.76px] desktop:tracking-[1%]">
                Sell Artwork
              </span>
            </button>
          </div>
        </section>
        <figure className="w-[45%] mobile:w-full mobile:h-[20%] relative  flex mobile:flex-col justify-end mobile:justify-center items-center ">
          <img
            src={stoneTestOpacity}
            alt="stones of banner opacity"
            className="absolute top-[0.1%] left-[20%] mobile:h-[170px] mobile:w-full mobile:top-[0%] mobile:left-[0%] tablet:w-[90%] tablet:left-[20%] tablet:top-[0%]  desktop:left-[20%] desktop:top-[0%] desktop:w-[90%] "
          />
          <img
            src={bannerStones}
            alt="stones of banner"
            className="absolute w-[80%] mobile:w-full mobile:h-[137px] h-[80%] left-[25%] mobile:left-[0%] mobile:top-[-50%]"
          />
        </figure>
      </div>
    </div>
  );
};

export default BannerNft;
