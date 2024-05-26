import successIcon from "../../../assets/successIcon.svg";
import cardMark from "../../../assets/cardMark.svg";
import { CardNftTrendProps } from "../../../props";
import { shape } from "prop-types";
const ItemProduct = ({ item }) => {
  const { img, name, time, price } = item;
  return (
    <div className="flex justify-between items-center w-full  bg-white desktop:h-[100.38px] desktop:rounded-[11.25px] pl-[5%] pr-[5%] hover:shadow-itemBid shadow-itemUnhoverBid">
      <div className="flex">
        <div className="relative">
          <figure>
            <img
              src={img}
              alt="avatar user"
              className="border-[1.92px] rounded-full w-[46.09px] h-[46.09px] desktop:w-[63.67px] desktop:h-[63.67px] mobile:w-[23.3px] mobile:h-[23.3px] tablet:h-[35px] tablet:w-[35px]"
            />
          </figure>
          <img
            src={successIcon}
            alt="success"
            className="flex justify-center items-center text-white  desktop:w-[20.77px] desktop:h-[20.77px]  mobile:w-[9.99px] mobile:h-[9.99px] tablet:w-[15px] tablet:h-[15px] bg-[#141416] rounded-full  top-[0%] left-[70%] absolute  "
          />
        </div>
        <div className="flex flex-col  justify-around ml-4">
          <span className="text-[#141416] font-poppins text-[16.88px] laptop:text-[8.68px] tablet:text-[8.68px] mobile:text-[5.83px] font-medium leading-[25.88px] laptop:leading-[14.88px] mobile:leading-[9.99px]">
            {name}
          </span>
          <span className="text-[#64748B] font-poppins text-[14.63px] laptop:text-[7.44px] tablet:text-[7.44px] mobile:text-[4.99px] font-normal leading-[18.01px] laptop:leading-[12.4px] mobile:leading-[8.32px]">
            {time}
          </span>
        </div>
      </div>

      <figure className="flex w-[30%]">
        <img
          src={cardMark}
          alt="card mark"
          className={
            "w-[24px] h-[28px] tablet:h-[15.06px] tablet:w-[15.06px] mobile:w-[21.35px] mobile:h-[21.35px]"
          }
        />
        <span
          className={`  w-[30px] h-[28px] font-poppins font-medium  text-[#141416]  desktop:text-[20.23px] desktop:leading-[30.35px]`}
        >
          {price}
        </span>
      </figure>
    </div>
  );
};
ItemProduct.propTypes = { item: shape(CardNftTrendProps) };

export default ItemProduct;
