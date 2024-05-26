import HistoryBid from "./HistoryBid";
import BidInputAndSubmitBtn from "./BidInputAndSubmitBtn";
const ModalHistoryBid = () => {
  return (
    <div className="absolute w-screen h-full  z-40 min-h-full  transition flex items-center">
      <div
        aria-hidden="true"
        className="w-full h-full flex justify-center items-center backdrop-blur-sm bg-[#EFEFEF/40] "
      >
        <div className="relative  w-full  transition my-auto flex justify-center items-center p-4 ">
          <section className="border-solid flex flex-col justify-evenly border-black rounded-[30px] border-[2.12px] desktop:w-[438.9px] desktop:h-[732.56px] bg-[#FAFAFA] pl-[2%] pr-[2%]">
            <HistoryBid />
            <BidInputAndSubmitBtn />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ModalHistoryBid;
