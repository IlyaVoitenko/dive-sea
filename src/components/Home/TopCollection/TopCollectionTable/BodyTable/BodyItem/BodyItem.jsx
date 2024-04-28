import { shape } from "prop-types";
import AvatarUser from "./AvatarUser";
import Volume from "./Volume";
import Percentages from "./Percentages";
import FloorPrice from "./FloorPrice";
import OwnersAndItems from "./OwnersAndItems";
import { topCollectionUsersProps } from "../../../../../../props";

const BodyItem = ({ user }) => {
  const {
    percentagePerDay,
    avatarImg,
    floorPrice,
    owners,
    items,
    volume,
    userName,
    name,
  } = user;
  return (
    <tr className=" border-b-[1.69px] border-[#EBE9E9]">
      <AvatarUser avatarImg={avatarImg} name={name} userName={userName} />
      <Volume volume={volume} percentagePerDay={percentagePerDay} />
      <Percentages percentagePerDay={percentagePerDay} />
      <FloorPrice floorPrice={floorPrice} />
      <OwnersAndItems owners={owners} items={items} />
    </tr>
  );
};
BodyItem.propTypes = { user: shape(topCollectionUsersProps).isRequired };
export default BodyItem;
