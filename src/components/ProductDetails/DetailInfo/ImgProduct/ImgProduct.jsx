import { string } from "prop-types";
const ImgProduct = ({ img }) => {
  return (
    <figure>
      <img
        src={img}
        className=" desktop:w-[564.05px] desktop:h-[560.55px] desktop:rounded-[23.97px]"
        alt="img product"
      />
    </figure>
  );
};

ImgProduct.propTypes = { img: string };

export default ImgProduct;
