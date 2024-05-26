import { Link } from "react-router-dom";
import { bool, shape } from "prop-types";
import cardMark from "../../../../assets/cardMark.svg";
import heart from "../../../../assets/heart.svg";
import successIcon from "../../../../assets/successIcon.svg";
import { CardNftTrendProps } from "../../../../props";
import { setProductDetails } from "../../../../store/reducers/product";
import { useDispatch } from "react-redux";

const InfoCard = ({ card, isCreatorCard }) => {
  const { title, subtitle, price, amountLikes } = card;
  const dispatch = useDispatch();
  return (
    <div
      className={` flex flex-col justify-around  ${
        isCreatorCard
          ? "containerInfoCardForCreatorList"
          : "containerDefaultInfoCard pl-[5%] pr-[5%] tablet:pl-[8%] tablet:pr-[8%] mobile:pl-[0%] mobile:pr-[0%]"
      }  `}
    >
      {isCreatorCard && (
        <div className="flex justify-between items-center desktop:w-[94.13px] laptop:w-[67.03px] tablet:w-[66px]">
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
        className={`text-[#141416]  font-poppins font-semibold ${
          isCreatorCard ? "titleForCreatorList" : "titleDefault"
        } `}
      >
        {title}
      </span>
      <div className="flex justify-between">
        <div className="flex flex-col  justify-between">
          {!isCreatorCard && (
            <span
              className={`text-[#94A3B8] font-poppins font-normal subtitleDesktop subtitleLaptop subtitleTablet subtitleMobile`}
            >
              {subtitle}
            </span>
          )}

          <figure className="flex">
            <img
              src={cardMark}
              alt="card mark"
              className={
                isCreatorCard ? "markImgForCreatorList" : "markImgDefault"
              }
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
            <button className=" flex justify-center items-center bg-[#141416] rounded-[11.76px] w-[121.74px] h-[51.76px] tablet:w-[92px] tablet:h-[36.81px] mobile:w-[122.75px] mobile:h-[52.18px] mobile:rounded-[11.86px]">
              <span className="font-poppins font-semibold text-[14.12px] tablet:text-[10.04px] mobile:text-[14.23px] leading-[21.17px] tablet:leading-[21px] mobile:leading-[21.35px] tracking-[0.12px] tablet:tracking-[0.08px] text-white w-[72px] h-[21px]  ">
                PLACE BID
              </span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
InfoCard.propTypes = { card: shape(CardNftTrendProps), isCreatorCard: bool };

export default InfoCard;
