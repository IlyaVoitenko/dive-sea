const NftButtons = () => {
  return (
    <div className="flex justify-between nftButtonsPositions">
      <button
        className={`rounded-[12.41px] sizeDesktopExploreBtn sizeLaptopExploreBtn sizeTabletExploreBtn font-poppins text-white font-medium sizeDesktopTextNftBtns sizeLaptopTextNftBtns sizeTabletTextNftBtns mobile:p-2`}
      >
        EXPLORE MORE
      </button>{" "}
      <button
        className={`bg-white rounded-[12.41px] border-black border-solid sizeLaptopNftBtn sizeTabletNftBtn font-poppins text-black font-medium tracking-[1%] sizeDesktopTextNftBtns sizeLaptopTextNftBtns sizeTabletTextNftBtns mobile:p-2`}
      >
        CREATE NFT
      </button>
    </div>
  );
};

export default NftButtons;
