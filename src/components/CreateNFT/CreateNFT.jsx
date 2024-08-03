import Header from "../Common/Header";
import Footer from "../Common/Footer";
import CreateNFTForm from "./CreateNFTForm";
const CreateNFT = () => {
  return (
    <div className="containerPage">
      <Header />
      <section className="h-full desktop:mt-[5rem] laptop:mt-[4rem] tablet:mt-[1rem] mobile:mt-[3rem]">
        <h3>Create Your NFT</h3>
        <CreateNFTForm />
      </section>
      <Footer />
    </div>
  );
};

export default CreateNFT;
