import stones from "../../assets/stonesShadows.svg";
import stonesBlurImg from "../../assets/StonesBlurImg.svg";
import arrowRight from "../../assets/arrowRight.svg";
import arrowLeft from "../../assets/arrowLeft.svg";
import iconRight from "../../assets/iconRight.svg";
import fox from "../../assets/fox.svg";
import shield from "../../assets/Shield.svg";
import clip from "../../assets/clip.svg";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import Headers from "../Common/Header";
import logo from "../../assets/logo.svg";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Auth = () => {
  const windowWidth = useWindowDimensions();
  useEffect(() => {}, [windowWidth]);
  return (
    <main className="flex w-full h-full mobile:flex-col desktop:w-[1496px] laptop:w-[1024px] tablet:w-[768px] macbook16:w-[1496px]  mobile:w-screen ">
      <section className="flex flex-col justify-between items-center w-[60%] mobile:w-full desktop:h-[850px] mobile:h-[1200px] macbook16:w-[62%] macbook16:h-[677px]  bg-[#F9F9F9]">
        {windowWidth <= 426 ? (
          <Headers isAuthPage={true} />
        ) : (
          <div className=" h-[10%] w-full flex justify-start items-start">
            <Link
              to={"/home"}
              className="flex justify-center items-end h-full w-[20%]"
            >
              <figure>
                <img
                  src={logo}
                  className="desktop:w-[53px] desktop:h-[53px] laptop:h-[37.69px] laptop:w-[37.69px] tablet:h-[37.69px] tablet:w-[37.69px]"
                  alt="logo"
                />
              </figure>
            </Link>
          </div>
        )}
        <section className="flex flex-col justify-between items-center desktop:w-[385.76px] desktop:h-[632.45px] laptop:w-[274.32px] laptop:h-[449.79px] tablet:w-[274.32px] tablet:h-[449.79px] mobile:w-[316.02px] mobile:h-[506px]">
          <span className="titleAuthPage">Choose Wallet</span>
          <div className="flex flex-col justify-between h-[50%]">
            <button className="btnsWallets">
              <img src={fox} className="btnsWalletsImg" alt="icon wallet" />
              <span className="btnsWalletsText">Metamask</span>{" "}
              <img
                src={iconRight}
                className="btnsWalletsArrow"
                alt="icon right arrow"
              />
            </button>
            <button className="btnsWallets">
              <img src={shield} className="btnsWalletsImg" alt="icon wallet" />
              <span className="btnsWalletsText">Trust Wallet</span>{" "}
              <img
                src={iconRight}
                className="btnsWalletsArrow"
                alt="icon right arrow"
              />
            </button>
            <button className="btnsWallets">
              <img src={clip} className="btnsWalletsImg" alt="icon wallet" />
              <span className="btnsWalletsText">
                Enter ethereum address
              </span>{" "}
              <img
                src={iconRight}
                className="btnsWalletsArrow"
                alt="icon right arrow"
              />
            </button>
          </div>
          <Link to={"/home"}>
            <button className="btnsWalletsNextBtn btnsWalletsNextBtnText">
              NEXT
            </button>
          </Link>
        </section>

        {windowWidth <= 426 ? (
          <Footer />
        ) : (
          <div className="flex justify-between items-center mobile:hidden w-full mb-5 pl-[9%] pr-[9%]">
            <span className="textPrivacyAndCopyright">Privacy Policy</span>
            <span className="textPrivacyAndCopyright">Copyright 2022</span>
          </div>
        )}
      </section>
      <section className="flex flex-col justify-center items-center desktop:w-[663px] desktop:h-[850px] macbook16:h-[677px] laptop:w-[471.51px] laptop:h-[710px] tablet:w-[450.51px] tablet:h-[710px] mobile:hidden bg-[#141416] ">
        <div className="relative w-full h-[60%] flex justify-center items-center">
          <img src={stones} alt="stones" className={`imgStonesWithShadows`} />
          <img
            src={stonesBlurImg}
            alt="stones blur img"
            className={`imgStonesBlur`}
          />
        </div>
        <div className="flex flex-col items-center justify-between desktop:w-[381.08px] desktop:h-[300px] laptop:w-[271.02px] laptop:h-[249.63px] tablet:w-[271.02px] tablet:h-[249.63px] macbook16:h-[200px]">
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
