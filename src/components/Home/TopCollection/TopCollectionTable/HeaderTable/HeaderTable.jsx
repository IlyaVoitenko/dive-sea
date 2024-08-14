import { bool } from "prop-types";
import arrowsDownUp from "../../../../../assets/arrows-down-up.svg";
const HeaderTable = ({ isStatPage = false }) => {
  return (
    <thead
      className={`${
        isStatPage &&
        "desktop:h-[79.6px] laptop:h-[56.61px] tablet:h-[56.61px] mobile:h-[18px]"
      }`}
    >
      <tr
        className={`${
          isStatPage
            ? "font-manrope font-[800] text-[#141416] desktop:leading-[33.58px] desktop:text-[22.39px] desktop:tracking-[0.25px] laptop:leading-[23.88px] laptop:text-[15.92px] laptop:tracking-[0.18px] tablet:leading-[23.88px] tablet:text-[15.92px] tablet:tracking-[0.18px] mobile:text-[#000000] mobile:font-[500] mobile:font-poppins mobile:leading-[18.13px] mobile:text-[13.95px] mobile:tracking-[1%]"
            : "font-poppins text-[#93989A] font-medium text-center tableHeaderTr"
        }`}
      >
        <th className="text-left ">
          <span
            className={`${isStatPage && "flex justify-start items-center"}`}
          >
            Collection&nbsp;
            {isStatPage && <img src={arrowsDownUp} className="arrowsDownUp" />}
          </span>
        </th>
        <th>
          <span
            className={`${isStatPage && "flex justify-center items-center"}`}
          >
            Volume&nbsp;
            {isStatPage && <img src={arrowsDownUp} className="arrowsDownUp" />}
          </span>
        </th>
        <th className="mobile:hidden">
          <span
            className={`${isStatPage && "flex justify-center items-center"}`}
          >
            24h %&nbsp;
            {isStatPage && <img src={arrowsDownUp} className="arrowsDownUp" />}
          </span>
        </th>
        <th className="mobile:hidden">
          <span
            className={`${isStatPage && "flex justify-center items-center"}`}
          >
            Floor Price&nbsp;
            {isStatPage && <img src={arrowsDownUp} className="arrowsDownUp" />}
          </span>
        </th>
        <th className=" mobile:hidden">
          <span
            className={`${isStatPage && "flex justify-center items-center"}`}
          >
            Owners &nbsp;
            {isStatPage && <img src={arrowsDownUp} className="arrowsDownUp" />}
          </span>
        </th>
        <th className="mobile:hidden">
          <span
            className={`${isStatPage && "flex justify-center items-center"}`}
          >
            Items
          </span>
        </th>
      </tr>
    </thead>
  );
};
HeaderTable.propTypes = {
  isStatPage: bool,
};
export default HeaderTable;
