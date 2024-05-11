import CardsList from "../Common/CardsList";
import Header from "../../components/Common/Header";
import FiltersBtns from "../Common/FiltersBtns";
import Footer from "../Common/Footer";
import SpinnerLoader from "../Common/SpinnerLoader";
import { discoverList } from "./constants";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const LIMIT_ITEMS = 12;
const Discover = () => {
  const [postData, setPostData] = useState(discoverList.slice(0, LIMIT_ITEMS));
  const [visible, setVisible] = useState(LIMIT_ITEMS);
  const [hasMore, setHasMore] = useState(true);

  const fetchLoadingItems = () => {
    const newLimit = visible + LIMIT_ITEMS;
    const dataToAdd = discoverList.slice(visible, newLimit);
    if (discoverList.length > postData.length) {
      setTimeout(() => {
        setPostData([...postData].concat(dataToAdd));
      }, 2000);
      setVisible(newLimit);
    } else setHasMore(false);
  };
  return (
    <main className="containerPage">
      <Header />
      <section className="flex flex-col justify-evenly items-center  h-[50%]">
        <section className=" flex flex-col justify-between items-center ">
          <h2 className="font-poppins font-[600] text-[#141416] desktop:text-[45px] desktop:leading-[30px] desktop:mt-[5rem] laptop:mt-[1rem] ">
            Discover NFTs
          </h2>
          <FiltersBtns />
        </section>

        <InfiniteScroll
          dataLength={postData.length}
          next={() => fetchLoadingItems(discoverList, postData)}
          hasMore={hasMore}
          loader={<SpinnerLoader />}
        >
          <CardsList list={postData} />
        </InfiniteScroll>
      </section>
      <Footer />
    </main>
  );
};

export default Discover;
