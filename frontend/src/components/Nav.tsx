import { nanoid } from "nanoid";
import { tabsNavtype, tabstype } from "../types/TypeTabsNav";
import { NavLink } from "react-router-dom";
import { useMeta } from "../context/ContextMetamask";

import {
  IoHome,
  MdSpaceDashboard,
  IoMdSettings,
  TbLogout2,
} from "../index.icon";
type Props = {
  handClick: (index: number) => void;
};

const titleNav: string[] = ["Yu", "🍋","zu"];
const tabsNav: tabsNavtype = [
  { id: nanoid(), text: "Home", ico: <IoHome />, href: "/home", index: 0 },
  {
    id: nanoid(),
    text: "Dash",
    ico: <MdSpaceDashboard />,
    href: "/dash",
    index: 1,
  },

];

function Nav({ handClick }: Props) {
  const {logout} = useMeta();
  const tabsNavBottom: tabstype = [
    { id: nanoid(), text: "Setting", ico: <IoMdSettings /> },
    { id: nanoid(), text: "Log out", ico: <TbLogout2 />}
  ];
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-5 h-screen flex flex-col justify-between text-gray-200 text-lg">
 
      <div>
        <div className="text-white  pb-10">
          <h1 className="flex flex-row font-bold lg:text-xl px-2">
            <span className="hidden md:block">{titleNav[0]}</span>
            <span className="hidden md:block text-lime-500">{titleNav[2]}</span>
            <span>{titleNav[1]}</span>
          </h1>
        </div>
        <div className="  flex-flex-col h-auto space-y-4 ">
          {tabsNav.map((item) => (
            <NavLink
              onClick={() => handClick(item.index)}
              className={({ isActive }) =>
                `flex items-center gap-3  rounded-lg px-2 py-2  ${
                  isActive ? "bg-lime-500/70 " : ""
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
          onClick={logout}
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
