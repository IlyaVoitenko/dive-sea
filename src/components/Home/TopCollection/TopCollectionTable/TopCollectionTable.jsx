import HeaderTable from "./HeaderTable";
import BodyTable from "./BodyTable";
import { bool, arrayOf } from "prop-types";
import { topCollectionUsersProps } from "../../../../props";

const TopCollectionTable = ({ isStatPage = false, list }) => {
  return (
    <table
      className={`${
        isStatPage
          ? "desktop:w-[1247.7px] laptop:w-[887.54px] tablet:w-[700px] mobile:w-[315.86px] h-full"
          : "w-[90%] h-[40%]"
      } `}
    >
      <HeaderTable isStatPage={isStatPage} />
      <BodyTable isStatPage={isStatPage} list={list} />
    </table>
  );
};
TopCollectionTable.propTypes = {
  isStatPage: bool,
  list: arrayOf(topCollectionUsersProps),
};
export default TopCollectionTable;
