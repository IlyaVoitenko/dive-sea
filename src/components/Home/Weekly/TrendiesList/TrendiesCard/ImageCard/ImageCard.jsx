import pink from "../../../../../../assets/pink.svg";

import { imgCardDesktop } from "../stylesAdaptive";
const ImageCard = () => {
  return (
    <figure className="relative">
      <div className="flex items-center  justify-center w-[116.58px] h-[37.64px] rounded-[9.41px] border-[1.18px] bg-[#1C1D2059] border-[#1C1D2014]  absolute top-[3%] left-[50%] backdrop-opacity-10">
        <span className="text-white font-poppins font-medium text-[14.12px] leading-[21.17px] tracking-[0.12px]">
          07h 09m 12s
        </span>
      </div>
      <img alt="pink" src={pink} className={`static ${imgCardDesktop}`} />
    </figure>
  );
};

export default ImageCard;
