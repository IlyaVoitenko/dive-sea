const FollowAndStatistics = () => {
  return (
    <div className="flex flex-col justify-between  h-[50%]">
      <div className="flex justify-between desktop:w-[367px] desktop:h-[72px] desktop:mt-[8rem]">
        <div className="flex flex-col justify-between h-[72px]">
          <span className=" text-[#010101] font-outfit font-[600] desktop:text-[35px] desktop:leading-[45.5px] tracking-[1%]">
            Harry K.
          </span>
          <span className=" text-[#93989A] font-outfit font-[400] desktop:text-[18px] desktop:leading-[23.4px] tracking-[1%]">
            @Harryknft
          </span>
        </div>
        <button className="font-poppins desktop:text-[14.8px]  desktop:leading-[22.2px] font-[500] tracking-[1%] desktop:w-[123px]  desktop:h-[46.4px] desktop:rounded-[11.29px] uppercase">
          Follow +
        </button>
      </div>
      <hr className="text-[#D0D0D0] desktop:w-[363px]  rounded-[1.06px] border-[#D0D0D0]" />
      <div className=" flex justify-between ">
        <div className="flex flex-col justify-between  desktop:h-[62.4px]">
          <span className="text-[#141416] font-public font-[600] desktop:text-[32.15px] desktop:leading-[40.19px]">
            86 ETH
          </span>
          <span className="text-[#848586] font-inter font-[500] desktop:text-[10.72px] desktop:leading-[16.08px]">
            Total Sales
          </span>
        </div>
        <div className="flex flex-col justify-between">
          <span className="text-[#141416] font-public font-[600] desktop:text-[32.15px] desktop:leading-[40.19px]">
            12K
          </span>
          <span className="text-[#848586] font-inter font-[500] desktop:text-[10.72px] desktop:leading-[16.08px]">
            Followers
          </span>
        </div>
        <div className="flex flex-col justify-between">
          <span className="text-[#141416] font-public font-[600] desktop:text-[32.15px] desktop:leading-[40.19px]">
            587
          </span>
          <span className="text-[#848586] font-inter font-[500] desktop:text-[10.72px] desktop:leading-[16.08px]">
            Followings
          </span>
        </div>
      </div>
    </div>
  );
};

export default FollowAndStatistics;
