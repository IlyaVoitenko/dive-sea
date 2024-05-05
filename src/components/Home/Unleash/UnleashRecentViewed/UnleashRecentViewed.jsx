import UnleashRecentViewedItem from "./UnleashRecentViewedItem";
import { users } from "../../Weekly/RecentViewed/constants";
import dotsVertical from "../../../../assets/dotsVertical.svg";

const UnleashRecentViewed = () => {
  return (
    <section className="absolute bg-[#FCFCFD] z-[2] drop-shadow-2xl flex flex-col justify-start items-center rounded-[16px] top-[61%] left-[16%] w-[340px] h-[215px] laptop:w-[229.07px] laptop:h-[154.39px]">
      <div className="flex  justify-between mt-5  w-[90%]">
        <span className="text-[#1A202C] font-semibold font-poppins titleUnleashRecentViewedDesktop   titleUnleashRecentViewedLaptop">
          Recent Viewed
        </span>
        <img src={dotsVertical} alt="Recent viewed dots" />
      </div>
      <div className="flex flex-col justify-evenly h-full  w-[88%]">
        {users.map((user, index) => (
          <UnleashRecentViewedItem key={user.id} user={user} index={++index} />
        ))}
      </div>
    </section>
  );
};

export default UnleashRecentViewed;
