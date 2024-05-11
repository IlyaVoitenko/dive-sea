import facebookIcon from "../../../../assets/facebookIcon.svg";
import instagramIcon from "../../../../assets/instagramIcon.svg";
import linkedInIcon from "../../../../assets/linkedInIcon.svg";
import twitterIcon from "../../../../assets/twitterIcon.svg";
const Networks = () => {
  return (
    <nav className="flex justify-between items-center w-[20%] mobile:w-[115.21px]">
      <a href="https://www.instagram.com/">
        <img
          src={instagramIcon}
          alt="instagram icon"
          className="desktop:w-[21.34px] desktop:h-[21.42px] laptop:w-[15.17px] laptop:h-[15.23px] tablet:w-[15.17px] tablet:h-[15.23px]  mobile:w-[15.94px] mobile:h-[16px]"
        />
      </a>
      <a href="https://www.linkedin.com/">
        <img
          src={linkedInIcon}
          alt="linkedIn icon"
          className="desktop:w-[21.34px] desktop:h-[20.36px] laptop:w-[15.17px] laptop:h-[14.48px] tablet:w-[15.17px] tablet:h-[14.48px]  mobile:w-[15.94px] mobile:h-[15.21px]"
        />
      </a>
      <a href="https://m.facebook.com/">
        <img
          src={facebookIcon}
          alt="facebook icon"
          className="desktop:w-[9.88px] desktop:h-[21.34px] laptop:w-[7.03px] laptop:h-[15.17px] tablet:w-[7.03px] tablet:h-[15.17px] mobile:w-[7.38px] mobile:h-[15.94px]"
        />
      </a>
      <a href="https://twitter.com/?lang=en">
        <img
          src={twitterIcon}
          alt="twitter icon"
          className="desktop:w-[21.34px] desktop:h-[17.37px] laptop:w-[15.17px] laptop:h-[12.35px] tablet:w-[15.17px] tablet:h-[12.35px] mobile:w-[15.94px] mobile:h-[12.98px]"
        />
      </a>
    </nav>
  );
};

export default Networks;
