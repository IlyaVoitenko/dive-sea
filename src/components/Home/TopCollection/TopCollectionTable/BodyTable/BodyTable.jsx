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
          <td className="flex mobile:flex-col justify-center mobile:justify-evenly items-center h-full ">
            <div className="flex justify-center items-center">
              <img
                src={cardMark}
                alt="card mark"
                className="laptop:w-[31.52px] laptop:h-[31.52px] mobile:w-[17.34px] mobile:h-[17.34px]"
              />
              <span className="font-poppins font-semibold text-[24.51px] mobile:text-[15.41px] text-[#141416] leading-[34.32px] mobile:leading-[21.58px]">
                {user.volume}
              </span>
            </div>

            <span
              className={`  mobile:text-[13.49px] font-poppins font-normal tablet:hidden  mobile:leading-[20.23px]  ${
                user.percentagePerDay[0] === "+"
                  ? "text-[#10C352]"
                  : "text-[#E23333]"
              }`}
            >
              {user.percentagePerDay}
            </span>
          </td>
          <td className="text-center mobile:hidden">
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
          <td className="flex justify-center items-center  h-full mobile:hidden">
            <img
              src={cardMark}
              alt="card mark"
              className="laptop:w-[31.52px] laptop:h-[31.52px]"
            />
            <span className="font-poppins font-semibold text-[24.51px] text-[#141416] leading-[34.32px]">
              {user.floorPricw}
            </span>
          </td>
          <td className="text-center mobile:hidden">
            <span className="font-poppins font-medium text-[23.65px] text-[#141416] leading-[30.75px]">
              {user.owners}
            </span>
          </td>
          <td className="text-center mobile:hidden">
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
