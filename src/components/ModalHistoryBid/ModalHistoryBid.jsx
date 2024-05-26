import BidModal from "./BidModal";
const ModalHistoryBid = () => {
  return (
    <div className="absolute w-screen h-full  z-40 min-h-full  transition flex items-center">
      <div
        aria-hidden="true"
        className="w-full h-full flex justify-center items-center backdrop-blur-sm bg-[#EFEFEF/40] "
      >
        <div className="relative  w-full  transition my-auto flex justify-center items-center p-4 ">
          <BidModal />
        </div>
      </div>
    </div>
  );
};

export default ModalHistoryBid;
