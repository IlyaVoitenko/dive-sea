import { useRef } from "react";
import { widthAndIsShowMenuProps } from "../../../../props";
import loupe from "../../../../assets/loupe.svg";
import { handleSearchInput } from "../../../../helper";
const SearchInputAndBtn = ({ isShowMenu, windowWidth }) => {
  const searchRef = useRef(null);
  return (
    <div
      className={`flex  flex-row mobile:flex-col desktop:w-[44%] laptop:w-[55%] laptop:justify-end desktop:justify-between tablet:justify-end items-center  mobile:justify-center xl:w-[46%] max-[1197px]:w-[53%] max-[1024px]:w-[58%] mobile:bg-white mobile:z-40 mobile:w-full ${
        windowWidth < 768 && isShowMenu === false ? "hidden" : "block"
      } `}
    >
      <div className="flex relative  mobile:w-[80%] tablet:w-[50%] laptop:w-[55%]  tablet:mr-4 laptop:mr-4 ">
        <img
          src={loupe}
          className={` z-20 absolute first-letter:absolute  sizeTabletLoupeImg sizeDesktopLoupeImg sizeMobileLoupeImg`}
          alt="loupe"
        />
        <input
          type="text"
          ref={searchRef}
          onChange={() => handleSearchInput(searchRef)}
          placeholder="Search Art Work / Creator"
          className={` z-10  top-[1%]   text-black border-none font-poppins sizeDesktopSearchInput sizeTabletSearchInput sizeMobileSearchInput`}
        />
      </div>
      <button
        className={`sizeDesktopBtnWallet sizeTabletBtnWallet sizeMobileBtnWallet`}
      >
        <span
          className={`uppercase sizeDesktopBtnSpanWallet sizeTabletBtnSpanWallet sizeMobileBtnSpanWallet`}
        >
          Connect Wallet
        </span>
      </button>
    </div>
  );
};
SearchInputAndBtn.propTypes = widthAndIsShowMenuProps;
export default SearchInputAndBtn;
