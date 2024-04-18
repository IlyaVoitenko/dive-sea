import TrendiesList from "./TrendiesList";
const Weekly = () => {
  return (
    <div className=" flex flex-col justify-center items-center bg-[#F1F1F1] w-screen laptop:h-[989px] desktop:mt-[4rem]">
      <h2 className="font-poppins text-[#C5C5C5] font-semibold laptop:text-[45px] desktop:text-[45px] laptop:leading-[26.92px] laptop:mt-[5rem]">
        Weekly - Top NFT
      </h2>
      <TrendiesList />
    </div>
  );
};

export default Weekly;
