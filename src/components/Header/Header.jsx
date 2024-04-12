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
  const searchRef = useRef("");
  return (
    <header className="flex flex-row max-md:flex-col items-center justify-between  mt-[45px] w-[90.86%] h-[58px] ">
      <div className="flex flex-row max-md:flex-col items-center justify-between w-[40%] max-md:w-full ">
        <img
          src={logo}
          className={`${sizeDesktopImgLogo} ${sizeTabletImgLogo} ${sizeMobileImgLogo}`}
          alt="logo"
        />
        {windowWidth < 768 && (
          <img
            onClick={() => setIsOpenMenu(!isShowMenu)}
            src={menuMobileOpen}
            className="relative left-[40%] bottom-[1.75rem] w-[31.5px] h-[22.33px] "
            alt="img for open menu at mobile responsive"
          />
        )}
        <nav
          className={`flex justify-between max-md:flex-col  max-md:items-center w-[80%] ${
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
        className={`flex flex-row max-md:flex-col items-center justify-between  w-[58%] ${
          windowWidth < 768 && isShowMenu === false ? "hidden" : "block"
        } `}
      >
        <div className="flex">
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
            className={`${sizeDesktopBtnSpanWallet} ${sizeTabletBtnSpanWallet}`}
          >
            {btnText.toUpperCase()}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
