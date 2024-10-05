import {FaWallet } from "../index.icon";
import { buttonContentType } from "../types/TypeData";
import { useMeta } from "../context/ContextMetamask";

const buttonContent:buttonContentType  = [
  { text: "Connect ", image: <FaWallet/> },
];
type Props = {};
function TopNav({}: Props) {
  const { user, login } = useMeta();
  return (
    <div className="w-full py-5 px-3 flex-row flex bg-gradient-to-tr from-zinc-900 to-zinc-950 z-20 sticky top-0 ">
      <div className="flex flex-row gap-3  justify-end  w-full">
        {user ? (
         <div>
          <div className="bg-lime-500 w-2 rounded-full absolute h-2 animate-ping"></div>
          <p className="text-gray-50 text-lg font-medium px-2   ">{user}</p>
         </div>
        ) : (
          <div>
            {buttonContent.map((item) => (
              <button
                onClick={login}
                className="flex flex-row gap-2 bg-lime-700 hover:bg-lime-600 items-center justify-center px-3 py-2 rounded-lg font-semibold text-gray-50"
                key={item.text}
                >
                <span className="hidden lg:flex">{item.text}</span>
                <span>{item.image}</span>
              </button>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
export default TopNav;
