import logo from "../../assets/logo.svg";
import loupe from "../../assets/loupe.svg";
import { Link } from "react-router-dom";
import {
  btnText,
  linkNav,
  sizeDesktopBtnWallet,
  sizeTabletBtnWallet,
  sizeDesktopBtnSpanWallet,
  sizeTabletBtnSpanWallet,
  sizeDesktopSearchInput,
  sizeTabletSearchInput,
  sizeDesktopLoupeImg,
  sizeTabletLoupeImg,
  sizeDesktopNavItem,
  sizeTabletNavItem,
} from "./constants.js";
const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between  mt-[45px] w-[90.86%] h-[58px] bg-red-400">
      <div className="flex flex-row items-center justify-between w-[40%]  ">
        <img
          src={logo}
          className="w-[53px] h-[53px] max-lg:w-[37.69px] max-lg:h-[37.69px]"
          alt="logo"
        />
        <nav className="flex justify-between  w-[80%]">
          {linkNav.map((item) => (
            <Link
              key={item.id}
              to={item.src}
              className={`font-inter text-[#606060] hover:text-black ${sizeDesktopNavItem} ${sizeTabletNavItem}`}
            >
              {item.text.toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-row items-center justify-between  w-[58%]">
        <div className="flex ">
          <img
            src={loupe}
            className={`relative z-20  ${sizeTabletLoupeImg} ${sizeDesktopLoupeImg}`}
            alt="loupe"
          />
          <input
            type="text"
            placeholder="Search Art Work / Creator"
            className={`relative z-10 left-[-1rem] text-black border-none font-poppins ${sizeDesktopSearchInput} ${sizeTabletSearchInput}`}
          />
        </div>
        <button className={` ${sizeDesktopBtnWallet} ${sizeTabletBtnWallet}`}>
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
