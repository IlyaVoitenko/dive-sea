import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { fetchLoadingItems } from "../../helper";
import SpinnerLoader from "../../components/Common/SpinnerLoader";
import { func, number, elementType, bool } from "prop-types";
const InfiniteScrollHoc = ({
  Component,
  defaultList,
  LIMIT_ITEMS = 12,
  isCreatorPage = false,
  isStatPage = false,
}) => {
  const listScroll = useSelector(defaultList);
  const [postData, setPostData] = useState(listScroll.slice(0, LIMIT_ITEMS));
  const [visible, setVisible] = useState(LIMIT_ITEMS);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setPostData(listScroll.slice(0, LIMIT_ITEMS), [listScroll]);
  }, [LIMIT_ITEMS, listScroll]);

  return (
    <InfiniteScroll
      dataLength={postData.length}
      next={() =>
        fetchLoadingItems(
          listScroll,
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
      {postData && (
        <Component
          list={postData}
          isCreatorPage={isCreatorPage || null}
          isStatPage={isStatPage || null}
        />
      )}
    </InfiniteScroll>
  );
};
InfiniteScrollHoc.propTypes = {
  Component: elementType,
  defaultList: func,
  LIMIT_ITEMS: number,
  isCreatorPage: bool,
  isStatPage: bool,
};
export default InfiniteScrollHoc;
