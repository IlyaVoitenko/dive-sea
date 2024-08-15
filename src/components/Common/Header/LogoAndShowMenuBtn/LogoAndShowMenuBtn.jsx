import { headerWithShowMenuFuncProps } from "../../../../props";
import menuMobileOpen from "../../../../assets/menuMobileOpen.svg";
import logo from "../../../../assets/logo.svg";
import { Link } from "react-router-dom";

const LogoAndShowMenuBtn = ({ setIsOpenMenu, windowWidth, isShowMenu }) => {
  return (
    <>
      <Link to={"/home"} className="mobile:hidden">
        <img
          src={logo}
          className={`sizeDesktopImgLogo sizeTabletImgLogo sizeMobileImgLogo`}
          alt="logo"
        />
      </Link>

      {windowWidth < 768 && (
        <div className="flex justify-between items-center w-[95%] ">
          <figure className="flex justify-between items-center w-[141.46px] ">
            <Link to={"/home"}>
              <img
                src={logo}
                className={`sizeDesktopImgLogo sizeTabletImgLogo sizeMobileImgLogo`}
                alt="logo"
              />
            </Link>
            <span className="mobile:static mobile:right-[3rem] mobile:bottom-[2.5rem] mobile:text-black mobile:text-[21.36px] mobile:leading-[27.77px] mobile:font-poppins mobile:font-semibold">
              DiveSea
            </span>
          </figure>
          <img
            onClick={() => setIsOpenMenu(!isShowMenu)}
            src={menuMobileOpen}
            className="static left-[40%] bottom-[4rem] w-[31.5px] h-[22.33px] "
            alt="img for open menu at mobile responsive"
          />
        </div>
      )}
    </>
  );
};
LogoAndShowMenuBtn.propTypes = headerWithShowMenuFuncProps;
export default LogoAndShowMenuBtn;
