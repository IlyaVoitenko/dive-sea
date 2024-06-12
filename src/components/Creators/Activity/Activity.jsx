import { useState } from "react";
import { arrayCardsSelector } from "../../../store/selectors";
import { fetchLoadingItems } from "../../../helper";
import { useSelector } from "react-redux";

import shop from "../../../assets/shop.svg";
import chains from "../../../assets/chains.svg";
import vectorDark from "../../../assets/VectorDark.svg";

import InfiniteScroll from "react-infinite-scroll-component";
import SpinnerLoader from "../../Common/SpinnerLoader";
import ActivityCard from "./ActivityCard";

const LIMIT_ITEMS = 2;
const Activity = () => {
  const cardsList = useSelector(arrayCardsSelector);

  const [postData, setPostData] = useState(cardsList.slice(0, LIMIT_ITEMS));
  const [visible, setVisible] = useState(LIMIT_ITEMS);
  const [hasMore, setHasMore] = useState(true);
  return (
    <>
      <div className="flex justify-between w-[663px] mt-[5rem] ">
        <button className="btnsActivityCreatorPage">
          <img
            className="desktop:w-[21.28px] desktop:h-[21.28px]"
            src={shop}
            alt="shop"
          />{" "}
          &nbsp; Sales&nbsp;{" "}
          <img
            className="desktop:w-[15px] desktop:h-[15px]"
            src={vectorDark}
            alt="vector dark"
          />
        </button>
        <button className="btnsActivityCreatorPage">
          <img
            className="desktop:w-[21.28px] desktop:h-[21.28px]"
            src={chains}
            alt="chains"
          />{" "}
          &nbsp; All Chains&nbsp;{" "}
          <img
            className="desktop:w-[15px] desktop:h-[15px]"
            src={vectorDark}
            alt="vector dark"
          />
        </button>{" "}
      </div>
      <InfiniteScroll
        dataLength={postData.length}
        next={() =>
          fetchLoadingItems(
            cardsList,
            postData,
            setHasMore,
            setVisible,
            visible,
            setPostData,
            LIMIT_ITEMS
          )
        }
        hasMore={hasMore}
        loader={<SpinnerLoader />}
      >
        <div className={`flex  flex-wrap  "desktop:gap-[27px] justify-center `}>
          {postData && postData.map((card) => <ActivityCard key={card.id} />)}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Activity;
