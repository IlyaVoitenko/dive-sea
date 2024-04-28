import { users } from "../constants";
import BodyItem from "./BodyItem/BodyItem";
const BodyTable = () => {
  return (
    <tbody>
      {users.map((user) => (
        <BodyItem key={user.id} user={user} />
      ))}
    </tbody>
  );
};

export default BodyTable;
