import { useState, useEffect } from "react";
import Header from "../../components/Common/Header";
import Footer from "../Common/Footer";
import SpinnerLoader from "../Common/SpinnerLoader";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { arrayCreatorsSelector } from "../../store/selectors";
import { fetchLoadingItems } from "../../helper";

import iconSuccess from "../../assets/successIcon.svg";
import bigMarkCard from "../../assets/bigMarkCard.svg";

const LIMIT_ITEMS = 6;

const Creators = () => {
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
          <div
            className={`flex pt-[2.6rem] pb-[2.6rem] mobile:w-full flex-wrap ${"desktop:w-full justify-evenly mobile:justify-center gap-[40px]"}`}
          >
            {postData &&
              postData.map((card) => (
                <section
                  key={card.id}
                  className="shadow-boxCreatorsCards flex flex-col justify-between items-center desktop:w-[370.68px] desktop:h-[537.74px] desktop:rounded-[25px] laptop:w-[263.62px] laptop:h-[382.43px] laptop:rounded-[17.78px] tablet:w-[263.62px] tablet:h-[382.43px] tablet:rounded-[17.78px] mobile:w-[309.64px] mobile:h-[449.19px] mobile:rounded-[15px] "
                >
                  <div className=" w-full relative">
                    <img
                      src={card.bgImage}
                      className=" desktop:w-[385.51px] desktop:h-[220px]  laptop:w-[274.17px] laptop:h-[149.33px] tablet:w-full tablet:h-[149.33px] mobile:w-[322.03px] mobile:h-[170.21px ]  desktop:rounded-t-[25px] laptop:rounded-t-[17.78px] tablet:rounded-t-[17.78px] mobile:rounded-t-[15px]"
                    />
                    <img
                      className="top-[70%] left-[33%] absolute desktop:w-[110.94px] desktop:h-[110.94px]  laptop:w-[78.9px] laptop:h-[78.9px] tablet:w-[78.9px] tablet:h-[78.9px] mobile:w-[92.67px] mobile:h-[92.67px]"
                      src={card.avatarImage}
                    />
                  </div>
                  <section className="flex flex-col items-center justify-around h-[50%]">
                    <div className="flex justify-between items-center desktop:w-[137.36px] desktop:h-[34px] laptop:w-[97.69px] laptop:h-[24px] tablet:w-[97.69px] tablet:h-[24px]  mobile:w-[114.74px] mobile:h-[29px]">
                      <span className="text-[#000000] font-poppins font-[600] desktop:text-[23.72px] desktop:leading-[33.61px] laptop:text-[16.87px] laptop:leading-[23.9px] tablet:text-[16.87px] tablet:leading-[23.9px] mobile:text-[19.82px] mobile:leading-[28.07px]">
                        {card.userName}
                      </span>
                      <img
                        className="desktop:w-[23.5px] desktop:h-[23.5px]"
                        src={iconSuccess}
                        alt="icon success"
                      />
                    </div>
                    <div className="flex justify-between desktop:w-[316.48px] desktop:h-[42px] laptop:w-[224.8px] laptop:h-[31px] tablet:w-[224.8px] tablet:h-[31px] mobile:w-[262.99px] mobile:h-[36px]">
                      <div className="flex flex-col justify-center ">
                        <span className="titleCard">{card.items}K</span>
                        <p className="subtitleCard">Items</p>
                      </div>
                      <div className="flex flex-col justify-center ">
                        <span className="titleCard">{card.items}K</span>
                        <p className="subtitleCard">Items</p>
                      </div>
                      <div className="flex flex-col justify-center ">
                        <span className="titleCard flex justify-evenly items-center">
                          <img src={bigMarkCard} className="infoCardIcon" />
                          {card.tradedAmounts}
                        </span>
                        <p className="subtitleCard">Floor Price</p>
                      </div>
                      <div className="flex flex-col justify-center ">
                        <span className="titleCard flex justify-evenly items-center">
                          <img src={bigMarkCard} className="infoCardIcon" />
                          {card.tradedAmounts}
                        </span>
                        <p className="subtitleCard">Traded</p>
                      </div>
                    </div>
                    <div className="flex justify-between desktop:w-[318.29px] desktop:h-[99.31px] laptop:w-[226.37px] laptop:h-[70.63px] tablet:w-[226.37px] tablet:h-[70.63px] mobile:w-[265.88px] mobile:h-[82.96px]">
                      {card.gallery &&
                        card.gallery
                          .map((image, index) => (
                            <div key={index} className="relative">
                              {index === 2 && (
                                <div className="font-urbanist flex justify-center items-center h-[25px] w-[50px]  absolute z-10 translate-x-[50%] translate-y-[50%] desktop:top-[27%]  desktop:left-[-2%] laptop:top-[18%]  laptop:left-[-22%]  tablet:top-[16%]  tablet:left-[-23%]  mobile:top-[22%]  mobile:left-[-12%]  tracking-[1%] text-[#FFFFFF] text-center font-[700] desktop:text-[19.86px] desktop:leading-[21.85px]">
                                  +{card.gallery.length - 2}
                                </div>
                              )}

                              <img
                                src={image}
                                className={`${
                                  index === 2 && "brightness-50"
                                } desktop:w-[99.31px]  desktop:h-[99.31px]  desktop:rounded-[9.93px] laptop:w-[70.63px] laptop:h-[70.63px]  laptop:rounded-[7.06px] tablet:w-[70.63px] tablet:h-[70.63px]  tablet:rounded-[7.06px]  mobile:w-[82.96px] mobile:h-[82.96px]  mobile:rounded-[8.3px]`}
                              />
                            </div>
                          ))
                          .slice(0, 3)}
                    </div>
                  </section>
                </section>
              ))}
          </div>
        </InfiniteScroll>
      </section>
      <Footer />
    </main>
  );
};

export default Creators;
