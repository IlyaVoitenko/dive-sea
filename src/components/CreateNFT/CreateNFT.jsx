import Header from "../Common/Header";
import Footer from "../Common/Footer";
import CreateNFTForm from "./CreateNFTForm";
const CreateNFT = () => {
  return (
    <div className="containerPage desktop:h-[1800px] laptop:h-[1400px] tablet:h-[1200px] mobile:h-[1600px]">
      <Header />
      <section className="flex flex-col h-full desktop:mt-[5rem] laptop:mt-[4rem] tablet:mt-[3rem] mobile:mt-[3rem]">
        <h3 className="titleCreateNFTPage">Create Your NFT</h3>
        <div className="h-full">
          <CreateNFTForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CreateNFT;
