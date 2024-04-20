import cardMark from "../../../../../../assets/cardMark.svg";
import { CardNftTrendProps } from "../../../../../../props";

const InfoCard = ({ title, subtitle, rating }) => {
  return (
    <div
      className={`containerDesktopInfoCard containerLaptopInfoCard flex flex-col justify-between pl-5 pr-5`}
    >
      <span
        className={`text-[#141416] font-poppins font-semibold titleDesktop titleLaptop`}
      >
        {title}
      </span>
      <div className="flex  justify-between">
        <div className="flex  flex-col ">
          <span
            className={`text-[#94A3B8] font-poppins font-normal subtitleDesktop subtitleLaptop`}
          >
            {subtitle}
          </span>
          <figure className="flex">
            <img
              src={cardMark}
              alt="card mark"
              className="w-[21.17px] h-[21.17px]"
            />
            <span
              className={`  w-[30px] h-[25px] font-poppins font-medium  text-[#141416] markDesktop markLaptop`}
            >
              {rating}
            </span>
          </figure>
        </div>
        <button className="   bg-[#141416] rounded-[11.76px]   w-[121.74px] h-[51.76px]">
          <span className="font-poppins font-semibold text-[14.12px] leading-[21.17px] tracking-[0.12px] text-white w-[71px] h-[21px]">
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
