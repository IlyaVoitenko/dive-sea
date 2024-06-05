import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { arrayCardsSelector } from "../../../store/selectors";
import { LIMIT_ITEMS, fetchLoadingItems } from "../../../helper";

import CardsList from "../../Common/CardsList";
import SpinnerLoader from "../../Common/SpinnerLoader";
const Collection = () => {
  const cardsList = useSelector(arrayCardsSelector);

  const [postData, setPostData] = useState(cardsList.slice(0, LIMIT_ITEMS));
  const [visible, setVisible] = useState(LIMIT_ITEMS);
  const [hasMore, setHasMore] = useState(true);
  return (
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
  );
};

export default Collection;
