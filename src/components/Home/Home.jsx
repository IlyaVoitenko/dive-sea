import Header from "../Header";
import NftTitleAndImages from "./NftTitleAndImages";
import Weekly from "./Weekly";
const Home = () => {
  return (
    <main className="h-full w-screen flex flex-col items-center bg-white">
      <Header />
      <NftTitleAndImages />
      <Weekly />
    </main>
  );
};

export default Home;
