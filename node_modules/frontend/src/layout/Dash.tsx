import BlockEth from "../components/BlockEth";
import GasPrice from "../components/GasPrice";
import PriceEth from "../components/PriceEth";
import Supply from "../components/Supply";
import Coin from "../components/Coin";
import { useMeta } from "../context/ContextMetamask";
import { toast } from "sonner";
// import client from "../viemInit"


const content: string[] = ["Buy","Eth Stats"];
type Props = {};
function Dash({}: Props) {
  const { user } = useMeta();

  const handleclick: () => void = async () => {
    if (user) {
      try {
        toast.success("You have buy X token");
      } catch (error) {
        toast.error("Somethings goes wrong");
      }
    } else {
      toast.info("Please connect your wallet");
    }
  };
  return (
    <div className="w-full h-auto min-h-screen bg-gradient-to-tl from-zinc-900 to-zinc-800  p-2 md:p-5  flex justify-center">
      <div className="flex  flex-col  items-center gap-5">
        <div className="flex flex-col justify-center  bg-gradient-to-tr from-zinc-950 to-zinc-900 p-4 rounded w-full gap-2">
           <h2 className="text-lime-500 font-semibold text-2xl text-center lg:text-start ">{content[1]}</h2>
          <div className="flex-col lg:flex-row flex gap-2">
            <Supply />
            <PriceEth />
            <BlockEth />
            <GasPrice />
          </div>
        </div>
        <div className="bg-gradient-to-tl w-full from-zinc-950 to-zinc-900 rounded p-4 flex  flex-col lg:flex-row shadow-zinc-950 shadow-2xl">
          <div className="py-3 w-full flex justify-center">
            <Coin />
          </div>
          <div className="flex flex-col w-full">
            <div className="py-2 flex flex-col">
              <label htmlFor="token-amount"></label>
              <input
              required
                className="  w-full p-2 text-white font-semibold border-none bg-transparent text-xl focus:outline-none rounded"
                type="number"
                id="token-amount"
                name="token-amount"
                min="1"
                placeholder="0.0"
              />
            
            </div>
            <button
            onClick={handleclick}
            className="rounded bg-lime-500 hover:bg-lime-600 text-white font-semibold text-xl py-2">
              {content[0]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;
