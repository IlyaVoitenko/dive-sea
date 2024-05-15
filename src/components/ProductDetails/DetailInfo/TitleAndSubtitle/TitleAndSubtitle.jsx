import { string } from "prop-types";
const TitleAndSubtitle = ({ title }) => {
  return (
    <>
      <span className="detailInfoTitle">Project {title}</span>
      <p className="detailInfoSubtitle">
        A collection of 10,000 utility-enabled PFPs that feature a richly
        diverse and unique pool of rarity-powered traits.
      </p>
    </>
  );
};

TitleAndSubtitle.propTypes = { title: string };

export default TitleAndSubtitle;
