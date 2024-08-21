import { useState } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import FollowAndStatistics from "./FollowAndStatistics";
import BioAndNetworks from "./BioAndNetworks";
import CardsList from "../Common/CardsList";
import Activity from "./Activity";
import BtnsFilter from "./BtnsFilter";
import { arrayCardsSelector } from "../../../store/selectors";
import InfiniteScrollHoc from "../../hooks/InfiniteScrollHoc";

import BackgroundCreator from "../../assets/testBack.svg";
import creatorAvatar from "../../assets/creatorImg.svg";
import successIcon from "../../assets/successIcon.svg";
const Creator = () => {
  const [isFilterActive, setIsFilterActive] = useState(true);

  return (
    <div className="containerPage">
      <Header />
      <section className="h-full   desktop:mt-[5rem] laptop:mt-[4rem] tablet:mt-[1rem] mobile:mt-[3rem]">
        <div className="relative  flex justify-center items-center ">
          <figure className="w-[90%] mobile:w-full">
            <img
              src={BackgroundCreator}
              alt="background img"
              className=" w-full desktop:h-[355px] laptop:h-[355px] mobile:h-[269.39px] shadow-backgroundCreator"
            />
          </figure>
          <div className="absolute top-[80%] left-[10%] mobile:left-[15%]">
            <figure>
              <img
                src={creatorAvatar}
                className=" desktop:w-[165px] desktop:h-[165px] laptop:w-[117.35px] laptop:h-[117.35px] tablet:w-[117.35px] tablet:h-[117.35px] mobile:w-[125.21px] mobile:h-[125.21px]"
                alt="creator avatar"
              />
            </figure>
            <figure>
              <img
                src={successIcon}
                className="absolute top-[78%] left-[72%] desktop:w-[29px] desktop:h-[29px] laptop:w-[20.62px] laptop:h-[20.62px]  tablet:w-[20.62px] tablet:h-[20.62px] mobile:w-[22.01px] mobile:h-[22.01px]"
                alt="success icon avatar img"
              />
            </figure>
          </div>
        </div>
        <div className="flex mobile:flex-col justify-end  mobile:items-center w-full  ">
          <div className="flex flex-col justify-between  desktop:w-[367.21px] desktop:h-[700px] laptop:w-[261.06px] laptop:h-[500px] tablet:w-[240px] tablet:h-[500px] mobile:w-[278.5px] mobile:h-[600px] ">
            <FollowAndStatistics />
            <BioAndNetworks />
          </div>
          <div className=" flex flex-col justify-between items-end mobile:items-center w-[64%] mobile:w-full">
            <div className=" flex flex-col justify-center items-center w-[90%] mobile:w-full ">
              <BtnsFilter
                isFilterActive={isFilterActive}
                setIsFilterActive={setIsFilterActive}
              />
              {isFilterActive ? (
                <InfiniteScrollHoc
                  Component={CardsList}
                  defaultList={arrayCardsSelector}
                  isCreatorPage={true}
                />
              ) : (
                <Activity />
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Creator;
