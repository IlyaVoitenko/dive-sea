import { bool } from "prop-types";
import { CardNftTrendProps } from "../../../../props";
const ImageCard = ({ image, time, isCreatorCard }) => {
  return (
    <figure className="relative">
      <div
        className={`flex items-center  justify-center w-[116.58px] tablet:w-[82.91px] h-[37.64px] tablet:h-[26.77px] mobile:h-[37.95px] mobile:w-[117.55px] rounded-[9.41px] border-[1.18px] backdrop-opacity-10 bg-[#1C1D2059] border-[#1C1D2014]  absolute top-[3%] left-[50%] ${
          isCreatorCard && "hidden"
        } `}
      >
        <span className="text-white font-poppins font-medium text-[14.12px] tracking-[0.12px] leading-[21.17px]    mobile:text-[14.23px] mobile:leading-[21.35px] mobile:tracking-[0.12px] tablet:leading-[15.06px] tablet:tracking-[0.08px] tablet:text-[10.04px]">
          {time}
        </span>
      </div>
      <img
        alt="pink"
        src={image}
        className={`static ${
          isCreatorCard ? "imgCardSizeForCreatorList" : "imgCardSizeByDefault"
        } `}
      />
    </figure>
  );
};
ImageCard.propTypes = {
  image: CardNftTrendProps.img,
  time: CardNftTrendProps.time,
  isCreatorCard: bool,
};
export default ImageCard;
