const NftButtons = () => {
  return (
    <div className="flex justify-between  mobile:w-full laptop:w-[350px] laptop:mt-[2rem] tablet:w-[241.8px] tablet:mt-[1.5rem] mobile:mt-[1rem]">
      <button
        className={`rounded-[12.41px] sizeLaptopExploreBtn sizeTabletExploreBtn font-poppins text-white font-medium sizeLaptopTextNftBtns sizeTabletTextNftBtns`}
      >
        EXPLORE MORE
      </button>{" "}
      <button
        className={`bg-white border-black border-solid sizeLaptopNftBtn sizeTabletNftBtn font-poppins text-black font-medium tracking-[1%] sizeLaptopTextNftBtns sizeTabletTextNftBtns`}
      >
        CREATE NFT
      </button>
    </div>
  );
};

export default NftButtons;
