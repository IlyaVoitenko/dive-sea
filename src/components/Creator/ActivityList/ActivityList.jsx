import ActivityCard from "../Activity/ActivityCard";
import { array } from "prop-types";
const ActivityList = ({ list }) => {
  return (
    <div className={`flex  flex-wrap  "desktop:gap-[27px] justify-center `}>
      {list && list.map((card) => <ActivityCard key={card.id} />)}
    </div>
  );
};
ActivityList.propTypes = {
  list: array,
};
export default ActivityList;
