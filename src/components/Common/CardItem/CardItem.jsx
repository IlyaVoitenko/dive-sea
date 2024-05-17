import { CardNftTrendProps } from "../../../props";
import { bool, shape, number } from "prop-types";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import InfoCard from "./InfoCard";
import ImageCard from "./ImageCard";

const CardItem = ({ card, isCreatorCard = false, index }) => {
  const widthScreen = useWindowDimensions();
  if (widthScreen < 430) isCreatorCard = false;
  if (widthScreen < 430 && index > 2) return;
  const { img, time } = card;
  return (
    <section
      className={`flex justify-around  items-center flex-col  shadow-cardTrend bg-white   ${
        isCreatorCard
          ? "containerTrendiesCardForCreatorList"
          : "containerDefaultTrendiesCard"
      } `}
    >
      <ImageCard image={img} time={time} isCreatorCard={isCreatorCard} />
      <InfoCard card={card} isCreatorCard={isCreatorCard} />
    </section>
  );
};
CardItem.propTypes = {
  card: shape(CardNftTrendProps),
  isCreatorCard: bool,
  index: number,
};
export default CardItem;
