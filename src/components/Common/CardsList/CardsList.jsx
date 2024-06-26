import { array, bool } from "prop-types";
import CardItem from "../CardItem";

const CardsList = ({ list, isCreatorPage = false }) => {
  return (
    <div
      className={`flex pt-[2.6rem] pb-[2.6rem] mobile:w-full flex-wrap ${
        isCreatorPage
          ? "desktop:gap-[27px] laptop:gap-[27px] tablet:gap-[50px] mobile:gap-[27px] justify-center"
          : "desktop:w-full justify-evenly mobile:justify-center gap-[40px]"
      }`}
    >
      {list &&
        list.map((card) => (
          <CardItem key={card.id} card={card} isCreatorPage={isCreatorPage} />
        ))}
    </div>
  );
};
CardsList.propTypes = { list: array, isCreatorPage: bool };
export default CardsList;
