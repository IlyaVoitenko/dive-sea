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
  const [hasMore, setHasMore] = useState(false);
  return (
    <>
      <div className="flex justify-between desktop:w-[663px] laptop:w-[479.27px] tablet:w-[360px] mobile:w-[309.07px] mt-[5rem] ">
        <button className="btnsActivityCreatorPage">
          <img className="imgActivityBtnCreatorPage" src={shop} alt="shop" />
          &nbsp;&nbsp; Sales&nbsp;&nbsp;
          <img
            className="imgVectorCreatorPage"
            src={vectorDark}
            alt="vector dark"
          />
        </button>
        <button className="btnsActivityCreatorPage">
          <img
            className="imgActivityBtnCreatorPage"
            src={chains}
            alt="chains"
          />
          &nbsp;&nbsp; All Chains&nbsp; &nbsp;
          <img
            className="imgVectorCreatorPage"
            src={vectorDark}
            alt="vector dark"
          />
        </button>
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
