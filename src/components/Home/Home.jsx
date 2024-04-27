import Header from "../Header";
import NftTitleAndImages from "./NftTitleAndImages";
import Weekly from "./Weekly";
import TopCollection from "./TopCollection";
const Home = () => {
  return (
    <main className="h-full w-screen flex flex-col items-center bg-white">
      <Header />
      <NftTitleAndImages />
      <Weekly />
      <TopCollection />
    </main>
  );
};

export default Home;
