import { widthAndIsShowMenuProps } from "../../../props";
import { Link } from "react-router-dom";
import {
  linkNav,
  sizeDesktopNavItem,
  sizeTabletNavItem,
  sizeMobileNavItem,
} from "../constants";
const NavBar = ({ windowWidth, isShowMenu }) => {
  return (
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
  );
};

NavBar.propTypes = widthAndIsShowMenuProps;

export default NavBar;
