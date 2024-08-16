import { useRef, useState } from "react";
import CardItem from "../../../Common/CardItem";
import { bool } from "prop-types";
import { discoverList } from "../../../Discover/constants";
import BtnsArrows from "../../NftTitleAndImages/NftImages/BtnsArrows";

const TrendiesList = ({ isWeekly = false }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerTrendiesListRef = useRef();
  return (
    <>
      <div className="flex w-full justify-center items-center containerDesktopTrendiesList containerLaptopTrendiesList containerTabletTrendiesList containerMobileTrendiesList">
        <div
          ref={containerTrendiesListRef}
          className="w-full scroll-smooth overflow-style "
        >
          <div className="flex w-full items-center h-[600px] mobile:h-[350px]  gap-[40px] ">
            {discoverList &&
              discoverList.map((card) => (
                <CardItem key={card.id} card={card} isWeekly={isWeekly} />
              ))}
          </div>
        </div>
      </div>
      <div className="mt-[4rem] ">
        <BtnsArrows
          isWeekly={true}
          scrollPosition={scrollPosition}
          setScrollPosition={setScrollPosition}
          containerTrendiesListRef={containerTrendiesListRef}
        />
      </div>
    </>
  );
};
TrendiesList.propTypes = {
  isWeekly: bool,
};
export default TrendiesList;
