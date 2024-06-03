import { useDispatch } from "react-redux";
import { shape } from "prop-types";
import { CardNftTrendProps } from "../../../../props";
import {
  setIsShowModalHistoryBid,
  setBidProductsList,
} from "../../../../store/reducers/product";
import creatorAvatar from "../../../../assets/creatorAvatar.svg";
import ownerProductAvatar from "../../../../assets/ownerProductAvatar.svg";
import bigMarkCard from "../../../../assets/bigMarkCard.svg";
import wallet from "../../../../assets/wallet.svg";
const AuthorAndPayment = ({ product }) => {
  const dispatch = useDispatch();
  const { price } = product || {};
  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="flex justify-between items-center w-[45%] tablet:w-[36%]">
          <figure>
            <img
              src={creatorAvatar}
              alt="avatar of creator"
              className="detailInfoAvatarsImg"
            />
          </figure>
          <div className="flex flex-col">
            <span className="detailInfoPersonSubtitle">Created by</span>
            <span className=" detailInfoPersonTitle">Perperzon</span>
          </div>
        </div>
        <div className="flex justify-between items-center w-[36%] tablet:w-[30%]">
          <figure>
            <img
              src={ownerProductAvatar}
              alt="avatar of owner"
              className="detailInfoAvatarsImg"
            />
          </figure>
          <div className="flex flex-col">
            <span className=" detailInfoPersonSubtitle">Owned by</span>
            <span className="detailInfoPersonTitle">Videz</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center ">
        <div className="detailInfoSubtitlesPriceContainer items-start ">
          <span className="detailInfoSubtitlesPrice">Current Bid</span>
          <div className="flex  items-center ">
            <figure>
              <img
                src={bigMarkCard}
                alt="card mark"
                className="bigMarkCardImg"
              />
            </figure>
            <span className="detailInfoPrice">{price}</span>
          </div>
        </div>
        <div className="detailInfoSubtitlesPriceContainer items-end ">
          <span className="detailInfoSubtitlesPrice">End in</span>
          <span className="detailInfoTime">Jun 17, 2023 at 05:08</span>
        </div>
      </div>
      <button
        className="detailInfoBtn"
        onClick={() => {
          if (!product) return;
          dispatch(setIsShowModalHistoryBid());
          dispatch(setBidProductsList(product));
        }}
      >
        <img src={wallet} alt="wallet" className="detailInfoWalletImg" />
        <span className="detailInfoBtnText">Place Bid</span>
      </button>
    </>
  );
};

AuthorAndPayment.propTypes = { product: shape(CardNftTrendProps) };

export default AuthorAndPayment;
