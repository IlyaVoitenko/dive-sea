import LogoAndTitle from "./LogoAndTitle";
import NavBar from "./NavBar";
import Networks from "./Networks";
import RightsReserved from "./RightsReserved";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full desktop:h-[345px] laptop:h-[245.36px] tablet:h-[245px] mobile:h-[426px] bg-[rgb(20,20,22)]">
      <div className="flex justify-between items-center w-[90%] tablet:hidden laptop:hidden desktop:hidden">
        <LogoAndTitle />
        <Networks />
      </div>
      <section className="flex justify-between items-center  w-[90%] mobile:hidden">
        <LogoAndTitle />
        <NavBar />
      </section>
      <section className="flex w-[90%] h-[50%]  tablet:hidden laptop:hidden desktop:hidden">
        <NavBar />
      </section>
      <hr className="w-[90%] bg-[#818181] border-[1px] laptop:border-[0.71px] opacity-[25%] desktop:mt-[2rem] laptop:mt-[1rem] tablet:mt-[1rem]" />
      <div className="w-[90%] flex justify-center items-center mobile:mt-[2rem] tablet:hidden laptop:hidden desktop:hidden">
        <RightsReserved />
      </div>
      <section className="flex justify-between items-center  w-[90%] desktop:mt-[4rem] laptop:mt-[2rem] tablet:mt-[2rem] mobile:hidden">
        <RightsReserved />
        <Networks />
      </section>
    </footer>
  );
};

export default Footer;
