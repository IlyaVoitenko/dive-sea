import CardsList from "../Common/CardsList";
import Header from "../../components/Common/Header";
import FiltersBtns from "../Common/FiltersBtns";
import Footer from "../Common/Footer";
import { arrayCardsSelector } from "../../store/selectors";

import InfiniteScrollHoc from "../../hooks/InfiniteScrollHoc";
const Discover = () => {
  return (
    <main className="containerPage">
      <Header />
      <section className="flex flex-col justify-evenly items-center mt-[4rem]  h-[50%]">
        <section className=" flex flex-col justify-between items-center mobile:w-[70%] w-[70%]">
          <h2 className="discoverTitle">Discover NFTs</h2>
          <FiltersBtns />
        </section>
        <InfiniteScrollHoc
          Component={CardsList}
          defaultList={arrayCardsSelector}
        />
      </section>
      <Footer />
    </main>
  );
};

export default Discover;
