import { widthAndIsShowMenuProps } from "../../../../props";
import { NavLink } from "react-router-dom";
import { linkNav } from "../constants";
const NavBar = ({ windowWidth, isShowMenu }) => {
  return (
    <nav
      className={`flex  justify-between mobile:flex-col  mobile:items-center w-[80%] ${
        windowWidth < 768 && isShowMenu === false ? "hidden" : "block"
      }`}
    >
      {linkNav.map((item) => (
        <NavLink
          key={item.id}
          to={item.src}
          className={({ isActive }) =>
            isActive
              ? "text-[#141416] font-inter  hover:text-black sizeDesktopNavItem sizeTabletNavItem sizeMobileNavItem"
              : "text-[#606060] font-inter  hover:text-black sizeDesktopNavItem sizeTabletNavItem sizeMobileNavItem"
          }
        >
          {item.text.toUpperCase()}
        </NavLink>
      ))}
    </nav>
  );
};

NavBar.propTypes = widthAndIsShowMenuProps;

export default NavBar;
