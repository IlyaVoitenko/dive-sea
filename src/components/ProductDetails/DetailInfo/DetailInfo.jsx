import { CardNftTrendProps } from "../../../props";
import BtnBack from "../BtnBack";
import ImgProduct from "./ImgProduct";
import TitleAndSubtitle from "./TitleAndSubtitle";
import AuthorAndPayment from "./AuthorAndPayment";

const DetailInfo = ({ productDetails }) => {
  const { img, title, price } = productDetails || {};
  return (
    <section className="flex flex-col justify-between w-full desktop:h-[728.25px]">
      <BtnBack />
      <div className="blockDetailInfo">
        <ImgProduct img={img} />
        <section className="flex flex-col justify-between desktop:w-[473.8px] desktop:h-[550.09px]">
          <TitleAndSubtitle title={title} />
          <AuthorAndPayment price={price} />
        </section>
      </div>
    </section>
  );
};
DetailInfo.propTypes = CardNftTrendProps;

export default DetailInfo;
