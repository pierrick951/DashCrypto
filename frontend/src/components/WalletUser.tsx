import { useState } from "react"
import {FaWallet} from '../index.icon'



type Props = {}
function WalletUser({}: Props) {
   const [isOn,setIsOn] = useState<boolean>(false)
   const contentWallet:string[] = [
         "Your Wallet","Connect your wallet to access it."

   ]


  return (
    <div className=" w-full h-[400px] bg-white xl:mr-5 rounded-md  xl:max-w-lg">
       <div className="w-full  flex justify-center">
         <h2 className="flex flex-row font-semibold  text-zinc-800 items-center gap-2 text-lg py-3 ">
          <span>{contentWallet[0]}</span>
          <FaWallet/>
         </h2>
       </div>
     {isOn ? 
     (
    <div></div>
    
    ): (

        <div>
             <p className="text-zinc-800 px-4 text-center">{contentWallet[1]}</p>
        </div>
     )}

    </div>
  )
}
export default WalletUser