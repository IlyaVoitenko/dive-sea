import { CardNftTrendProps } from "../../../props";
import { checkStyleForCardItem } from "../../../helper";
import { bool, shape, number } from "prop-types";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import InfoCard from "./InfoCard";
import ImageCard from "./ImageCard";

const CardItem = ({
  card,
  isCreatorCard = false,
  isCreatorPage = false,
  index,
}) => {
  const widthScreen = useWindowDimensions();
  const styleCard = checkStyleForCardItem(isCreatorCard, isCreatorPage);
  if (widthScreen < 430) isCreatorCard = false;
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
        isCreatorCard={isCreatorCard}
        isCreatorPage={isCreatorPage}
      />
      <InfoCard
        card={card}
        isCreatorCard={isCreatorCard}
        isCreatorPage={isCreatorPage}
      />
    </section>
  );
};
CardItem.propTypes = {
  card: shape(CardNftTrendProps),
  isCreatorCard: bool,
  isCreatorPage: bool,
  index: number,
};
export default CardItem;
