import { number, bool, string, oneOfType, oneOf, func } from "prop-types";

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

export const topCollectionUsersProps = {
  id: string.isRequired,
  name: string.isRequired,
  userName: string.isRequired,
  avatarImg: string.isRequired,
  volume: string.isRequired,
  percentagePerDay: string.isRequired,
  floorPrice: string,
  owners: string,
  items: number,
};
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
