import { nanoid } from "nanoid";
import {tabsNavtype,tabsNavBottype} from'../types/TypeTabsNav'
import { NavLink } from "react-router-dom";
import {
  IoHome,
  MdSpaceDashboard,
  TiNews,
  FaWallet,
  IoMdSettings,
  TbLogout2,
  IoMail,
} from "../index.icon";
type Props = {};

const titleNav: string[] = ["CryptoDash", "🪙"];
const tabsNav:tabsNavtype = [
  { id: nanoid(), text: "Home", ico: <IoHome />, href: "/home" },
  { id: nanoid(), text: "Dash", ico: <MdSpaceDashboard />, href: "/dash" },
  { id: nanoid(), text: "News", ico: <TiNews />, href: "/news" },
  { id: nanoid(), text: "Wallet", ico: <FaWallet />, href: "/wallet" },
  { id: nanoid(), text: "Message", ico: <IoMail/>, href: "/message" },
];
const tabsNavBottom:tabsNavBottype = [
  { id: nanoid(), text: "Setting", ico: <IoMdSettings /> },
  { id: nanoid(), text: "Log out", ico: <TbLogout2 /> },
];

function Nav({}: Props) {
  return (
    <div className="bg-slate-800 p-5 h-screen flex flex-col justify-between text-gray-200 text-lg">
      <div>
        <div className="text-white  pb-10">
          <h1 className="flex flex-row font-semibold lg:text-xl px-2">
            <span className="hidden md:block">{titleNav[0]}</span>
            <span>{titleNav[1]}</span>
          </h1>
        </div>
        <div className="  flex-flex-col h-auto space-y-4 ">
          {tabsNav.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-3  rounded-lg px-2 py-2  ${
                  isActive ? "bg-blue-500 " : ""
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
      <div className="space-y-3 text-md">
        {tabsNavBottom.map((item) => (
          <button
            className="flex flex-row gap-3 px-3 items-center justify-center  "
            key={item.id}
          >
            <span>{item.ico}</span>
            <span className="hidden md:block">{item.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
export default Nav;
