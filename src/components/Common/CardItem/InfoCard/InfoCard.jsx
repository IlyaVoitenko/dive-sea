import { Link } from "react-router-dom";
import { bool, shape } from "prop-types";
import cardMark from "../../../../assets/cardMark.svg";
import heart from "../../../../assets/heart.svg";
import successIcon from "../../../../assets/successIcon.svg";
import { CardNftTrendProps } from "../../../../props";
import { setProductDetails } from "../../../../store/reducers/product";
import { useDispatch } from "react-redux";
import {
  checkStyleForCardItemForTitle,
  checkStyleForCardItemForMarkImg,
  checkStyleForInfoCardItem,
} from "../../../../helper";

const InfoCard = ({ card, isCreatorCard, isCreatorPage }) => {
  const { title, subtitle, price, amountLikes } = card;
  const styleForInfoCardItem = checkStyleForInfoCardItem(
    isCreatorCard,
    isCreatorPage
  );
  const styleForCardItemForTitle = checkStyleForCardItemForTitle(
    isCreatorCard,
    isCreatorPage
  );
  const styleForCardItemForMarkImg = checkStyleForCardItemForMarkImg(
    isCreatorCard,
    isCreatorPage
  );
  const dispatch = useDispatch();
  return (
    <div className={` flex flex-col justify-around ${styleForInfoCardItem}`}>
      {isCreatorCard && (
        <div className="flex justify-between items-center desktop:w-[94.13px] laptop:w-[67.03px] tablet:w-[66px] ">
          <span className="text-[#141416] font-poppins font-[700] desktop:text-[14px] desktop:leading-[22px] laptop:text-[9.96px] laptop:leading-[15.65px] tablet:text-[9.96px] tablet:leading-[15.65px]">
            Perperzon
          </span>
          <figure>
            <img
              src={successIcon}
              className="desktop:w-[16.13px] desktop:h-[16.13px] laptop:w-[11.47px] laptop:h-[11.47px] tablet:w-[11.47px] tablet:h-[11.47px]"
              alt="success icon"
            />
          </figure>
        </div>
      )}
      <span
        className={`text-[#141416]  font-poppins font-semibold ${styleForCardItemForTitle}
          `}
      >
        {title}
      </span>
      <div className="flex justify-between">
        <div className="flex flex-col  justify-between">
          {!isCreatorCard && (
            <span
              className={`text-[#94A3B8] font-poppins font-normal ${
                isCreatorPage
                  ? " subtitleCardForCreatorPage"
                  : " subtitleDesktop subtitleLaptop subtitleTablet subtitleMobile"
              }`}
            >
              {subtitle}
            </span>
          )}

          <figure className="flex">
            <img
              src={cardMark}
              alt="card mark"
              className={styleForCardItemForMarkImg}
            />
            <span
              className={`  w-[30px] h-[25px] font-poppins font-medium  text-[#141416] ${
                isCreatorCard ? "markForCreatorList" : "markDefault"
              } `}
            >
              {price}
            </span>
          </figure>
        </div>
        {isCreatorCard ? (
          <div className="flex justify-between items-center">
            <img
              src={heart}
              alt="likes amount"
              className="desktop:w-[20px] desktop:h-[20px] laptop:h-[15px] laptop:w-[15px] tablet:h-[15px] tablet:w-[15px]"
            />
            <span className="text-[#888888] font-poppins font-[600] desktop:text-[12.87px] desktop:leading-[18.59px] laptop:text-[9.15px] laptop:leading-[13.22px] tablet:text-[9.15px] tablet:leading-[13.22px]">
              {amountLikes}
            </span>
          </div>
        ) : (
          <Link
            to={"/discover/product-details"}
            onClick={() => dispatch(setProductDetails(card))}
          >
            <button
              className={` flex justify-center items-center bg-[#141416] ${
                isCreatorPage ? "btnCardForCreatorPage" : "btnDefault"
              }`}
            >
              <span
                className={`font-poppins font-semibold ${
                  isCreatorPage ? "btnSpanCardForCreatorPage" : "btnSpanDefault"
                } `}
              >
                PLACE BID
              </span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
InfoCard.propTypes = {
  card: shape(CardNftTrendProps),
  isCreatorCard: bool,
  isCreatorPage: bool,
};

export default InfoCard;
