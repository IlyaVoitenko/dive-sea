import { users } from "../constants";
import BodyItem from "./BodyItem/BodyItem";
const BodyTable = ({ isStatPage = false, list = users }) => {
  return (
    <tbody>
      {isStatPage
        ? list.map((user) => <BodyItem key={user.id} user={user} />)
        : list
            .map((user) => <BodyItem key={user.id} user={user} />)
            .slice(0, 4)}
    </tbody>
  );
};

export default BodyTable;
