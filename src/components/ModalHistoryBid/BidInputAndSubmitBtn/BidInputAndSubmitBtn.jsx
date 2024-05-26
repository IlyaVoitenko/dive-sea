import { useDispatch } from "react-redux";
import { setIsShowModalHistoryBid } from "../../../store/reducers/product";
import wallet from "../../../assets/wallet.svg";
function BidInputAndSubmitBtn() {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-between desktop:h-[196.44px] ">
      <span className="text-[#000000] font-[600] font-poppins desktop:text-[20.26px] desktop:leading-[29.26px]">
        Your Bid
      </span>
      <div className="flex">
        <div className="custom-select">
          <select
            name="cars"
            id="cars"
            className="text-[#FFFFFF] font-poppins font-[600] uppercase appearance-none pl-[25%] desktop:w-[157.55px] desktop:h-[70.9px] desktop:text-[20.26px] desktop:leading-[30.39px] desktop:gap-[23.63px] desktop:rounded-l-[18.01px]"
          >
            <option value="eth">eth</option>
            <option value="eth">eth</option>
          </select>
        </div>

        <input className="desktop:rounded-r-[18.01px] text-black pl-[1rem] w-full rounded-[1.13px] border border-[#141416] bg-white" />
      </div>
      <button
        className="detailInfoBtn"
        onClick={() => {
          dispatch(setIsShowModalHistoryBid());
        }}
      >
        <img src={wallet} alt="wallet" className="detailInfoWalletImg" />
        <span className="detailInfoBtnText">Submit</span>
      </button>
    </div>
  );
}

BidInputAndSubmitBtn.propTypes = {};

export default BidInputAndSubmitBtn;
