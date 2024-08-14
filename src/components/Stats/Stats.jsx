import { useState, useEffect } from "react";
import Header from "../../components/Common/Header";
import Footer from "../Common/Footer";
import SpinnerLoader from "../Common/SpinnerLoader";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { arrayStatsSelector } from "../../store/selectors";
import { fetchLoadingItems } from "../../helper";
import FiltersBtns from "../Common/FiltersBtns";
import TopCollectionTable from "../Home/TopCollection/TopCollectionTable";

const LIMIT_ITEMS = 6;

const Stats = () => {
  const arrayStats = useSelector(arrayStatsSelector);
  const [postData, setPostData] = useState(arrayStats.slice(0, LIMIT_ITEMS));
  const [visible, setVisible] = useState(LIMIT_ITEMS);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setPostData(arrayStats.slice(0, LIMIT_ITEMS), [arrayStats]);
  }, [arrayStats]);

  return (
    <main className="containerPage">
      <Header />
      <section className="flex flex-col justify-between items-center mt-[4rem] mb-[4rem] ">
        <section className=" flex flex-col justify-between items-center mobile:w-[70%] ] mb-[4%]">
          <h2 className="discoverTitle text-center">Leaderboard NFTs</h2>
        </section>
        <FiltersBtns isShowAllBtn={true} isStatPage={true} />
        <InfiniteScroll
          dataLength={postData.length}
          next={() =>
            fetchLoadingItems(
              arrayStats,
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
          <div className="flex h-full w-full">
            {postData && (
              <TopCollectionTable isStatPage={true} list={postData} />
            )}
          </div>
        </InfiniteScroll>
      </section>
      <Footer />
    </main>
  );
};

export default Stats;
