import { useState } from "react";
import { useSelector } from "react-redux";
import { arrayCardsSelector } from "../../store/selectors";
import { LIMIT_ITEMS, fetchLoadingItems } from "../../helper";

import InfiniteScroll from "react-infinite-scroll-component";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import FollowAndStatistics from "./FollowAndStatistics";
import BioAndNetworks from "./BioAndNetworks";
import CardsList from "../Common/CardsList";
import SpinnerLoader from "../Common/SpinnerLoader";
import BtnsFilter from "./BtnsFilter";

import BackgroundCreator from "../../assets/testBack.svg";
import creatorAvatar from "../../assets/creatorImg.svg";
const Creators = () => {
  const cardsList = useSelector(arrayCardsSelector);
  const [postData, setPostData] = useState(cardsList.slice(0, LIMIT_ITEMS));
  const [visible, setVisible] = useState(LIMIT_ITEMS);
  const [hasMore, setHasMore] = useState(true);

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
        <div className="flex mobile:flex-col justify-end   w-full">
          <div className="flex flex-col justify-between  desktop:w-[367.21px] desktop:h-[700px]">
            <FollowAndStatistics />
            <BioAndNetworks />
          </div>
          <div className=" flex flex-col justify-between items-end w-[64%]    ">
            <div className=" flex  flex-col justify-center items-start w-[80%]   ">
              <BtnsFilter />
              <InfiniteScroll
                dataLength={postData.length}
                next={() =>
                  fetchLoadingItems(
                    cardsList,
                    postData,
                    setHasMore,
                    setVisible,
                    visible,
                    setPostData
                  )
                }
                hasMore={hasMore}
                loader={<SpinnerLoader />}
              >
                <CardsList list={postData} isCreatorPage={true} />
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Creators;
