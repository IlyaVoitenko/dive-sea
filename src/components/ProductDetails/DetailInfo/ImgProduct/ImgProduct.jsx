import { string } from "prop-types";
const ImgProduct = ({ img }) => {
  return (
    <figure>
      <img
        src={img}
        className=" desktop:w-[564.05px] desktop:h-[560.55px] desktop:rounded-[23.97px] laptop:w-[401.14px] laptop:h-[398.65px] laptop:rounded-[17.05px] tablet:w-[301.14px] tablet:h-[300.65px] tablet:rounded-[17.05px] mobile:w-[279.37px] mobile:h-[245.69px] mobile:rounded-[13.23px]"
        alt="img product"
      />
    </figure>
  );
};

ImgProduct.propTypes = { img: string };

export default ImgProduct;
