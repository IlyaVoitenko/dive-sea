import {
  sizeLaptopTitleNft,
  sizeTabletTitleNft,
  sizeMobileTitleNft,
  sizeLaptopSubtitleNft,
  sizeTabletSubtitleNft,
  sizeMobileSubtitleNft,
} from "../constants";
const TitleAndSubtitle = () => {
  return (
    <>
      <h1
        className={`${sizeLaptopTitleNft} ${sizeTabletTitleNft} ${sizeMobileTitleNft} font-poppins font-semibold text-[#141416] `}
      >
        Discover And Create NFTs
      </h1>
      <p
        className={`${sizeLaptopSubtitleNft} ${sizeTabletSubtitleNft} ${sizeMobileSubtitleNft} mt-3 font-inter text-gray-400 text-justify font-normal`}
      >
        Discover, Create and Sell NFTs On Our NFT Marketplace With Over
        Thousands Of NFTs And Get a{" "}
        <span
          className={`font-inter font-semibold text-black ${sizeLaptopSubtitleNft} ${sizeTabletSubtitleNft}  text-justify`}
        >
          $20 bonus.
        </span>
      </p>
    </>
  );
};

export default TitleAndSubtitle;
