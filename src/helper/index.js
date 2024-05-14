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
