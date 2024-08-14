import { useState, useEffect } from "react";
import Header from "../../components/Common/Header";
import Footer from "../Common/Footer";
import SpinnerLoader from "../Common/SpinnerLoader";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { arrayCreatorsSelector } from "../../store/selectors";
import { fetchLoadingItems } from "../../helper";
import TopCollectionTable from "../Home/TopCollection/TopCollectionTable";
const LIMIT_ITEMS = 6;

const Stats = () => {
  const arrayCreators = useSelector(arrayCreatorsSelector);
  const [postData, setPostData] = useState(arrayCreators.slice(0, LIMIT_ITEMS));
  const [visible, setVisible] = useState(LIMIT_ITEMS);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setPostData(arrayCreators.slice(0, LIMIT_ITEMS), [arrayCreators]);
  }, [arrayCreators]);

  return (
    <main className="containerPage">
      <Header />
      <section className="flex flex-col justify-between items-center mt-[4rem]  h-[50%]">
        <section className=" flex flex-col justify-between items-center mobile:w-[70%] w-[70%] mb-[4%]">
          <h2 className="discoverTitle text-center">Meet Our Great Creators</h2>
        </section>
        <InfiniteScroll
          dataLength={postData.length}
          next={() =>
            fetchLoadingItems(
              arrayCreators,
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
          {postData && <TopCollectionTable list={postData} />}
        </InfiniteScroll>
      </section>
      <Footer />
    </main>
  );
};

export default Stats;
