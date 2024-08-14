import cardMark from "../../../../../../../assets/cardMark.svg";
import { topCollectionUsersProps } from "../../../../../../../props";
import { bool } from "prop-types";
const { floorPrice } = topCollectionUsersProps;

const FloorPrice = ({ floorPrice, isStatPage }) => {
  return (
    <td className="flex justify-center items-center  h-full mobile:hidden">
      <img
        src={cardMark}
        alt="card mark"
        className={` ${
          isStatPage ? "cardMarkImg" : "laptop:w-[31.52px] laptop:h-[31.52px]"
        }`}
      />
      <span
        className={` ${
          isStatPage
            ? "textWithCardMarkImg"
            : "font-poppins font-semibold text-[24.51px] text-[#141416] leading-[34.32px]"
        }`}
      >
        {floorPrice}
      </span>
    </td>
  );
};
FloorPrice.propTypes = { floorPrice, isStatPage: bool };
export default FloorPrice;
