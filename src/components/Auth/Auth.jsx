import stones from "../../assets/stonesShadows.svg";
import stonesBlurImg from "../../assets/StonesBlurImg.svg";
import arrowRight from "../../assets/arrowRight.svg";
import arrowLeft from "../../assets/arrowLeft.svg";

const Auth = () => {
  return (
    <main className="flex w-full h-full">
      <section></section>
      <section className="flex flex-col justify-center items-center desktop:w-[663px] desktop:h-[1024px] laptop:w-[471.51px] laptop:h-[728.25px] tablet:w-[471.51px] tablet:h-[728.25px] mobile:hidden bg-[#141416] ">
        <div className="relative w-full h-[60%] flex justify-center items-center">
          <img src={stones} alt="stones" className={`imgStonesWithShadows`} />
          <img
            src={stonesBlurImg}
            alt="stones blur img"
            className={`imgStonesBlur`}
          />
        </div>
        <div className="flex flex-col items-center justify-between desktop:w-[381.08px] desktop:h-[323.92px] laptop:w-[271.02px] laptop:h-[249.63px] tablet:w-[271.02px] tablet:h-[249.63px]">
          <span className="titleNFTGalleryTitle">
            Start Your Own NFT Gallery
          </span>
          <span className="subtitleNFTGalleryTitle">
            CloseSea Is A Great Platform For Discover Largest NFTs And Other
            Stuff !!
          </span>
          <div className="shadow-boxBtnModelNav flex justify-center items-center desktop:rounded-[18.94px] desktop:h-[75.74px] desktop:w-[182.26px] laptop:rounded-[13.48px]  laptop:h-[53.92px]  laptop:w-[129.74px] tablet:rounded-[13.48px]   tablet:h-[53.92px]  tablet:w-[129.74px] bg-[#FCFCFD]">
            <section className="flex justify-evenly w-full">
              <button className="btnModelNav">
                <img
                  alt="arrow left"
                  src={arrowLeft}
                  className="mobile:w-[15.9px] mobile:h-[15.9px]"
                />
              </button>
              <span className="text-[#E6E8EC] bg-[#FCFCFD]">|</span>
              <button className="btnModelNav">
                <img
                  alt="arrow right"
                  src={arrowRight}
                  className="mobile:w-[15.9px] mobile:h-[15.9px]"
                />
              </button>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Auth;
