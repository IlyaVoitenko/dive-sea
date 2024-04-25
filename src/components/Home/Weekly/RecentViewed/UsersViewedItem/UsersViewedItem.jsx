import { number, shape } from "prop-types";
import cardMark from "../../../../../assets/cardMark.svg";
import { topCollectionUsersProps } from "../../../../../props";
const UsersViewedItem = ({ user, index }) => {
  const { name, userName, avatarImg, volume, percentagePerDay } = user;
  return (
    <section className="flex items-center justify-between    w-full">
      <div className="flex">
        <div className="relative">
          <figure>
            <img
              src={avatarImg}
              alt="avatar user"
              className="border-[1.92px] rounded-full w-[46.09px] h-[46.09px]"
            />
          </figure>
          <span className="flex justify-center items-center text-[#141416] w-[21.13px] h-[21.13px] bg-white rounded-full  top-[60%] left-[60%] absolute font-poppins text-[11.52px] font-semibold leading-[17.28px] tracking-[0.1px]  ">
            {index}
          </span>
        </div>
        <div className="flex flex-col  justify-between ml-4">
          <span className="text-[#141416] font-poppins text-[15.36px] font-medium leading-[21.51px]">
            {name}
          </span>
          <span className="text-[#64748B] font-poppins text-[12.48px] font-normal leading-[18.72px]">
            {userName}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center  justify-center">
        <figure className="flex justify-center items-center">
          <img
            src={cardMark}
            alt="card mark"
            className="w-[17.28px] h-[17.28px]"
          />
          <span className="font-poppins font-semibold text-[15.36px] text-[#141416] leading-[21.51px]">
            {volume}
          </span>
        </figure>
        <span
          className={`${
            percentagePerDay[0] === "+" ? "text-[#10C352]" : "text-[#E23333]"
          }
`}
        >
          {percentagePerDay}
        </span>
      </div>
    </section>
  );
};
UsersViewedItem.propTypes = {
  user: shape(topCollectionUsersProps).isRequired,
  index: number,
};
export default UsersViewedItem;
