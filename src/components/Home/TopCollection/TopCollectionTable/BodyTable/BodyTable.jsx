import { users } from "../constants";
import { topCollectionUsersProps } from "../../../../../props";
import { bool, arrayOf } from "prop-types";
import BodyItem from "./BodyItem/BodyItem";
const BodyTable = ({ isStatPage = false, list = users }) => {
  return (
    <tbody>
      {isStatPage
        ? list.map((user) => (
            <BodyItem key={user.id} user={user} isStatPage={isStatPage} />
          ))
        : list
            .map((user) => <BodyItem key={user.id} user={user} />)
            .slice(0, 4)}
    </tbody>
  );
};
BodyTable.propTypes = {
  isStatPage: bool,
  list: arrayOf(topCollectionUsersProps),
};
export default BodyTable;
