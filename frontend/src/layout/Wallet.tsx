import { toast } from "sonner";
import { useState } from "react";
import WalletLeft from "../components/WalletLeft";

type Props = {};

function Wallet({}: Props) {



  
  return (
  
      <div className="w-full h-auto min-h-screen  bg-zinc-800 p-3 flex justify-center lg:items-center">
    
         
   
          <WalletLeft />

      </div>
  
  );
}
export default Wallet;
