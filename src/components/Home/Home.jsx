import Header from "../Header";
import NftTitleAndImages from "./NftTitleAndImages";
import Weekly from "./Weekly";
import TopCollection from "./TopCollection";
import ExploreMarketplace from "./ExploreMarketplace";
const Home = () => {
  return (
    <main className="h-full w-screen flex flex-col items-center bg-white">
      <Header />
      <NftTitleAndImages />
      <Weekly />
      <TopCollection />
      <ExploreMarketplace />
    </main>
  );
};

export default Home;
