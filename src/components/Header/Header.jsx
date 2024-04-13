import { useState } from "react";
import SearchInputAndBtn from "./SearchInputAndBtn";
import LogoAndShowMenuBtn from "./LogoAndShowMenuBtn";
import NavBar from "./NavBar";
import useWindowDimensions from "../../hooks/useWindowDimensions.js";
const Header = () => {
  const windowWidth = useWindowDimensions();
  const [isShowMenu, setIsOpenMenu] = useState(false);
  return (
    <header className="flex flex-row mobile:flex-col items-center justify-between  mt-[45px] w-[90.86%] h-[58px]  mobile:bg-white mobile:z-40">
      <div className="flex flex-row mobile:flex-col items-center justify-between w-[45%]  mobile:w-full  mobile:bg-white mobile:z-40">
        <LogoAndShowMenuBtn
          setIsOpenMenu={setIsOpenMenu}
          isShowMenu={isShowMenu}
          windowWidth={windowWidth}
        />
        <NavBar windowWidth={windowWidth} isShowMenu={isShowMenu} />
      </div>
      <SearchInputAndBtn windowWidth={windowWidth} isShowMenu={isShowMenu} />
    </header>
  );
};

export default Header;
