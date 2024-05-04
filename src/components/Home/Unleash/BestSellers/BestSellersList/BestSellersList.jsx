import { string, number, bool, shape } from "prop-types";
const BestSellersListItem = ({ user, index }) => {
  const { avatarImg, name, userName, isFollowing } = user;
  return (
    <div className="flex">
      <div className="relative">
        <figure>
          <img
            src={avatarImg}
            alt="avatar user"
            className="border-[1.92px] rounded-full w-[46.09px] h-[46.09px]"
          />
        </figure>
        <span className="flex justify-center items-center text-white w-[21.13px] h-[21.13px] bg-[#141416] rounded-full  top-[0%] left-[60%] absolute font-poppins text-[11.52px] font-semibold leading-[17.28px] tracking-[0.1px]  ">
          {index}
        </span>
      </div>
      <div className="flex flex-col  justify-around ml-4">
        <span className="text-[#141416] font-poppins text-[15.36px] font-medium leading-[21.51px]">
          {name}
        </span>
        <span className="text-[#64748B] font-poppins text-[12.48px] font-normal leading-[18.72px]">
          @{userName}
        </span>
      </div>
      {isFollowing ? (
        <button className="bg-[#E6E8EC] laptop:h-[19.92px] laptop:w-[55.84px] laptop:rounded-[4.96px] laptop:border-[1.24px]">
          Unfollow
        </button>
      ) : (
        <button>Follow</button>
      )}
    </div>
  );
};
BestSellersListItem.propTypes = {
  user: shape({
    avatarImg: string,
    name: string,
    userName: string,
    isFollowing: bool,
  }),
  index: number,
};
export default BestSellersListItem;
