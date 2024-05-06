import iconSuccessGreen from "../../../../assets/iconSuccessGreen.svg";
import stonesDefault from "../../../../assets/stonesDefault.svg";
import darkPoint from "../../../../assets/darkPoint.svg";
const Notification = () => {
  return (
    <section className="flex absolute notificationPositions justify-evenly rounded-[9.45px] z-10 items-center drop-shadow-2xl bg-[#FCFCFD] notificationSize">
      <div className="relative flex justify-center items-start mt-[1rem]  w-[20%] h-full">
        <figure className="flex justify-between  w-full">
          <img src={darkPoint} alt="point" />
          <img
            src={stonesDefault}
            alt="avatar user"
            className="border-[1.92px] rounded-full w-[30px] h-[30px]"
          />
        </figure>
        <img
          className="top-[0%] left-[75%] absolute w-[12.17px] h-[12.17px]"
          src={iconSuccessGreen}
          alt="icon success green"
        />
      </div>
      <div className="font-poppins flex flex-col">
        <span className="text-[#949494] text-[9.45px] tablet:text-[7px] font-medium leading-[16.2px]">
          New bid <span className="text-[#141416] font-[550]">Rotation</span>
        </span>
        <span className="text-[#141416] font-semibold leading-[13.5px] text-[8.1px] tablet:text-[7px] ">
          0.002 ETH{" "}
        </span>
        <span className="text-[#949494] font-normal leading-[13.5px] text-[8.1px] tablet:text-[7px] ">
          6 Oct 2022, 11:44 PM
        </span>
      </div>
      <figure>
        <img
          src={stonesDefault}
          className="w-[43.21px] h-[43.21px]"
          alt="stone"
        />
      </figure>
    </section>
  );
};

export default Notification;
