import { bool, arrayOf } from "prop-types";
import TopCollectionTable from "../../Home/TopCollection/TopCollectionTable";
import { topCollectionUsersProps } from "../../../props";

const TableStats = ({ isStatPage = false, list }) => {
  return (
    <div className="flex h-full w-full">
      <TopCollectionTable isStatPage={isStatPage} list={list} />
    </div>
  );
};
TableStats.propTypes = {
  isStatPage: bool,
  list: arrayOf(topCollectionUsersProps),
};
export default TableStats;
