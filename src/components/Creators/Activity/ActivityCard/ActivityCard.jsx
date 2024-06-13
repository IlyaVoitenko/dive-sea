import cardOrangeImg from "../../../../assets/cardOrangeImg.svg";
import successIcon from "../../../../assets/successIcon.svg";
import vector from "../../../../assets/VectorDark.svg";
import cardMark from "../../../../assets/cardMark.svg";

const ActivityCard = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF] flex flex-col justify-evenly items-center shadow-activityCardItem mt-[5rem] desktop:rounded-[12.13px] desktop:w-[674.06px] desktop:h-[175.53px] laptop:rounded-[8.63px] laptop:w-[479.38px] laptop:h-[124.83px] tablet:rounded-[8.63px] tablet:w-[360px] tablet:h-[124.83px] mobile:h-[149px] mobile:w-[314px] mobile:rounded-[9.63px]">
        <div className="flex items-center justify-between  w-full pl-[1rem] pr-[1rem]">
          <div className="flex justify-between w-[150px] laptop:w-[110px] tablet:w-[110px] mobile:w-[120px]">
            <figure>
              <img
                src={cardOrangeImg}
                className="desktop:w-[64.31px] desktop:h-[67.95px] desktop:rounded-[12.13px] laptop:w-[45.74px] laptop:h-[48.33px] laptop:rounded-[8.63px] tablet:w-[45.74px] tablet:h-[48.33px] tablet:rounded-[8.63px]  mobile:w-[51.05px] mobile:h-[53.94px] mobile:rounded-[9.63px]"
                alt="img card"
              />
            </figure>
            <div className="flex flex-col justify-center">
              <span className="text-[#000000] font-[600] font-poppins desktop:text-[16.99px] desktop:leading-[26.7px] laptop:text-[12.08px] laptop:leading-[18.99px]  tablet:text-[12.08px] tablet:leading-[18.99px]  mobile:text-[13.48px] mobile:leading-[21.19px]">
                NeuVey
              </span>
              <div className="flex items-center">
                <span className="text-[#000000] font-[400] font-poppins desktop:text-[12.08px] desktop:leading-[18.12px] laptop:text-[8.59px] laptop:leading-[12.89px] tablet:text-[8.59px] tablet:leading-[12.89px] mobile:text-[9.59px] mobile:leading-[14.38px]">
                  JenifferS
                </span>
                &nbsp;
                <figure>
                  <img
                    src={successIcon}
                    className="laptop:w-[8.84px] laptop:h-[9.54px] tablet:w-[8.84px] tablet:h-[9.54px] mobile:w-[9.87px] mobile:h-[10.64px]"
                    alt="success"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="flex justify-around mobile:justify-between w-[150px] laptop:w-[110px] tablet:w-[110px]  mobile:w-[95px]">
            <div className="flex flex-col items-end">
              <span className="font-poppins text-end font-[400] text-[#14A760] desktop:text-[12.08px] desktop:leading-[18.12px] laptop:text-[8.59px] laptop:leading-[12.89px] tablet:text-[8.59px] tablet:leading-[12.89px] mobile:text-[9.59px] mobile:leading-[14.38px]">
                Sale
              </span>
              <div className=" flex  items-end justify-between w-[52.32px] laptop:w-[35px] tablet:w-[35px] mobile:w-[41.53px] mobile:h-[19px]">
                <figure>
                  <img
                    src={cardMark}
                    alt="mark"
                    className="h-[30px] laptop:h-[18px] laptop:w-[15px] tablet:h-[18px] tablet:w-[15px] mobile:h-[22px] mobile:w-[15px]"
                  />
                </figure>
                <span className="font-poppins text-end font-[500] text-[#000000] desktop:text-[16.04px] desktop:leading-[24.06px] laptop:text-[11.41px] laptop:leading-[17.11px] tablet:text-[11.41px] tablet:leading-[17.11px] mobile:text-[12.73px] mobile:leading-[19.09px]">
                  16,4
                </span>
              </div>
              <span className="font-poppins font-[400] text-[#D2D2D2] desktop:text-[12.08px] desktop:leading-[18.12px] laptop:text-[8.59px] laptop:leading-[12.89px] tablet:text-[8.59px] tablet:leading-[12.89px] mobile:text-[9.59px] mobile:leading-[14.38px]">
                6 Minutes ago
              </span>
            </div>
            <div className="desktop:pt-[12%] laptop:pt-[12%] tablet:pt-[12%] mobile:pt-[20%]">
              <figure>
                <img
                  src={vector}
                  className="desktop:w-[12px] desktop:h-[6px] laptop:w-[12px] laptop:h-[10px] mobile:w-[10px] mobile:h-[10px]"
                  alt="vector"
                />
              </figure>
            </div>
          </div>
        </div>
        <hr className="border-[#D2D2D2] desktop:w-[625.25px] laptop:w-[444.66px] tablet:w-[320px] mobile:w-[281.25px]" />
        <div className="flex justify-between w-full pl-[1.5rem] pr-[1.5rem] tablet:pl-[1.3rem] tablet:pr-[1.3rem]">
          <div className="flex flex-col items-center">
            <span className="priceTitleActivityCartCreatorPage">USD Price</span>
            <span className="priceActivityCartCreatorPage">$19K</span>
          </div>
          <div className="flex flex-col  items-center">
            <span className="priceTitleActivityCartCreatorPage">Quantity</span>
            <span className="priceActivityCartCreatorPage">14.9K</span>
          </div>
          <div className="flex flex-col  items-center">
            <span className="priceTitleActivityCartCreatorPage">
              floor price
            </span>
            <div className="flex justify-center items-center">
              <figure>
                <img
                  src={cardMark}
                  className="imgMarkPriceCreatorPage"
                  alt="mark"
                />
              </figure>
              <span className="priceActivityCartCreatorPage">16,4</span>
            </div>
          </div>
          <div className="flex flex-col  items-center">
            <span className="priceTitleActivityCartCreatorPage">traded </span>
            <div className="flex justify-center items-center">
              <figure>
                <img
                  src={cardMark}
                  className="imgMarkPriceCreatorPage"
                  alt="mark"
                />
              </figure>
              <span className="priceActivityCartCreatorPage">26,4 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
