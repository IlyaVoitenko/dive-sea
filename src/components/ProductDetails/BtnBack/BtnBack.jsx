import btnBack from "../../../assets/btnBack.svg";

const BtnBack = () => {
  return (
    <div className="flex justify-start items-center w-full mobile:hidden">
      <figure>
        <img
          src={btnBack}
          alt="btn back"
          className=" desktop:w-[36.82px] desktop:h-[36.82px] desktop:leading-[27.61px]"
        />
      </figure>
      <span className="text-[#23262F] font-poppins font-[600] desktop:text-[31.06px] ml-[25px]">
        Product Detail
      </span>
    </div>
  );
};

export default BtnBack;
