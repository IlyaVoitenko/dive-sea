import { useDispatch } from "react-redux";
import { setIsShowModalHistoryBid } from "../../../store/reducers/product";
import wallet from "../../../assets/wallet.svg";
function BidInputAndSubmitBtn() {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-between desktop:h-[196.44px] laptop:h-[139.7px] tablet:h-[139.7px] ">
      <span className="text-[#000000] font-[600] font-poppins desktop:text-[20.26px] desktop:leading-[29.26px] laptop:text-[14.41px] laptop:leading-[20.81px] tablet:text-[14.41px] tablet:leading-[20.81px]">
        Your Bid
      </span>
      <div className="flex">
        <div className="selectBidContainer">
          <select name="cars" id="cars" className="selectBid">
            <option value="eth">eth</option>
            <option value="eth">eth</option>
          </select>
        </div>

        <input className="desktop:rounded-r-[18.01px] laptop:rounded-r-[12.81px] tablet:rounded-r-[12.81px] text-black pl-[1rem] w-full rounded-[1.13px] border border-[#141416] bg-white" />
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
