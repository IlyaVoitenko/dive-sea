import { useRef, useState } from "react";
import TrendiesCard from "./TrendiesCard";
import { TrendList } from "./constants";

const cardWidth = 281.13;
const handleScroll = (
  scrollAmount,
  scrollPosition,
  setScrollPosition,
  containerTrendiesListRef
) => {
  const newScrollPosition = scrollPosition + scrollAmount;

  setScrollPosition(newScrollPosition);

  containerTrendiesListRef.current.scrollLeft = newScrollPosition;
};
const TrendiesList = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerTrendiesListRef = useRef();
  return (
    <div className="flex w-full justify-center items-center containerDesktopTrendiesList containerLaptopTrendiesList containerTabletTrendiesList containerMobileTrendiesList">
      <div
        ref={containerTrendiesListRef}
        className="w-full scroll-smooth overflow-style "
      >
        <div className="flex w-full items-center  h-[600px] gap-[40px] ">
          {TrendList.map((card) => (
            <TrendiesCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendiesList;
