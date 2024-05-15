import { number } from "prop-types";
import creatorAvatar from "../../../../assets/creatorAvatar.svg";
import ownerProductAvatar from "../../../../assets/ownerProductAvatar.svg";
import bigMarkCard from "../../../../assets/bigMarkCard.svg";
import wallet from "../../../../assets/wallet.svg";
const AuthorAndPayment = ({ price }) => {
  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="flex justify-between items-center w-[45%]">
          <figure>
            <img
              src={creatorAvatar}
              alt="avatar of creator"
              className="desktop:w-[65.65px] desktop:h-[65.65px]"
            />
          </figure>
          <div className="flex flex-col">
            <span className="detailInfoPersonTitle">Created by</span>
            <span className="detailInfoPersonSubtitle">Perperzon</span>
          </div>
        </div>
        <div className="flex justify-between items-center w-[36%]">
          <figure>
            <img
              src={ownerProductAvatar}
              alt="avatar of owner"
              className="desktop:w-[65.65px] desktop:h-[65.65px]"
            />
          </figure>
          <div className="flex flex-col">
            <span className="detailInfoPersonTitle">Owned by</span>
            <span className="detailInfoPersonSubtitle">Videz</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center ">
        <div className="flex flex-col justify-between items-start desktop:h-[77.49px]">
          <span className="detailInfoSubtitlesPrice">Current Bid</span>
          <div className="flex  items-center ">
            <figure>
              <img
                src={bigMarkCard}
                alt="card mark"
                className="desktop:w-[22.35px] desktop:h-[35.6px]"
              />
            </figure>
            <span className="detailInfoPrice">{price}</span>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end desktop:h-[77.49px]">
          <span className="detailInfoSubtitlesPrice">End in</span>
          <span className="detailInfoTime">Jun 17, 2023 at 05:08</span>
        </div>
      </div>
      <button className="detailInfoBtn">
        <img src={wallet} alt="wallet" />
        <span className="detailInfoBtnText">Place Bid</span>
      </button>
    </>
  );
};

AuthorAndPayment.propTypes = { price: number };

export default AuthorAndPayment;
