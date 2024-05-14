import { CardNftTrendProps } from "../../../../../props";
import InfoCard from "./InfoCard";
import ImageCard from "./ImageCard";

const TrendiesCard = ({ card }) => {
  const { img, time, title, subtitle, price } = card;
  return (
    <section
      className={`flex justify-around  items-center flex-col  shadow-cardTrend bg-white rounded-[23.48px] containerDesktopTrendiesCard containerLaptopTrendiesCard containerTabletTrendiesCard containerMobileTrendiesCard `}
    >
      <ImageCard image={img} time={time} />
      <InfoCard title={title} subtitle={subtitle} price={price} />
    </section>
  );
};
TrendiesCard.propTypes = CardNftTrendProps;
export default TrendiesCard;
