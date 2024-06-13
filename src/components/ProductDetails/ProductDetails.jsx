import { useSelector } from "react-redux";
import {
  productDetailsSelector,
  arrayCardsFilteredByTitleSelector,
  isShowModalHistoryBidSelector,
} from "../../store/selectors";
import CardItem from "../Common/CardItem";
import DetailInfo from "./DetailInfo";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import ModalHistoryBid from "../ModalHistoryBid";
const ProductDetails = () => {
  const isShowModalHistoryBid = useSelector(isShowModalHistoryBidSelector);
  const productDetails = useSelector(productDetailsSelector);
  const arrayCardsFiltered = useSelector(arrayCardsFilteredByTitleSelector);
  return (
    <div className="containerPage bg-[#FAFAFA]">
      <Header isChangeBgColor={true} />
      <div className="relative flex flex-col justify-evenly mobile:justify-evenly items-center bg-[#FAFAFA] w-[90%] desktop:h-[1300px] laptop:h-[1000px] tablet:h-[800px] mobile:h-[2200px]  ">
        {isShowModalHistoryBid && <ModalHistoryBid />}
        <DetailInfo productDetails={productDetails} />
        <section className=" flex flex-col justify-between mobile:items-center w-full  desktop:h-[369.81px] laptop:h-[263px] tablet:h-[220px] mobile:h-[1400px] ">
          <h3 className="text-[rgb(195,195,195)] font-poppins font-[600] desktop:text-[31.06px] desktop:leading-[27.61px] laptop:text-[22.09px] laptop:leading-[19.64px] mobile:text-[25px] mobile:leading-[27.61px]">
            From Creator
          </h3>
          <div className="flex mobile:flex-col mobile:justify-around gap-[40px] mobile:h-[1350px] ">
            {arrayCardsFiltered &&
              arrayCardsFiltered.map((card, index) => (
                <CardItem
                  key={card.id}
                  card={card}
                  isCreatorCardProductDetail={true}
                  index={index}
                />
              ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
