// import { useState} from "react";
import { FaWallet } from "../index.icon";
import { useMeta } from "../context/ContextMetamask";
import { nanoid } from "nanoid";




type Props = {};
function WalletUser({}: Props) {
     
  const { user, balance } = useMeta();
  // const [isEmpty, SetIsEmpty] = useState<boolean>(true);

 

  const contentWallet: string[] = [
    "Your Wallet",
    "Connect your wallet to access it.",
    `Balance:`,
    "Send",
    "Last Transaction",
    "No transactions to display",
    "From :",
    "To :",
    "Value :",
    `${balance}`
  ];

  const inputContent = [
 


    {id:nanoid(),hfor:"walletAddress",type:"text",placeholder:"wallet address",idi:"walletAddress"},
    {id:nanoid(),hfor:"amount",type:"number",placeholder:"Amount",idi:"amount"},

  ]

  return (
    <div className="w-full h-auto xl:max-w-lg bg-white rounded-md flex flex-col">
      <div className="w-full flex justify-center">
        <h2 className="flex flex-row font-semibold text-zinc-800 items-center gap-2 text-lg py-3">
          <span>{contentWallet[0]}</span>
          <FaWallet />
        </h2>
      </div>

      {user ? (
        <div className="flex-grow p-2 flex flex-col justify-between">
          <div className="flex-grow overflow-y-auto">
            <h3 className="text-zinc-800 font-semibold">{contentWallet[4]}</h3>
            <div>
              {/* {!isEmpty ? (
                <div className="overflow-y-scroll flex flex-col items-center h-40 lg:h-50">
                  <p className="flex flex-row gap-2 justify-between  py-2 font-semibold italic text-zinc-800">
                    <span>{contentWallet[6]}</span>
                    <span>{contentWallet[7]}</span>
                    <span>{contentWallet[8]}</span>
                  </p>
                </div>
              ) : ( */}
                <div className="text-center">
                  <p>
                   {contentWallet[5]}
                    </p>
                </div>
              {/* )} */}
            </div>
          </div>
            <p className="text-zinc-800 font-semibold py-2 flex flex-row gap-2">
              <span>{contentWallet[2]}</span>
              <span className="text-mono text-lime-500">{contentWallet[9]}</span>
            
            </p>
          <div className="w-full flex flex-col lg:flex-row items-center justify-center  p-2">
            <div className="flex flex-col w-full gap-2 ">
              {inputContent.map((item) => (
                <div key={item.id} className="">
                   <label htmlFor={item.hfor}></label>
                   <input type={item.type} 
                   id={item.idi}
                   className="border-lime-800 border-2 p-2 rounded-lg w-full "
                   placeholder={item.placeholder}
                   />
                </div>
              ))}
             
              <button className="w-full xl:w-auto font-semibold bg-lime-700 hover:bg-lime-600 text-gray-50 px-2 py-1 rounded-lg text-lg">
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
