import { array } from "prop-types";
import CardItem from "../CardItem";

const CardsList = ({ list }) => {
  return (
    <div className="flex pt-[2.6rem] pb-[2.6rem] flex-wrap justify-evenly mobile:justify-center gap-[40px] desktop:w-full">
      {list && list.map((card) => <CardItem key={card.id} card={card} />)}
    </div>
  );
};
CardsList.propTypes = { list: array };
export default CardsList;
