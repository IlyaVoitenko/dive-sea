import logoWhite from "../../../assets/logoWhite.svg";

const LogoAndTitle = () => {
  return (
    <figure className="flex items-center justify-between desktop:w-[15%] laptop:w-[140px] tablet:w-[110px] mobile:w-[133px]">
      <img
        src={logoWhite}
        alt="logo white"
        className="desktop:h-[65px] desktop:w-[65px] laptop:w-[46.23px] laptop:h-[46.23px] tablet:w-[35px] tablet:h-[37px] mobile:w-[43.47px] mobile:h-[43.47px]"
      />
      <span className="text-white font-[600] font-poppins desktop:text-[29.92px] desktop:leading-[38.9px] laptop:text-[21.28px] laptop:leading-[27.66px] tablet:text-[17px] tablet:leading-[23px] mobile:text-[20.01px] mobile:leading-[26.02px]">
        DiveSea
      </span>
    </figure>
  );
};

export default LogoAndTitle;
