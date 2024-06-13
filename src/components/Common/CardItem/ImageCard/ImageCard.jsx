import { bool } from "prop-types";
import { CardNftTrendProps } from "../../../../props";
import { checkStyleForCardItemForImage } from "../../../../helper";
const ImageCard = ({
  image,
  time,
  isCreatorCardProductDetail,
  isCreatorPage,
}) => {
  const styleForCardItemForImage = checkStyleForCardItemForImage(
    isCreatorCardProductDetail,
    isCreatorPage
  );
  return (
    <figure className="relative">
      <div
        className={`flex items-center  justify-center containerTimeStyleDefault ${
          isCreatorCardProductDetail && "hidden"
        } ${
          isCreatorPage &&
          "desktop:w-[84.75px] desktop:h-[27.36px] laptop:w-[60.27px] laptop:h-[19.46px] laptop:rounded-[4.86px] tablet:w-[60.27px] tablet:h-[19.46px] tablet:rounded-[4.86px] mobile:w-[60.8px] mobile:h-[19.63px] mobile:rounded-[4.91px]"
        }`}
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
  isCreatorCardProductDetail: bool,
  isCreatorPage: bool,
};
export default ImageCard;
