import CardsList from "../Common/CardsList";
import Header from "../../components/Common/Header";
import FiltersBtns from "../Common/FiltersBtns";
import Footer from "../Common/Footer";
import SpinnerLoader from "../Common/SpinnerLoader";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { arrayCardsSelector } from "../../store/selectors";
import { useEffect } from "react";

const LIMIT_ITEMS = 12;
const Discover = () => {
  const cardsList = useSelector(arrayCardsSelector);
  const [postData, setPostData] = useState(cardsList.slice(0, LIMIT_ITEMS));
  const [visible, setVisible] = useState(LIMIT_ITEMS);
  const [hasMore, setHasMore] = useState(true);

  const fetchLoadingItems = (arr) => {
    const newLimit = visible + LIMIT_ITEMS;
    const dataToAdd = arr.slice(visible, newLimit);
    if (arr.length > postData.length) {
      setTimeout(() => {
        setPostData([...postData].concat(dataToAdd));
      }, 2000);
      setVisible(newLimit);
    } else setHasMore(false);
  };

  useEffect(() => {
    setPostData(cardsList.slice(0, LIMIT_ITEMS), [cardsList]);
  }, [cardsList]);

  return (
    <main className="containerPage">
      <Header />
      <section className="flex flex-col justify-evenly items-center mt-[4rem]  h-[50%]">
        <section className=" flex flex-col justify-between items-center mobile:w-[70%] w-[70%]">
          <h2 className="discoverTitle">Discover NFTs</h2>
          <FiltersBtns />
        </section>
        <InfiniteScroll
          dataLength={postData.length}
          next={() => fetchLoadingItems(cardsList, postData)}
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
