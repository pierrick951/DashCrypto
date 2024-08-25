import { useState } from "react"



type Props = {}
function WalletUser({}: Props) {
   const [isOn,setIsOn] = useState<boolean>(false)
   const contentWallet:string[] = [
         "",

   ]


  return (
    <div className=" w-full h-auto xl:h-[400px] bg-white xl:mr-5 rounded-md  xl:max-w-lg">
     {isOn ? (0): (

        <div>
            p
        </div>
     )}

    </div>
  )
}
export default WalletUser