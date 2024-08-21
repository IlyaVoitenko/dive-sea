import { arrayCardsSelector } from "../../../store/selectors";

import shop from "../../../assets/shop.svg";
import chains from "../../../assets/chains.svg";
import vectorDark from "../../../assets/VectorDark.svg";

import ActivityList from "../ActivityList";
import InfiniteScrollHoc from "../../../hooks/InfiniteScrollHoc";
const Activity = () => {
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
      <InfiniteScrollHoc
        Component={ActivityList}
        defaultList={arrayCardsSelector}
        LIMIT_ITEMS={2}
      />
    </>
  );
};

export default Activity;
