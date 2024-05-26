import { CardNftTrendProps } from "../../../props";
import BtnBack from "../BtnBack";
import ImgProduct from "./ImgProduct";
import TitleAndSubtitle from "./TitleAndSubtitle";
import AuthorAndPayment from "./AuthorAndPayment";

const DetailInfo = ({ productDetails }) => {
  const { img, title, name } = productDetails || {};
  return (
    <section className="flex flex-col justify-between mobile:items-center   w-full  desktop:h-[728.25px] laptop:h-[517.92px] tablet:h-[430.92px] mobile:w-[90%]">
      <BtnBack />
      <div className="blockDetailInfo ">
        <ImgProduct img={img} />
        <section className="detailInfoContainerDetailData">
          <TitleAndSubtitle title={title} name={name} />
          <AuthorAndPayment product={productDetails} />
        </section>
      </div>
    </section>
  );
};
DetailInfo.propTypes = CardNftTrendProps;

export default DetailInfo;
