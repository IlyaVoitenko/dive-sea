import dotsVertical from "../../../../assets/dotsVertical.svg";
import UsersViewedItem from "./UsersViewedItem";
import { users } from "./constants";
const RecentViewed = () => {
  return (
    <>
      <div className="flex  justify-between mt-5  w-[90%]">
        <span className=" text-[#1A202C] text-[21px] font-semibold font-poppins leading-[28.35px] tracking-[0.02px] ">
          Recent Viewed
        </span>
        <img src={dotsVertical} alt="Recent viewed dots" />
      </div>
      <div className="flex flex-col justify-evenly h-full  w-[88%]">
        {users.map((user, index) => (
          <UsersViewedItem key={user.id} user={user} index={++index} />
        ))}
      </div>
    </>
  );
};

export default RecentViewed;
