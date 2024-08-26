import { useState } from "react";
import { FaWallet } from "../index.icon";
import client from "../viemInit";

type Props = {};
function WalletUser({}: Props) {
  const [isOn, setIsOn] = useState<boolean>(true);
  const [isEmpty, SetIsEmpty] = useState<boolean>(true);

 

  const contentWallet: string[] = [
    "Your Wallet",
    "Connect your wallet to access it.",
    "Balance:",
    "Send",
    "Last Transaction",
    "No transactions to display",
    "From :",
    "To :",
    "Value :",
  ];

  return (
    <div className="w-full h-auto lg:h-[300px] xl:max-w-lg bg-white rounded-md flex flex-col">
      <div className="w-full flex justify-center">
        <h2 className="flex flex-row font-semibold text-zinc-800 items-center gap-2 text-lg py-3">
          <span>{contentWallet[0]}</span>
          <FaWallet />
        </h2>
      </div>

      {isOn ? (
        <div className="flex-grow p-2 flex flex-col justify-between">
          <div className="flex-grow overflow-y-auto">
            <h3 className="font-normal">{contentWallet[4]}</h3>
            <div>
              {!isEmpty ? (
                <div className="overflow-y-scroll flex flex-col justify-between h-40 lg:h-50">
                  <p className="flex flex-row gap-2 justify-start py-2 font-medium">
                    <span className="text-blue-500 ">{contentWallet[6]}</span>
                    <span className="text-red-500 ">{contentWallet[7]}</span>
                    <span className="text-lime-500 ">{contentWallet[8]}</span>
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <p>{contentWallet[5]}</p>
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center lg:justify-between">
            <p className="text-zinc-800 font-semibold py-2">
              {contentWallet[2]}
            </p>
            <div>
              
              <input type="text" className="border-lime-500"/>
              <label htmlFor="text" className="bg-lime-500 placeholder-zinc-700 border-lime-600" ></label>
              <button className="w-full lg:w-auto font-semibold bg-lime-700 hover:bg-lime-600 text-gray-50 px-2 py-1 rounded-lg text-lg">
                {contentWallet[3]}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-zinc-800 px-4 text-center">{contentWallet[1]}</p>
        </div>
      )}
    </div>
  );
}

export default WalletUser;
