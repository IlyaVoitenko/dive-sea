import Header from "../Common/Header";
import NftTitleAndImages from "./NftTitleAndImages";
import Weekly from "./Weekly";
import TopCollection from "./TopCollection";
import ExploreMarketplace from "./ExploreMarketplace";
import Unleash from "./Unleash";
import BannerNft from "./BannerNft";
import Footer from "../Common/Footer";
const Home = () => {
  return (
    <main className="containerPage">
      <Header />
      <NftTitleAndImages />
      <Weekly />
      <TopCollection />
      <ExploreMarketplace />
      <Unleash />
      <BannerNft />
      <Footer />
    </main>
  );
};

export default Home;
