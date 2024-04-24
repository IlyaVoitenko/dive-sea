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
