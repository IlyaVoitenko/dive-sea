import { useRef } from "react";
import { widthAndIsShowMenuProps } from "../../../props";
import loupe from "../../../assets/loupe.svg";
import { handleSearchInput } from "../../../helper";
import {
  btnText,
  sizeDesktopSearchInput,
  sizeTabletSearchInput,
  sizeMobileSearchInput,
  sizeDesktopLoupeImg,
  sizeTabletLoupeImg,
  sizeMobileLoupeImg,
  sizeDesktopBtnWallet,
  sizeDesktopBtnSpanWallet,
  sizeTabletBtnSpanWallet,
  sizeTabletBtnWallet,
  sizeMobileBtnWallet,
  sizeMobileBtnSpanWallet,
} from "../constants";
const SearchInputAndBtn = ({ isShowMenu, windowWidth }) => {
  const searchRef = useRef(null);
  return (
    <div
      className={`flex flex-row mobile:flex-col tablet:justify-end items-center  mobile:justify-center xl:w-[46%] max-[1197px]:w-[53%] max-[1024px]:w-[58%] mobile:bg-white mobile:z-40 mobile:w-full  ${
        windowWidth < 768 && isShowMenu === false ? "hidden" : "block"
      } `}
    >
      <div className="flex  mobile:w-[80%] tablet:w-[50%] laptop:w-[60%]">
        <img
          src={loupe}
          className={`relative z-20  sizeTabletLoupeImg sizeDesktopLoupeImg sizeMobileLoupeImg`}
          alt="loupe"
        />
        <input
          type="text"
          ref={searchRef}
          onChange={() => handleSearchInput(searchRef)}
          placeholder="Search Art Work / Creator"
          className={`relative z-10 left-[-1rem] text-black border-none font-poppins sizeDesktopSearchInput sizeTabletSearchInput sizeMobileSearchInput`}
        />
      </div>
      <button
        className={`sizeDesktopBtnWallet sizeTabletBtnWallet sizeMobileBtnWallet`}
      >
        <span
          className={`sizeDesktopBtnSpanWallet sizeTabletBtnSpanWallet sizeMobileBtnSpanWallet`}
        >
          {btnText.toUpperCase()}
        </span>
      </button>
    </div>
  );
};
SearchInputAndBtn.propTypes = widthAndIsShowMenuProps;
export default SearchInputAndBtn;
