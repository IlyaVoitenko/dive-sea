import { shape, bool } from "prop-types";
import AvatarUser from "./AvatarUser";
import Volume from "./Volume";
import Percentages from "./Percentages";
import FloorPrice from "./FloorPrice";
import OwnersAndItems from "./OwnersAndItems";
import { topCollectionUsersProps } from "../../../../../../props";

const BodyItem = ({ user, isStatPage = false }) => {
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
    <tr
      className={` border-b-[1.69px]   laptop:h border-[#EBE9E9] ${
        isStatPage &&
        "desktop:h-[101.99px] laptop:h-[72.54px] tablet:h-[72.54px] mobile:h-[61.42px] "
      }`}
    >
      <AvatarUser
        avatarImg={avatarImg}
        name={name}
        userName={userName}
        isStatPage={isStatPage}
      />
      <Volume
        volume={volume}
        percentagePerDay={percentagePerDay}
        isStatPage={isStatPage}
      />
      <Percentages
        percentagePerDay={percentagePerDay}
        isStatPage={isStatPage}
      />
      <FloorPrice floorPrice={floorPrice} isStatPage={isStatPage} />
      <OwnersAndItems owners={owners} items={items} isStatPage={isStatPage} />
    </tr>
  );
};
BodyItem.propTypes = {
  user: shape(topCollectionUsersProps).isRequired,
  isStatPage: bool,
};
export default BodyItem;
