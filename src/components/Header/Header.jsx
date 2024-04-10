import logo from "../../assets/logo.svg";
import loupe from "../../assets/loupe.svg";
import { Link } from "react-router-dom";
const linkNav = [
  { text: "Discover", src: "#", id: 1 },
  { text: "creators", src: "#", id: 2 },
  { text: "Sell", src: "#", id: 3 },
  { text: "stats", src: "#", id: 4 },
];
const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between mt-[45px] w-[90.86%] h-[58px]">
      <div className="flex flex-row items-center justify-between w-[40%] ">
        <img src={logo} className="w-[53px] h-[53px]" alt="logo" />
        <nav className="flex justify-between  w-[80%]">
          {linkNav.map((item) => (
            <Link
              key={item.id}
              to={item.src}
              className="text-[#606060] font-inter hover:text-black font-medium text-[17.83px]	leading-[26.74px]"
            >
              {item.text.toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-row items-center justify-between  w-[57%]">
        <div className="flex">
          <img src={loupe} className="relative left-11" alt="loupe" />
          <input
            type="text"
            placeholder="Search Art Work / Creator"
            className="bg-[#EDEDED] text-black pl-[4rem] w-[348.45px] h-[57px] rounded-lg border-none font-poppins  font-medium text-[15.71px]"
          />
        </div>
        <button className="w-[199.52px] h-[57.34px] self-end">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
