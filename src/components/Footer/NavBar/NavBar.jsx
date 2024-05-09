import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex mobile:flex-col mobile:items-start mobile:justify-around justify-between items-center  desktop:w-[50%] laptop:w-[50%] tablet:w-[60%] mobile:w-full  mobile:h-full">
      <Link className="text-[#B9B9B9] mobile:uppercase font-inter font-[500] desktop:text-[17.83px] desktop:leading-[26.74px] laptop:text-[12.68px] laptop:leading-[19.02px] tablet:text-[12.68px] tablet:leading-[19.02px] mobile:text-[14px] mobile:leading-[18.88px]">
        Privacy Policy
      </Link>
      <Link className="text-[#B9B9B9] mobile:uppercase font-inter font-[500] desktop:text-[17.83px] desktop:leading-[26.74px] laptop:text-[12.68px] laptop:leading-[19.02px]  tablet:text-[12.68px] tablet:leading-[19.02px] mobile:text-[14px] mobile:leading-[18.88px]">
        Term & Conditions
      </Link>
      <Link className="text-[#B9B9B9] mobile:uppercase font-inter font-[500] desktop:text-[17.83px] desktop:leading-[26.74px] laptop:text-[12.68px] laptop:leading-[19.02px]  tablet:text-[12.68px] tablet:leading-[19.02px] mobile:text-[14px] mobile:leading-[18.88px]">
        About Us
      </Link>
      <Link className="text-[#B9B9B9] mobile:uppercase font-inter font-[500] desktop:text-[17.83px] desktop:leading-[26.74px] laptop:text-[12.68px] laptop:leading-[19.02px]  tablet:text-[12.68px] tablet:leading-[19.02px] mobile:text-[14px] mobile:leading-[18.88px]">
        Contact
      </Link>
    </nav>
  );
};

export default NavBar;
