import { bidProductsListSelector } from "../../../store/selectors";
import { useSelector } from "react-redux";
import ItemProduct from "../ItemProduct";
const HistoryBid = () => {
  const bidProductsList = useSelector(bidProductsListSelector);

  return (
    <div className="flex flex-col justify-between desktop:h-[405.63px]">
      <div className="flex flex-col">
        <span className="font-poppins font-[600] text-[#000000] desktop:text-[20.26px] desktop:leading-[29.26px]">
          History of Bid
        </span>
        <span className="font-poppins font-[400] text-[#888888] desktop:text-[14.63px] desktop:leading-[18.01px]">
          Oct 14, 2022
        </span>
      </div>
      <div className="flex flex-col flex-wrap overflow-auto justify-between desktop:h-[330px] ">
        {bidProductsList &&
          bidProductsList.map((item, index) => (
            <ItemProduct key={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default HistoryBid;
