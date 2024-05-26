import { bidProductsListSelector } from "../../../store/selectors";
import { useSelector } from "react-redux";
import ItemProduct from "../ItemProduct";
const HistoryBid = () => {
  const bidProductsList = useSelector(bidProductsListSelector);

  return (
    <div className="flex flex-col justify-between desktop:h-[405.63px] laptop:h-[288.48px] tablet:h-[288.48px] mobile:h-[286.83px]">
      <div className="flex flex-col">
        <span className="font-poppins font-[600] text-[#000000] desktop:text-[20.26px] desktop:leading-[29.26px] laptop:text-[14.41px]  laptop:leading-[20.81px]  tablet:text-[14.41px] tablet:leading-[20.81px] mobile:text-[14.32px] mobile:leading-[20.69px]">
          History of Bid
        </span>
        <span className="font-poppins font-[400] text-[#888888] desktop:text-[14.63px] desktop:leading-[18.01px] laptop:text-[10.4px] laptop:leading-[12.81px] tablet:text-[10.4px] tablet:leading-[12.81px] mobile:text-[10.35px] mobile:leading-[12.73px]">
          Oct 14, 2022
        </span>
      </div>
      <div
        className="flex flex-col flex-wrap overflow-auto justify-between desktop:h-[330px] laptop:h-[240px] tablet:h-[240px] mobile:h-[240px]
"
      >
        {bidProductsList &&
          bidProductsList.map((item, index) => (
            <ItemProduct key={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default HistoryBid;
