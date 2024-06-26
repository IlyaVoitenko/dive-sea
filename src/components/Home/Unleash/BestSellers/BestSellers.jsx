import dots from "../../../../assets/dotsVertical.svg";
import { users } from "./constants.js";
import BestSellersListItem from "./BestSellersList";
const BestSellers = () => {
  return (
    <section className="bg-white drop-shadow-2xl rounded-[10.04px] z-[1] absolute flex items-center flex-col  bestSellersPositions bestSellersSizes ">
      <div className="flex mt-5 mobile:mt-[0.4rem] justify-between w-[90%] items-center font-poppins  text-[#1A202C] text-[13.18px] desktop:text-[18.53px] mobile:text-[8.86px] tracking-[0.13px] desktop:tracking-[0.18px] leading-[17.79px] desktop:leading-[25.02px] font-semibold">
        <h2>Best Sellers</h2>
        <img src={dots} alt="dots" />
      </div>
      <section className="flex flex-col justify-between items-center mt-5 mobile:mt-[0.5rem] w-[90%]  h-[80%] ">
        {users.map((user, index) => (
          <BestSellersListItem key={user.id} user={user} index={++index} />
        ))}
      </section>
    </section>
  );
};

export default BestSellers;
