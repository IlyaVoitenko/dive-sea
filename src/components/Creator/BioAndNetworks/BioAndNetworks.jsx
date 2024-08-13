import instaBlack from "../../../assets/instaBlack.svg";
import twitterBlack from "../../../assets/twitterBlack.svg";
import LinkedInBlack from "../../../assets/LinkedInBlack.svg";
import facebookBlack from "../../../assets/facebookBlack.svg";

const BioAndNetworks = () => {
  return (
    <div className="flex flex-col justify-between h-[35%]">
      <div>
        <span className="text-[#C5C5C5] font-public font-[700] desktop:text-[25px] desktop:leading-[40.19px] laptop:text-[17.78px] laptop:leading-[28.58px] tablet:text-[17.78px] tablet:leading-[28.58px] mobile:text-[18.97px] mobile:leading-[30.5px]">
          Bio
        </span>
        <p className="text-[#949494] font-poppins font-[400] desktop:text-[14px] desktop:leading-[24.78px] laptop:text-[9.96px] laptop:leading-[17.62px]  tablet:text-[9.96px] tablet:leading-[17.62px]  mobile:text-[10.62px] mobile:leading-[18.8px]">
          the artist who transforms the intangible into priceless assets with
          their incredible NFT creations. From stunning visuals to mind-bending
          concepts,
        </p>
      </div>
      <div className="flex flex-col justify-between  h-[50px]">
        <hr className="text-[#D0D0D0] desktop:w-[363px]  rounded:1.06px border-[#D0D0D0]" />
        <nav className="flex justify-between items-center w-[70%] mobile:w-[215.21px]">
          <a href="https://www.instagram.com/">
            <img
              src={instaBlack}
              alt="instagram icon"
              className="desktop:w-[21.34px] desktop:h-[21.42px] laptop:w-[15.17px] laptop:h-[15.23px] tablet:w-[15.17px] tablet:h-[15.23px]  mobile:w-[15.94px] mobile:h-[16px]"
            />
          </a>
          <a href="https://www.linkedin.com/">
            <img
              src={LinkedInBlack}
              alt="linkedIn icon"
              className="desktop:w-[21.34px] desktop:h-[20.36px] laptop:w-[15.17px] laptop:h-[14.48px] tablet:w-[15.17px] tablet:h-[14.48px]  mobile:w-[15.94px] mobile:h-[15.21px]"
            />
          </a>
          <a href="https://m.facebook.com/">
            <img
              src={facebookBlack}
              alt="facebook icon"
              className="desktop:w-[9.88px] desktop:h-[21.34px] laptop:w-[7.03px] laptop:h-[15.17px] tablet:w-[7.03px] tablet:h-[15.17px] mobile:w-[7.38px] mobile:h-[15.94px]"
            />
          </a>
          <a href="https://twitter.com/?lang=en">
            <img
              src={twitterBlack}
              alt="twitter icon"
              className="desktop:w-[21.34px] desktop:h-[17.37px] laptop:w-[15.17px] laptop:h-[12.35px] tablet:w-[15.17px] tablet:h-[12.35px] mobile:w-[15.94px] mobile:h-[12.98px]"
            />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default BioAndNetworks;
