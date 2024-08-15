import { useState } from "react";
import { bool } from "prop-types";
import SearchInputAndBtn from "./SearchInputAndBtn";
import LogoAndShowMenuBtn from "./LogoAndShowMenuBtn";
import NavBar from "./NavBar";
import { checkBgHeader } from "../../../helper";
import useWindowDimensions from "../../../hooks/useWindowDimensions.js";
const Header = ({ isChangeBgColor = false, isAuthPage = false }) => {
  const windowWidth = useWindowDimensions();
  const [isShowMenu, setIsOpenMenu] = useState(false);
  return (
    <header
      className={`flex flex-row mobile:flex-col items-center mobile:items-start justify-between  mt-[45px] w-[90.86%] h-[58px] mobile:border-b-[0.5px] mobile:h-[76px]  mobile:border-[#CBCBCB]   mobile:z-40 ${checkBgHeader(
        isChangeBgColor,
        isAuthPage
      )} `}
    >
      <div
        className={`flex flex-row mobile:flex-col items-center justify-between w-[45%]  mobile:w-full bg-[#FAFAFA]  mobile:z-40 
          ${checkBgHeader(isChangeBgColor, isAuthPage)}`}
      >
        <LogoAndShowMenuBtn
          setIsOpenMenu={setIsOpenMenu}
          isShowMenu={isShowMenu}
          windowWidth={windowWidth}
          isAuthPage={isAuthPage}
        />
        <NavBar windowWidth={windowWidth} isShowMenu={isShowMenu} />
      </div>
      <SearchInputAndBtn
        windowWidth={windowWidth}
        isShowMenu={isShowMenu}
        isAuthPage={isAuthPage}
      />
    </header>
  );
};
Header.propTypes = { isChangeBgColor: bool, isAuthPage: bool };

export default Header;
