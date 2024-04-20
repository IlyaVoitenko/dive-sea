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
    <div className=" flex w-full justify-center items-center containerDesktopTrendiesList containerLaptopTrendiesList">
      <div
        ref={containerTrendiesListRef}
        style={{
          overflowX: "auto",
          scrollBehavior: "smooth",
          width: "100%",
        }}
      >
        <div className="flex w-full items-center  h-[500px] gap-[40px] ">
          {TrendList.map((card) => (
            <TrendiesCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendiesList;
