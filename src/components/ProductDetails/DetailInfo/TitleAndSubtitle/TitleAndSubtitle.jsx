import { string } from "prop-types";
import verifyIcon from "../../../../assets/verifyIcon.svg";
const TitleAndSubtitle = ({ title, name }) => {
  return (
    <>
      <div className="desktop:hidden laptop:hidden tablet:hidden flex justify-between items-center w-[87.27px] h-[20px]">
        <span className="text-[#292B39] font-poppins font-[500] text-[13.03px] leading-[19.98px]">
          {name}
        </span>
        <img src={verifyIcon} alt="icon verify" />
      </div>
      <span className="detailInfoTitle">Project {title}</span>
      <p className="detailInfoSubtitle">
        A collection of 10,000 utility-enabled PFPs that feature a richly
        diverse and unique pool of rarity-powered traits.
      </p>
    </>
  );
};

TitleAndSubtitle.propTypes = { title: string, name: string };

export default TitleAndSubtitle;
