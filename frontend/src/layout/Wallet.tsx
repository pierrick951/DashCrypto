import { useState } from "react";
import { Toaster, toast } from "sonner";
import {Button} from '@chakra-ui/react'
import { FaBalanceScale } from "../index.icon";
import PriceEth from "../components/PriceEth";
import CardDash from "../components/CardDash";

import WalletLeft from "../components/WalletLeft";




type Props = {};
const title1: string = "Balance";
const title2: JSX.Element = <FaBalanceScale />;
const contentWallet: string[] = ["Log out","Recent Transactions","Sell","Buy",'No transactions currently'];


function Wallet({}: Props) {
  const [walletConected, setWalletConected] = useState<boolean>(false);
  const [balance, setBalance] = useState<string | null>(null);
  const [transaction,settransaction] = useState(null)

  const handleClick: () => void = () => {
    if (walletConected === false) {
      try {
        toast.success("Connection successful");
        setBalance("2 ETH");
        setWalletConected(!walletConected);
      } catch (error) {
        toast.error("Connection failed");
        console.log("An error occurred: ", error);
      }
    } else if (walletConected === true) {
      toast.info("Disconnected");
      setWalletConected(false);
    }
  };

  return (
    <div className="w-full h-auto min-h-screen  bg-zinc-800 p-3 flex items-center justify-center">
      <Toaster position="bottom-right" richColors />
      {walletConected ? (
        <div className="w-full  min-h-screen flex flex-col lg:flex-row p-3 gap-3 justify-center ">
          <div className="bg-white shadow-xl rounded max-w-2xl  p-4" >
             <div>
               <h1 className="text-slate-800 text-xl font-medium">{contentWallet[1]}</h1>
               <hr />
               <div>
                {transaction !== null ? <></> : 
                
                <>
                   <p>{contentWallet[4]}</p>
                
                
                </>}
               </div>
             </div>
             <div>
             <Button>{contentWallet[2]}</Button>
             <Button>{contentWallet[3]}</Button>
             </div>
          </div>
          <div className="flex-col flex w-auto lg:max-w-md items-center">
            <PriceEth />
            <CardDash title1={title1} title2={title2} data={balance} />
            <Button
            onClick={() => handleClick()}
            className=" flex flex-row w-full  gap-2 py-2 px-5"
            colorScheme="blue">
         {contentWallet[0]}
          </Button>
          </div>
         
        </div>
      ) : (
         <WalletLeft event={() => handleClick()}/>
      )}
    </div>
  );
}
export default Wallet;
