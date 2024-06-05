import { useState } from "react";
import { arrayCardsSelector } from "../../../store/selectors";
import { fetchLoadingItems } from "../../../helper";
import { useSelector } from "react-redux";

import shop from "../../../assets/shop.svg";
import chains from "../../../assets/chains.svg";
import vectorDark from "../../../assets/VectorDark.svg";

import InfiniteScroll from "react-infinite-scroll-component";
import SpinnerLoader from "../../Common/SpinnerLoader";
const LIMIT_ITEMS = 2;
const Activity = () => {
  const cardsList = useSelector(arrayCardsSelector);

  const [postData, setPostData] = useState(cardsList.slice(0, LIMIT_ITEMS));
  const [visible, setVisible] = useState(LIMIT_ITEMS);
  const [hasMore, setHasMore] = useState(true);
  return (
    <div>
      <div className="flex justify-between w-[90%] mt-[5rem]">
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
            setPostData
          )
        }
        hasMore={hasMore}
        loader={<SpinnerLoader />}
      >
        <div className={`flex  flex-wrap  "desktop:gap-[27px] justify-start`}>
          {cardsList &&
            cardsList.map((card) => (
              <div key={card.id}>
                <div className="bg-[#FFFFFF] ml-[1%] shadow-activityCardItem mt-[5rem] desktop:rounded-[12.13px] desktop:w-[674.06px] desktop:h-[175.53px]"></div>
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Activity;

// <div>
{
  /* 
}

{
  /* </div> */
}
