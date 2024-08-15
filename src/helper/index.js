export const handleSearchInput = (ref) => ref.current.value;

export const handleScroll = (
  scrollAmount,
  scrollPosition,
  setScrollPosition,
  containerTrendiesListRef
) => {
  if (scrollPosition === undefined) return;

  const newScrollPosition = scrollPosition + scrollAmount;

  setScrollPosition(newScrollPosition);

  containerTrendiesListRef.current.scrollLeft = newScrollPosition;
};

export const sortString = (a, b) => {
  const titleA = a.toUpperCase();
  const titleB = b.toUpperCase();

  if (titleA < titleB) return -1;

  if (titleA > titleB) return 1;

  return 0;
};
// export const LIMIT_ITEMS = 12;

export const fetchLoadingItems = (
  arr,
  postData,
  setHasMore,
  setVisible,
  visible,
  setPostData,
  limit
) => {
  const newLimit = visible + limit;
  const dataToAdd = arr.slice(visible, newLimit);
  if (arr.length > postData.length) {
    setTimeout(() => {
      setPostData([...postData].concat(dataToAdd));
    }, 2000);
    setVisible(newLimit);
  } else setHasMore(false);
};

export const checkStyleForCardItem = (
  isCreatorCardProductDetail,
  isCreatorPage
) => {
  if (isCreatorCardProductDetail === true)
    return "containerTrendiesCardForCreatorList";

  if (isCreatorPage === true) return "cardForCreatorPage";
  else return "containerDefaultTrendiesCard";
};
export const checkStyleForCardItemForImage = (
  isCreatorCardProductDetail,
  isCreatorPage
) => {
  if (isCreatorCardProductDetail === true) return "imgCardSizeForCreatorList";

  if (isCreatorPage === true) return "imgCardForCreatorPage";
  else return "imgCardSizeByDefault";
};
export const checkStyleForCardItemForTitle = (
  isCreatorCardProductDetail,
  isCreatorPage
) => {
  if (isCreatorCardProductDetail === true) return "titleForCreatorList";

  if (isCreatorPage === true) return "titleCardForCreatorPage";
  else return "titleDefault";
};
export const checkStyleForCardItemForMarkImg = (
  isCreatorCardProductDetail,
  isCreatorPage
) => {
  if (isCreatorCardProductDetail === true) return "markImgForCreatorList";

  if (isCreatorPage === true) return "markImgCardForCreatorPage";
  else return "markImgDefault";
};
export const checkStyleForCardItemForPrice = (
  isCreatorCardProductDetail,
  isCreatorPage
) => {
  if (isCreatorCardProductDetail === true) return "markForCreatorList";

  if (isCreatorPage === true)
    return "laptop:text-[8.51px] laptop:leading-[12.77px] tablet:text-[8.51px] tablet:leading-[12.77px] mobile:text-[8.59px] mobile:leading-[12.88px]";
  else return "markDefault";
};
export const checkStyleForInfoCardItem = (
  isCreatorCardProductDetail,
  isCreatorPage
) => {
  if (isCreatorCardProductDetail === true)
    return "containerInfoCardForCreatorList";

  if (isCreatorPage === true) return "containerInfoCardForCreatorPage";
  else
    return "containerDefaultInfoCard pl-[5%] pr-[5%] tablet:pl-[8%] tablet:pr-[8%] mobile:pl-[0%] mobile:pr-[0%]";
};
export const renderOneToHundredRange = (typeRender) => {
  switch (typeRender) {
    case "percentage": {
      const list = [];
      for (let i = 1; i <= 100; i++) {
        list.push(i);
      }
      return list;
    }
    case "amounts": {
      const list = [];
      for (let i = 1; i <= 100; i++) {
        if (i < 10) list.push("00" + i);
        else if (i < 100) list.push("0" + i);
        else list.push("" + i);
      }
      return list;
    }

    default:
      break;
  }
};
export const checkBgHeader = (isChangeBgColor, isAuthPage) => {
  if (isAuthPage) return "bg-[#F9F9F9]";

  return isChangeBgColor ? "bg-[#FAFAFA]" : "bg-white";
};
