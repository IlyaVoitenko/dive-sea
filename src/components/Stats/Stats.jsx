import Header from "../../components/Common/Header";
import Footer from "../Common/Footer";
import { arrayStatsSelector } from "../../store/selectors";
import FiltersBtns from "../Common/FiltersBtns";
import InfiniteScrollHoc from "../../hooks/InfiniteScrollHoc";
import TableStats from "./TableStats";

const Stats = () => {
  return (
    <main className="containerPage">
      <Header />
      <section className="flex flex-col justify-between items-center mt-[4rem] mb-[4rem] ">
        <section className=" flex flex-col justify-between items-center mobile:w-[70%] ] mb-[4%]">
          <h2 className="discoverTitle text-center">Leaderboard NFTs</h2>
        </section>
        <FiltersBtns isShowAllBtn={true} isStatPage={true} />

        <InfiniteScrollHoc
          Component={TableStats}
          defaultList={arrayStatsSelector}
          isStatPage={true}
          LIMIT_ITEMS={6}
        />
      </section>
      <Footer />
    </main>
  );
};

export default Stats;
