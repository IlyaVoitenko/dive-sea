import { Link } from "react-router-dom";
import cardMark from "../../../../../../assets/cardMark.svg";
import { CardNftTrendProps } from "../../../../../../props";
import { setProductDetails } from "../../../../../../store/reducers/product";
import { useDispatch } from "react-redux";

const InfoCard = ({ card }) => {
  const { title, subtitle, price } = card;
  const dispatch = useDispatch();
  return (
    <div
      className={`containerDesktopInfoCard containerLaptopInfoCard containerTabletInfoCard containerMobileInfoCard flex flex-col justify-between pl-5 pr-5`}
    >
      <span
        className={`text-[#141416] font-poppins font-semibold titleDesktop titleLaptop titleTablet titleMobile`}
      >
        {title}
      </span>
      <div className="flex justify-between">
        <div className="flex flex-col ">
          <span
            className={`text-[#94A3B8] font-poppins font-normal subtitleDesktop subtitleLaptop subtitleTablet subtitleMobile`}
          >
            {subtitle}
          </span>
          <figure className="flex">
            <img
              src={cardMark}
              alt="card mark"
              className="w-[21.17px] h-[21.17px] tablet:h-[15.06px] tablet:w-[15.06px] mobile:w-[14.95px] mobile:h-[14.95px]"
            />
            <span
              className={`  w-[30px] h-[25px] font-poppins font-medium  text-[#141416] markDesktop markLaptop markTablet markMobile`}
            >
              {price}
            </span>
          </figure>
        </div>
        <Link
          to={"/discover/product-details"}
          onClick={() => dispatch(setProductDetails(card))}
        >
          <button className=" flex justify-center items-center bg-[#141416] rounded-[11.76px] w-[121.74px] h-[51.76px] tablet:w-[92px] tablet:h-[36.81px] mobile:w-[90.96px] mobile:h-[36.54px]">
            <span className="font-poppins font-semibold text-[14.12px] tablet:text-[10.04px] mobile:text-[9.97px] leading-[21.17px] tablet:leading-[21px] mobile:leading-[14.95px] tracking-[0.12px] tablet:tracking-[0.08px] text-white w-[72px] h-[21px]  mobile:w-[51px] mobile:h-[15px]">
              PLACE BID
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};
InfoCard.propTypes = CardNftTrendProps;

export default InfoCard;
