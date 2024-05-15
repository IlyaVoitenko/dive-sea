import { useSelector } from "react-redux";
import {
  productDetailsSelector,
  arrayCardsFilteredByTitleSelector,
} from "../../store/selectors";
import DetailInfo from "./DetailInfo";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
const ProductDetails = () => {
  const productDetails = useSelector(productDetailsSelector);
  const arrayCardsFiltered = useSelector(arrayCardsFilteredByTitleSelector);
  return (
    <div className="containerPage bg-[#FAFAFA]">
      <Header />
      <div className="flex flex-col justify-center items-center bg-[#FAFAFA] w-[90%] desktop:h-[900px]">
        <DetailInfo productDetails={productDetails} />
        <section></section>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
