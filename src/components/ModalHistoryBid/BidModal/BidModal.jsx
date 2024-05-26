import HistoryBid from "../HistoryBid";
import BidInputAndSubmitBtn from "../BidInputAndSubmitBtn";
const BidModal = () => {
  return (
    <section className="border-solid flex flex-col justify-evenly border-black rounded-[30px] border-[2.12px] desktop:w-[438.9px] desktop:h-[732.56px] laptop:w-[312.14px] laptop:h-[520.98px] tablet:h-[520.98px] tablet:w-[312.14px] bg-[#FAFAFA] pl-[2%] pr-[2%]">
      <HistoryBid />
      <BidInputAndSubmitBtn />
    </section>
  );
};

export default BidModal;
