import { CardNftTrendProps } from "../../../props";
import { checkStyleForCardItem } from "../../../helper";
import { bool, shape, number } from "prop-types";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import InfoCard from "./InfoCard";
import ImageCard from "./ImageCard";

const CardItem = ({
  card,
  isCreatorCardProductDetail = false,
  isCreatorPage = false,
  isWeekly = false,
  index,
}) => {
  const widthScreen = useWindowDimensions();
  const styleCard = checkStyleForCardItem(
    isCreatorCardProductDetail,
    isCreatorPage,
    isWeekly
  );
  if (widthScreen < 430) isCreatorCardProductDetail = false;
  if (widthScreen < 430 && index > 2) return;
  const { img, time } = card;
  return (
    <section
      className={`flex justify-around items-center flex-col bg-white ${
        isCreatorPage ? "shadow-creatorCard mb-5" : "shadow-cardTrend"
      }   ${styleCard}`}
    >
      <ImageCard
        image={img}
        time={time}
        isCreatorCardProductDetail={isCreatorCardProductDetail}
        isCreatorPage={isCreatorPage}
        isWeekly={isWeekly}
      />
      <InfoCard
        card={card}
        isCreatorCardProductDetail={isCreatorCardProductDetail}
        isCreatorPage={isCreatorPage}
        isWeekly={isWeekly}
      />
    </section>
  );
};
CardItem.propTypes = {
  card: shape(CardNftTrendProps),
  isCreatorCardProductDetail: bool,
  isCreatorPage: bool,
  isWeekly: bool,
  index: number,
};
export default CardItem;
