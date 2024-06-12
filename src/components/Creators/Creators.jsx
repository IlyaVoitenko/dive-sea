import { useState } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import FollowAndStatistics from "./FollowAndStatistics";
import BioAndNetworks from "./BioAndNetworks";
import Collection from "./Collection";
import Activity from "./Activity";
import BtnsFilter from "./BtnsFilter";

import BackgroundCreator from "../../assets/testBack.svg";
import creatorAvatar from "../../assets/creatorImg.svg";
const Creators = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);

  return (
    <div className="containerPage">
      <Header />
      <section className="h-full   desktop:mt-[5rem]">
        <div className="relative  flex justify-center items-center ">
          <figure className="w-[90%]">
            <img
              src={BackgroundCreator}
              alt="background img"
              className=" w-full desktop:h-[355px] shadow-backgroundCreator"
            />
          </figure>
          <figure>
            <img
              src={creatorAvatar}
              className="absolute top-[80%] left-[10%] desktop:w-[165px] desktop:h-[165px]"
              alt="creator avatar"
            />
          </figure>
        </div>
        <div className="flex mobile:flex-col justify-end   w-full ">
          <div className="flex flex-col justify-between  desktop:w-[367.21px] desktop:h-[700px] ">
            <FollowAndStatistics />
            <BioAndNetworks />
          </div>
          <div className=" flex flex-col justify-between items-end w-[64%]">
            <div className=" flex flex-col justify-center items-center w-[90%]">
              <BtnsFilter
                isFilterActive={isFilterActive}
                setIsFilterActive={setIsFilterActive}
              />
              {isFilterActive ? <Collection /> : <Activity />}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Creators;
