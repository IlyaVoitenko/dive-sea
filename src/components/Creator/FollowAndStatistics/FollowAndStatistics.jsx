const FollowAndStatistics = () => {
  return (
    <div className="flex flex-col justify-between  h-[50%]">
      <div className="flex justify-between desktop:w-[367px] laptop:w-[261.06px] mobile:w-[278.5px] desktop:h-[72px] desktop:mt-[8rem] laptop:mt-[5rem] tablet:mt-[5rem] mobile:mt-[7rem]">
        <div className="flex flex-col justify-between desktop:h-[72px] laptop:h-[51.85px]">
          <span className=" text-[#010101] font-outfit font-[600] desktop:text-[35px] desktop:leading-[45.5px] laptop:text-[24.89px] laptop:leading-[32.36px] tablet:text-[20px] tablet:leading-[32.36px] mobile:text-[26.56px] mobile:leading-[34.53px] tracking-[1%]">
            Harry K.
          </span>
          <span className=" text-[#93989A] font-outfit font-[400] desktop:text-[18px] desktop:leading-[23.4px] laptop:text-[12.8px] laptop:leading-[16.64px]  tracking-[1%]">
            @Harryknft
          </span>
        </div>
        <button className="font-poppins font-[500] tracking-[1%] desktop:w-[123px]  desktop:text-[14.8px]  desktop:leading-[22.2px]  desktop:h-[46.4px] desktop:rounded-[11.29px] laptop:w-[86.05px] laptop:h-[33px] laptop:text-[10.53px]  laptop:leading-[15.79px] laptop:rounded-[8.03px] tablet:w-[86.05px] tablet:h-[33px] tablet:text-[10.53px]  tablet:leading-[15.79px] tablet:rounded-[8.03px] mobile:w-[91.82px] mobile:h-[35.21px] mobile:text-[11.23px]  mobile:leading-[16.85px] mobile:rounded-[8.57px]  uppercase">
          Follow +
        </button>
      </div>
      <hr className="text-[#D0D0D0] desktop:w-[363px]  rounded-[1.06px] border-[#D0D0D0]" />
      <div className=" flex justify-between ">
        <div className="flex flex-col justify-between  desktop:h-[62.4px] laptop:h-[44.29px] tablet:h-[44.29px]">
          <span className="text-[#141416] font-public font-[600] desktop:text-[32.15px] desktop:leading-[40.19px] laptop:text-[22.87px] laptop:leading-[28.58px] tablet:text-[22.87px] tablet:leading-[28.58px] mobile:text-[24.4px] mobile:leading-[30.5px]">
            86 ETH
          </span>
          <span className="text-[#848586] font-inter font-[500] desktop:text-[10.72px] desktop:leading-[16.08px] laptop:text-[7.62px] laptop:leading-[11.43px]  tablet:text-[7.62px] tablet:leading-[11.43px] mobile:text-[8.13px] mobile:leading-[12.2px]">
            Total Sales
          </span>
        </div>
        <div className="flex flex-col justify-between">
          <span className="text-[#141416] font-public font-[600] desktop:text-[32.15px] desktop:leading-[40.19px] laptop:text-[22.87px] laptop:leading-[28.58px] tablet:text-[22.87px] tablet:leading-[28.58px] mobile:text-[24.4px] mobile:leading-[30.5px]">
            12K
          </span>
          <span className="text-[#848586] font-inter font-[500] desktop:text-[10.72px] desktop:leading-[16.08px] laptop:text-[7.62px] laptop:leading-[11.43px] tablet:text-[7.62px] tablet:leading-[11.43px] mobile:text-[8.13px] mobile:leading-[12.2px]">
            Followers
          </span>
        </div>
        <div className="flex flex-col justify-between">
          <span className="text-[#141416] font-public font-[600] desktop:text-[32.15px] desktop:leading-[40.19px] laptop:text-[22.87px] laptop:leading-[28.58px] tablet:text-[22.87px] tablet:leading-[28.58px] mobile:text-[24.4px] mobile:leading-[30.5px]">
            587
          </span>
          <span className="text-[#848586] font-inter font-[500] desktop:text-[10.72px] desktop:leading-[16.08px] laptop:text-[7.62px] laptop:leading-[11.43px] tablet:text-[7.62px] tablet:leading-[11.43px]  mobile:text-[8.13px] mobile:leading-[12.2px]">
            Followings
          </span>
        </div>
      </div>
    </div>
  );
};

export default FollowAndStatistics;
