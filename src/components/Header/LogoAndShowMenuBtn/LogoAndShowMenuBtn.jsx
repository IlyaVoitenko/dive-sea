import { headerWithShowMenuFuncProps } from "../../../props";
import menuMobileOpen from "../../../assets/menuMobileOpen.svg";
import logo from "../../../assets/logo.svg";

import {
  sizeDesktopImgLogo,
  sizeTabletImgLogo,
  sizeMobileImgLogo,
} from "../constants.js";
const LogoAndShowMenuBtn = ({ setIsOpenMenu, windowWidth, isShowMenu }) => {
  return (
    <>
      <img
        src={logo}
        className={`${sizeDesktopImgLogo} ${sizeTabletImgLogo} ${sizeMobileImgLogo}`}
        alt="logo"
      />
      {windowWidth < 768 && (
        <span className="mobile:relative mobile:right-[3rem] mobile:bottom-[2.5rem] mobile:text-black mobile:text-[21.36px] mobile:leading-[27.77px] mobile:font-poppins mobile:font-semibold">
          DiveSea
        </span>
      )}
      {windowWidth < 768 && (
        <img
          onClick={() => setIsOpenMenu(!isShowMenu)}
          src={menuMobileOpen}
          className="relative left-[40%] bottom-[4rem] w-[31.5px] h-[22.33px] "
          alt="img for open menu at mobile responsive"
        />
      )}
    </>
  );
};
LogoAndShowMenuBtn.propTypes = headerWithShowMenuFuncProps;
export default LogoAndShowMenuBtn;
