import cardOrangeImg from "../../../../assets/cardOrangeImg.svg";
import successIcon from "../../../../assets/successIcon.svg";
import vector from "../../../../assets/VectorDark.svg";
import cardMark from "../../../../assets/cardMark.svg";

const ActivityCard = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF] flex flex-col justify-evenly items-center shadow-activityCardItem mt-[5rem] desktop:rounded-[12.13px] desktop:w-[674.06px] desktop:h-[175.53px]">
        <div className="flex items-center justify-between  w-full pl-[1rem] pr-[1rem]">
          <div className="flex justify-between w-[150px]">
            <figure>
              <img
                src={cardOrangeImg}
                className="desktop:w-[64.31px] desktop:h-[67.95px] desktop:rounded-[12.13px]"
                alt="img card"
              />
            </figure>
            <div className="flex flex-col justify-center">
              <span className="text-[#000000] font-[600] font-poppins desktop:text-[16.99px] desktop:leading-[26.7px]">
                NeuVey
              </span>
              <div className="flex">
                <span className="text-[#000000] font-[400] font-poppins desktop:text-[12.08px] desktop:leading-[18.12px]">
                  JenifferS
                </span>
                &nbsp;
                <figure>
                  <img src={successIcon} alt="success" />
                </figure>
              </div>
            </div>
          </div>
          <div className="flex justify-around w-[150px]">
            <div className="flex flex-col items-end">
              <span className="font-poppins text-end font-[400] text-[#14A760] desktop:text-[12.08px] desktop:leading-[18.12px]">
                Sale
              </span>
              <div className=" flex  items-end justify-between w-[52.32px]">
                <figure>
                  <img src={cardMark} alt="mark" className="h-[30px]" />
                </figure>
                <span className="font-poppins text-end font-[500] text-[#000000] desktop:text-[16.04px] desktop:leading-[24.06px]">
                  16,4
                </span>
              </div>
              <span className="font-poppins font-[400] text-[#D2D2D2] desktop:text-[12.08px] desktop:leading-[18.12px]">
                6 Minutes ago
              </span>
            </div>
            <div className="pt-[10%]">
              <figure>
                <img src={vector} alt="vector" />
              </figure>
            </div>
          </div>
        </div>
        <hr className="border-[#D2D2D2] desktop:w-[625.25px]" />
        <div className="flex justify-between w-full pl-[1.5rem] pr-[1.5rem]">
          <div className="flex flex-col items-center">
            <span className="text-[#828282] font-[400] font-poppins desktop:text-[11.37px] desktop:leading-[13.99px]">
              USD Price
            </span>
            <span className="text-[#000000] font-[500] font-poppins desktop:text-[15.74px] desktop:leading-[22.74px]">
              $19K
            </span>
          </div>
          <div className="flex flex-col  items-center">
            <span className="text-[#828282] font-[400] font-poppins desktop:text-[11.37px] desktop:leading-[13.99px]">
              Quantity
            </span>
            <span className="text-[#000000] font-[500] font-poppins desktop:text-[15.74px] desktop:leading-[22.74px]">
              14.9K
            </span>
          </div>
          <div className="flex flex-col  items-center">
            <span className="text-[#828282] font-[400] font-poppins desktop:text-[11.37px] desktop:leading-[13.99px]">
              floor price
            </span>
            <div className="flex">
              <figure>
                <img src={cardMark} alt="mark" />
              </figure>
              <span className="text-[#000000] font-[500] font-poppins desktop:text-[15.74px] desktop:leading-[22.74px]">
                16,4
              </span>
            </div>
          </div>
          <div className="flex flex-col  items-center">
            <span className="text-[#828282] font-[400] font-poppins desktop:text-[11.37px] desktop:leading-[13.99px]">
              traded{" "}
            </span>
            <div className="flex">
              <figure>
                <img src={cardMark} alt="mark" />
              </figure>
              <span className="text-[#000000] font-[500] font-poppins desktop:text-[15.74px] desktop:leading-[22.74px]">
                26,4{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
