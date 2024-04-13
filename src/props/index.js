import { number, bool, oneOfType, oneOf, func } from "prop-types";

export const windowWidth = oneOfType([number, oneOf([""])]);
export const isShowMenu = bool.isRequired;
export const setIsOpenMenu = func.isRequired;

export const widthAndIsShowMenuProps = {
  windowWidth,
  isShowMenu,
};

export const widthWindowProps = {
  windowWidth,
};

export const headerWithShowMenuFuncProps = {
  windowWidth,
  isShowMenu,
  setIsOpenMenu,
};
