import { topCollectionUsersProps } from "../../../../../../../props";
import { bool } from "prop-types";
const { owners, items } = topCollectionUsersProps;
const OwnersAndItems = ({ owners, items, isStatPage }) => {
  return (
    <>
      <td className="text-center mobile:hidden">
        <span
          className={`${
            isStatPage
              ? "ownersAndItemsText"
              : "font-poppins font-medium text-[23.65px] text-[#141416] leading-[30.75px]"
          }`}
        >
          {owners}
        </span>
      </td>
      <td className="text-center mobile:hidden">
        <span
          className={`${
            isStatPage
              ? "ownersAndItemsText"
              : "font-poppins font-medium text-[23.65px] text-[#141416] leading-[30.75px]"
          }`}
        >
          {items}
        </span>
      </td>
    </>
  );
};
OwnersAndItems.propTypes = { owners, items, isStatPage: bool };
export default OwnersAndItems;
