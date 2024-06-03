import { bool } from "prop-types";
import { CardNftTrendProps } from "../../../../props";
import { checkStyleForCardItemForImage } from "../../../../helper";
const ImageCard = ({ image, time, isCreatorCard, isCreatorPage }) => {
  const styleForCardItemForImage = checkStyleForCardItemForImage(
    isCreatorCard,
    isCreatorPage
  );
  return (
    <figure className="relative">
      <div
        className={`flex items-center  justify-center containerTimeStyleDefault ${
          isCreatorCard && "hidden"
        } ${isCreatorPage && "desktop:w-[84.75px] desktop:h-[27.36px]"}`}
      >
        <span
          className={` ${
            isCreatorPage ? "timeSpanStyleCreatorPage" : "timeSpanStyleDefault"
          }`}
        >
          {time}
        </span>
      </div>
      <img
        alt="pink"
        src={image}
        className={`static ${styleForCardItemForImage} `}
      />
    </figure>
  );
};
ImageCard.propTypes = {
  image: CardNftTrendProps.img,
  time: CardNftTrendProps.time,
  isCreatorCard: bool,
  isCreatorPage: bool,
};
export default ImageCard;
