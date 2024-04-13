import { sizeLaptopHr, sizeTableHr, sizeMobileHr } from "../constants";

const TitleAndLine = ({ widthWindow }) => {
  return (
    <div className="flex mobile:flex-row  mobile:justify-center mobile:items-center">
      <hr
        className={`${sizeLaptopHr} ${sizeTableHr} ${sizeMobileHr} bg-[#201F1F] border-[0.71px] mobile:border-[0.62px] border-solid `}
      />
      {widthWindow <= 425 && (
        <span className="font-poppins text-[#201F1F] ml-2 text-[9.25px] leading-[11.1px] tracking-[1.23px]">
          OVER 1M CREATORS
        </span>
      )}
    </div>
  );
};
TitleAndLine.propTypes = { widthWindow: Number };
export default TitleAndLine;
