import { array } from "prop-types";
import TrendiesCard from "../../Home/Weekly/TrendiesList/TrendiesCard";

const CardsList = ({ list }) => {
  return (
    <div className="flex pt-[2.6rem] pb-[2.6rem] flex-wrap justify-evenly mobile:justify-center gap-[40px] desktop:w-full">
      {list.map((card) => (
        <TrendiesCard key={card.id} card={card} />
      ))}
    </div>
  );
};
CardsList.propTypes = { list: array };
export default CardsList;
