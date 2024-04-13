const NftTitleAndImages = () => {
  const featuresList = [
    { title: "430K+", subtitle: "Art Works" },
    { title: "159K+", subtitle: "Creators" },
    { title: "87K+", subtitle: "Collections" },
  ];
  return (
    <div className="flex flex-col">
      <div className="w-[567px] flex flex-col mt-[5rem] ">
        <hr className=" laptop:w-[195px] tablet:w-[138.68px] bg-[#201F1F] border-[0.71px] " />
        <h1 className="text-[75px] leading-[90px] font-poppins font-semibold text-[#141416] tracking-[-3px]">
          Discover And Create NFTs
        </h1>
        <h5 className="font-inter text-gray-400 text-justify text-[18px] leading-[28px] font-normal laptop:w-[499px] laptop:mt-3">
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over
          Thousands Of NFTs And Get a{" "}
          <span className="font-inter font-semibold text-black text-[18px] leading-[28px] text-justify">
            $20 bonus.
          </span>
        </h5>
        <div className=" flex justify-between laptop:w-[340px] laptop:mt-[2rem]">
          <button className="rounded-[12.41px] laptop:w-[179px] laptop:h-[60px]">
            Explore More
          </button>{" "}
          <button className="bg-white border-black border-solid  laptop:rounded-[12.41px] laptop:border-[1.5px] laptop:w-[138px] laptop:h-[60px] ">
            <span className=" font-poppins text-black laptop:w-[96px] laptop:h-[24px] laptop:text-[16.27px] font-medium laptop:leading-[24.41px] tracking-[1%]">
              CREATE NFT
            </span>
          </button>
        </div>
      </div>
      <div className="flex flow-row justify-between laptop:mt-[3.75rem]  laptop:w-[452.96px]">
        {featuresList.map((item, index) => (
          <div key={index}>
            <span className="text-[#141416] text-[36.77px] font-public font-semibold leading-[45.96px]">
              {item.title}
            </span>
            <br></br>
            <span className="text-[#848586] font-inter font-medium laptop:leading-[18.39px] laptop:text-[12.26px]">
              {item.subtitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NftTitleAndImages;
