import cardMark from "../../../../../../assets/cardMark.svg";
import { CardNftTrendProps } from "../../../../../../props";

const InfoCard = ({ title, subtitle, rating }) => {
  return (
    <div
      className={`containerDesktopInfoCard containerLaptopInfoCard containerTabletInfoCard flex flex-col justify-between pl-5 pr-5`}
    >
      <span
        className={`text-[#141416] font-poppins font-semibold titleDesktop titleLaptop titleTablet`}
      >
        {title}
      </span>
      <div className="flex justify-between">
        <div className="flex flex-col ">
          <span
            className={`text-[#94A3B8] font-poppins font-normal subtitleDesktop subtitleLaptop subtitleTablet`}
          >
            {subtitle}
          </span>
          <figure className="flex">
            <img
              src={cardMark}
              alt="card mark"
              className="w-[21.17px] h-[21.17px] tablet:h-[15.06px] tablet:w-[15.06px]"
            />
            <span
              className={`  w-[30px] h-[25px] font-poppins font-medium  text-[#141416] markDesktop markLaptop markTablet`}
            >
              {rating}
            </span>
          </figure>
        </div>
        <button className=" flex justify-center items-center bg-[#141416] rounded-[11.76px] w-[121.74px] h-[51.76px] tablet:w-[92px] tablet:h-[36.81px]">
          <span className="font-poppins font-semibold text-[14.12px] tablet:text-[10.04px] leading-[21.17px] tablet:leading-[21px] tracking-[0.12px] tablet:tracking-[0.08px] text-white w-[71px] h-[21px] ">
            PLACE BID
          </span>
        </button>
      </div>
    </div>
  );
};
InfoCard.propTypes = {
  title: CardNftTrendProps.title,
  subtitle: CardNftTrendProps.subtitle,
  rating: CardNftTrendProps.rating,
};
export default InfoCard;
