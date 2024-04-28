import { topCollectionUsersProps } from "../../../../../../../props";
const { owners, items } = topCollectionUsersProps;
const OwnersAndItems = ({ owners, items }) => {
  return (
    <>
      <td className="text-center mobile:hidden">
        <span className="font-poppins font-medium text-[23.65px] text-[#141416] leading-[30.75px]">
          {owners}
        </span>
      </td>
      <td className="text-center mobile:hidden">
        <span className="font-poppins font-medium text-[23.65px] text-[#141416] leading-[30.75px]">
          {items}
        </span>
      </td>
    </>
  );
};
OwnersAndItems.propTypes = { owners, items };
export default OwnersAndItems;
