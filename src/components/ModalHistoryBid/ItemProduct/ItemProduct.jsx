import successIcon from "../../../assets/successIcon.svg";
import cardMark from "../../../assets/cardMark.svg";
import { CardNftTrendProps } from "../../../props";
import { shape } from "prop-types";
const ItemProduct = ({ item }) => {
  const { img, name, time, price } = item;
  return (
    <div className="flex justify-between items-center w-full  bg-white desktop:h-[100.38px] laptop:h-[71.39px] tablet:h-[71.39px] desktop:rounded-[11.25px] laptop:rounded-[8px] tablet:rounded-[8px] pl-[5%] pr-[5%] hover:shadow-itemBid shadow-itemUnhoverBid">
      <div className="flex">
        <div className="relative flex justify-center items-center">
          <figure>
            <img
              src={img}
              alt="avatar user"
              className="border-[1.92px] rounded-full w-[46.09px] h-[46.09px] desktop:w-[63.67px] desktop:h-[63.67px] mobile:w-[23.3px] mobile:h-[23.3px] tablet:h-[40px] tablet:w-[40px]"
            />
          </figure>
          <img
            src={successIcon}
            alt="success"
            className="flex justify-center items-center text-white  desktop:w-[20.77px] desktop:h-[20.77px]  mobile:w-[9.99px] mobile:h-[9.99px] tablet:w-[15px] tablet:h-[15px] bg-[#141416] rounded-full  top-[5%] left-[70%] absolute  "
          />
        </div>
        <div className="flex flex-col  justify-around ml-4">
          <span className="text-[#141416] font-poppins text-[16.88px] laptop:text-[12.01px] tablet:text-[11px] mobile:text-[5.83px] font-medium leading-[25.88px] laptop:leading-[18.41px] mobile:leading-[9.99px]">
            {name}
          </span>
          <span className="text-[#64748B] font-poppins text-[14.63px] laptop:text-[10.4px] tablet:text-[9px] mobile:text-[4.99px] font-normal leading-[18.01px] laptop:leading-[12.81px] mobile:leading-[8.32px]">
            {time}
          </span>
        </div>
      </div>

      <figure className="flex justify-center items-center w-[30%]">
        <img
          src={cardMark}
          alt="card mark"
          className={
            "w-[24px] h-[28px] laptop:w-[15px] laptop:h-[15.13px] tablet:h-[15.06px] tablet:w-[15.06px] mobile:w-[21.35px] mobile:h-[21.35px]"
          }
        />
        <span
          className={`  w-[30px] h-[28px] laptop:h-[20px] tablet:h-[23px] font-poppins font-medium  text-[#141416]  desktop:text-[20.23px] desktop:leading-[30.35px] laptop:text-[14.39px] laptop:leading-[21.59px]`}
        >
          {price}
        </span>
      </figure>
    </div>
  );
};
ItemProduct.propTypes = { item: shape(CardNftTrendProps) };

export default ItemProduct;
