import { topCollectionUsersProps } from "../../../../../../../props";
const { avatarImg, name, userName } = topCollectionUsersProps;
const AvatarUser = ({ avatarImg, name, userName }) => {
  return (
    <td>
      <div className="flex">
        <div className="relative">
          <figure>
            <img
              src={avatarImg}
              alt="avatar user"
              className="border-[1.92px] rounded-full w-[46.09px] h-[46.09px]"
            />
          </figure>
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
    </td>
  );
};
AvatarUser.propTypes = {
  avatarImg,
  name,
  userName,
};
export default AvatarUser;
