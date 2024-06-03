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
export const LIMIT_ITEMS = 12;

export const fetchLoadingItems = (
  arr,
  postData,
  setHasMore,
  setVisible,
  visible,
  setPostData
) => {
  const newLimit = visible + LIMIT_ITEMS;
  const dataToAdd = arr.slice(visible, newLimit);
  if (arr.length > postData.length) {
    setTimeout(() => {
      setPostData([...postData].concat(dataToAdd));
    }, 2000);
    setVisible(newLimit);
  } else setHasMore(false);
};

export const checkStyleForCardItem = (isCreatorCard, isCreatorPage) => {
  if (isCreatorCard === true) return "containerTrendiesCardForCreatorList";

  if (isCreatorPage === true) return "cardForCreatorPage";
  else return "containerDefaultTrendiesCard";
};
export const checkStyleForCardItemForImage = (isCreatorCard, isCreatorPage) => {
  if (isCreatorCard === true) return "imgCardSizeForCreatorList";

  if (isCreatorPage === true) return "imgCardForCreatorPage";
  else return "imgCardSizeByDefault";
};
export const checkStyleForCardItemForTitle = (isCreatorCard, isCreatorPage) => {
  if (isCreatorCard === true) return "titleForCreatorList";

  if (isCreatorPage === true) return "titleCardForCreatorPage";
  else return "titleDefault";
};
export const checkStyleForCardItemForMarkImg = (
  isCreatorCard,
  isCreatorPage
) => {
  if (isCreatorCard === true) return "markImgForCreatorList";

  if (isCreatorPage === true) return "markImgCardForCreatorPage";
  else return "markImgDefault";
};
export const checkStyleForInfoCardItem = (isCreatorCard, isCreatorPage) => {
  if (isCreatorCard === true) return "containerInfoCardForCreatorList";

  if (isCreatorPage === true) return "containerInfoCardForCreatorPage";
  else
    return "containerDefaultInfoCard pl-[5%] pr-[5%] tablet:pl-[8%] tablet:pr-[8%] mobile:pl-[0%] mobile:pr-[0%]";
};
