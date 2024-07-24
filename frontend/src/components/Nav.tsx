import { nanoid } from "nanoid";
import { IoHome, MdSpaceDashboard, TiNews, FaWallet } from "../index.icon";
import { Link, NavLink } from "react-router-dom";
type Props = {};

const titleNav: string[] = ["CryptoDash", "🪙"];
const tabsNav = [
  { id: nanoid(), text: "Home", ico: <IoHome />, href: "/home" },
  { id: nanoid(), text: "Dash", ico: <MdSpaceDashboard />, href: "/dash" },
  { id: nanoid(), text: "News", ico: <TiNews />, href: "/news" },
  { id: nanoid(), text: "Wallet", ico: <FaWallet />, href: "/wallet" },
];

function Nav({}: Props) {
  return (
    <div className="bg-slate-800 p-5 h-screen">
      <div className="text-white  pb-10">
        <h1 className="flex flex-row font-semibold lg:text-xl px-2">
          <span className="hidden md:block">{titleNav[0]}</span>
          <span>{titleNav[1]}</span>
        </h1>
      </div>
      <div className="text-gray-200  flex-flex-col h-auto space-y-4 ">
        {tabsNav.map((item) => (
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 text-lg rounded-lg px-2 py-2 ${
                isActive ? "bg-slate-900 text-white" : "active:bg-slate-900"
              }`
            }
            key={item.id}
            to={item.href}
          >
            <span>{item.ico}</span>
            <span className="hidden md:block">{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
export default Nav;
