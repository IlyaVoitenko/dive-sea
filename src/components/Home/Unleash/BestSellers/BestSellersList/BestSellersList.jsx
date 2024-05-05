import { string, number, bool, shape } from "prop-types";
const BestSellersListItem = ({ user, index }) => {
  const { avatarImg, name, userName, isFollowing } = user;
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex">
        <div className="relative">
          <figure>
            <img
              src={avatarImg}
              alt="avatar user"
              className="border-[1.92px] rounded-full w-[46.09px] h-[46.09px] desktop:w-[55.72px] desktop:h-[55.72px]"
            />
          </figure>
          <span className="flex justify-center items-center text-white w-[21.13px] h-[21.13px]  bg-[#141416] rounded-full  top-[0%] left-[60%] absolute font-poppins text-[11.52px] font-semibold leading-[17.28px] tracking-[0.1px]  ">
            {index}
          </span>
        </div>
        <div className="flex flex-col  justify-around ml-4">
          <span className="text-[#141416] font-poppins text-[15.36px] laptop:text-[8.68px] font-medium leading-[21.51px] laptop:leading-[14.88px]">
            {name}
          </span>
          <span className="text-[#64748B] font-poppins text-[12.48px] laptop:text-[7.44px] font-normal leading-[18.72px] laptop:leading-[12.4px]">
            @{userName}
          </span>
        </div>
      </div>

      {isFollowing ? (
        <button className="bg-[#E6E8EC] flex justify-center items-center BestSellersUnfollowBtnDesktop  BestSellersUnfollowBtnLaptop">
          <span className="text-[#23262F] font-[700] font-dm">Unfollow</span>
        </button>
      ) : (
        <button className="bg-white  border-[#E6E8EC] flex justify-center items-center BestSellersFollowBtnDesktop  BestSellersFollowBtnLaptop ">
          <span className="text-[#23262F] font-[700] font-dm ">Follow</span>
        </button>
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
