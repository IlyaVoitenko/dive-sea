import { users } from "../constants";
import cardMark from "../../../../../assets/cardMark.svg";

const BodyTable = () => {
  return (
    <tbody>
      {users.map((user) => (
        <tr key={user.id} className=" border-b-[1.69px] border-[#EBE9E9]">
          <td>
            <div className="flex">
              <div className="relative">
                <figure>
                  <img
                    src={user.avatarImg}
                    alt="avatar user"
                    className="border-[1.92px] rounded-full w-[46.09px] h-[46.09px]"
                  />
                </figure>
              </div>
              <div className="flex flex-col  justify-between ml-4">
                <span className="text-[#141416] font-poppins text-[15.36px] font-medium leading-[21.51px]">
                  {user.name}
                </span>
                <span className="text-[#64748B] font-poppins text-[12.48px] font-normal leading-[18.72px]">
                  {user.userName}
                </span>
              </div>
            </div>
          </td>
          <td className="flex justify-center items-center h-full ">
            <img
              src={cardMark}
              alt="card mark"
              className="laptop:w-[31.52px] laptop:h-[31.52px]"
            />
            <span className="font-poppins font-semibold text-[24.51px] text-[#141416] leading-[34.32px]">
              {user.volume}
            </span>
          </td>
          <td className="text-center">
            <span
              className={` text-[24.51px] font-poppins font-medium  leading-[31.87px] tracking-[1%] ${
                user.percentagePerDay[0] === "+"
                  ? "text-[#10C352]"
                  : "text-[#E23333]"
              }`}
            >
              {user.percentagePerDay}
            </span>
          </td>
          <td className="flex justify-center items-center  h-full ">
            <img
              src={cardMark}
              alt="card mark"
              className="laptop:w-[31.52px] laptop:h-[31.52px]"
            />
            <span className="font-poppins font-semibold text-[24.51px] text-[#141416] leading-[34.32px]">
              {user.floorPricw}
            </span>
          </td>
          <td className="text-center">
            <span className="font-poppins font-medium text-[23.65px] text-[#141416] leading-[30.75px]">
              {user.owners}
            </span>
          </td>
          <td className="text-center">
            <span className="font-poppins font-medium text-[23.65px] text-[#141416] leading-[30.75px]">
              {user.items}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default BodyTable;
