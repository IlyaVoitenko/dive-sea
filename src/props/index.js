import {
  number,
  bool,
  string,
  oneOfType,
  oneOf,
  func,
  shape,
} from "prop-types";

export const windowWidth = oneOfType([number, oneOf([""])]);
export const isShowMenu = bool.isRequired;
export const setIsOpenMenu = func.isRequired;
export const isAuthPage = bool;

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
  isAuthPage,
};

export const topCollectionUsersProps = shape({
  id: string,
  name: string,
  userName: string,
  avatarImg: string,
  volume: string,
  percentagePerDay: string,
  floorPrice: string,
  owners: string,
  items: number,
});
export const CardNftTrendProps = {
  amountLikes: number,
  id: oneOfType([string, number]),
  img: string,
  name: string,
  price: oneOfType([string, number]),
  subtitle: string,
  time: oneOfType([string, number]),
  title: string,
  userName: string,
};
