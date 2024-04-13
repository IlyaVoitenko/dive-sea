import logo from "../../assets/logo.svg";
import loupe from "../../assets/loupe.svg";
import menuMobileOpen from "../../assets/menuMobileOpen.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions.js";
import { Link } from "react-router-dom";
import {
  btnText,
  linkNav,
  sizeDesktopImgLogo,
  sizeTabletImgLogo,
  sizeMobileImgLogo,
  sizeDesktopBtnWallet,
  sizeTabletBtnWallet,
  sizeMobileBtnWallet,
  sizeDesktopBtnSpanWallet,
  sizeTabletBtnSpanWallet,
  sizeMobileBtnSpanWallet,
  sizeDesktopSearchInput,
  sizeTabletSearchInput,
  sizeMobileSearchInput,
  sizeDesktopLoupeImg,
  sizeTabletLoupeImg,
  sizeMobileLoupeImg,
  sizeDesktopNavItem,
  sizeTabletNavItem,
  sizeMobileNavItem,
} from "./constants.js";
import { useRef, useState } from "react";
const handleSearchInput = (ref) => ref.current.value;
const Header = () => {
  const windowWidth = useWindowDimensions();
  const [isShowMenu, setIsOpenMenu] = useState(false);
  const searchRef = useRef(null);
  return (
    <header className="flex flex-row mobile:flex-col items-center justify-between  mt-[45px] w-[90.86%] h-[58px]  mobile:bg-white mobile:z-40">
      <div className="flex flex-row mobile:flex-col items-center justify-between w-[45%]  mobile:w-full  mobile:bg-white mobile:z-40">
        <img
          src={logo}
          className={`${sizeDesktopImgLogo} ${sizeTabletImgLogo} ${sizeMobileImgLogo}`}
          alt="logo"
        />
        {/* max-[320px]:right-[15%] */}
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
        <nav
          className={`flex  justify-between mobile:flex-col  mobile:items-center w-[80%] ${
            windowWidth < 768 && isShowMenu === false ? "hidden" : "block"
          }`}
        >
          {linkNav.map((item) => (
            <Link
              key={item.id}
              to={item.src}
              className={`font-inter text-[#606060] hover:text-black ${sizeDesktopNavItem} ${sizeTabletNavItem} ${sizeMobileNavItem}`}
            >
              {item.text.toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>
      <div
        className={`flex flex-row mobile:flex-col tablet:justify-end items-center  mobile:justify-center xl:w-[46%] max-[1197px]:w-[53%] max-[1024px]:w-[58%] mobile:bg-white mobile:z-40 mobile:w-full  ${
          windowWidth < 768 && isShowMenu === false ? "hidden" : "block"
        } `}
      >
        <div className="flex  mobile:w-[80%] tablet:w-[50%] laptop:w-[60%]">
          <img
            src={loupe}
            className={`relative z-20  ${sizeTabletLoupeImg} ${sizeDesktopLoupeImg} ${sizeMobileLoupeImg}`}
            alt="loupe"
          />
          <input
            type="text"
            ref={searchRef}
            onChange={() => handleSearchInput(searchRef)}
            placeholder="Search Art Work / Creator"
            className={`relative z-10 left-[-1rem] text-black border-none font-poppins ${sizeDesktopSearchInput} ${sizeTabletSearchInput} ${sizeMobileSearchInput}`}
          />
        </div>
        <button
          className={`${sizeDesktopBtnWallet} ${sizeTabletBtnWallet} ${sizeMobileBtnWallet}`}
        >
          <span
            className={`${sizeDesktopBtnSpanWallet} ${sizeTabletBtnSpanWallet} ${sizeMobileBtnSpanWallet}`}
          >
            {btnText.toUpperCase()}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
