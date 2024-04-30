import whiteArrowRight from "../../../assets/whiteArrowRight.svg";
const Unleash = () => {
  return (
    <div className="w-[90%]">
      <hr />
      <div className="flex  desktop:mt-[4rem] laptop:mt-[4rem]">
        <section>
          <h2 className="font-poppins font-semibold unleashTitleLaptop ">
            <span className="text-[#ACADB9] block">Just Unleash -</span>
            <span className="text-[#141416]">Your Inner Collector</span>{" "}
          </h2>
          <ul
            className={` list-image-marker font-poppins font-normal unleashListItemLaptop`}
          >
            <li>Best Seller All Around World</li>
            <li>$2M+ Transections Every Day</li>
            <li>Secure Transactions</li>
            <li>Exclusive Collections From Sellers</li>
            <li>Easy Buying and Selling</li>
            <li>Join Our Community</li>
          </ul>
          <div className="flex mt-[2rem]">
            <button className="flex justify-between items-center bg-black laptop:rounded-[8.53px] laptop:w-[130px] laptop:h-[41.96px]">
              <span className=" text-white laptop:text-[10.5px] laptop:leading-[13.12px] font-poppins font-medium">
                Explore More
              </span>
              <img src={whiteArrowRight} alt="explore more arrow" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Unleash;
