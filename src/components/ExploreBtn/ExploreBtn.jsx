import exploreRightArrow from "../../assets/ExploreRightArrow.svg";
const ExploreBtn = () => {
  return (
    <div className="flex  justify-end mobile:justify-center w-[90%] mobile:w-full ">
      <button className="bg-white flex justify-between items-center">
        <span className="font-poppins font-medium laptop:text-[17.67px] text-[#ACADB9] laptop:leading-[39.92px] tracking-[-0.09px]">
          Explore All
        </span>{" "}
        <img
          src={exploreRightArrow}
          className="fill-[#ACADB9] text-[#ACADB9]"
        />
      </button>
    </div>
  );
};

export default ExploreBtn;
