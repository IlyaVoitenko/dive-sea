import { containerDesktop, containerLaptop } from "./stylesAdaptive";

import InfoCard from "./InfoCard";
import ImageCard from "./ImageCard";

const TrendiesCard = () => {
  return (
    <section
      className={`flex justify-around items-center flex-col h-full shadow-cardTrend bg-white rounded-[23.48px] ${containerDesktop} ${containerLaptop}`}
    >
      <ImageCard />
      <InfoCard />
    </section>
  );
};

export default TrendiesCard;
