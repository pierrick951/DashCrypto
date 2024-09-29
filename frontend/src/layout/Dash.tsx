import BlockEth from "../components/BlockEth";
import GasPrice from "../components/GasPrice";
import PriceEth from "../components/PriceEth";
import Supply from "../components/Supply";
import Coin from "../components/Coin";
import { useMeta } from "../context/ContextMetamask";
import { toast } from "sonner";

const content: string[] = ["Buy"];
type Props = {};
function Dash({}: Props) {
  const { user } = useMeta();

  const handleclick = async () => {
    if (user) {
      try {
        toast.success("You have buy X token");
      } catch (error) {
        toast.error("somethings goes wrong");
      }
    } else {
      toast.info("plase connect your wallet");
    }
  };
  return (
    <div className="w-full h-auto min-h-screen bg-gradient-to-tl from-zinc-950 to-zinc-800 p-5  flex justify-center">
      <div className="flex  flex-col  items-center gap-5">
        <div className="flex flex-col lg:flex-row  justify-center  w-full gap-2">
          <Supply />
          <PriceEth />
          <BlockEth />
          <GasPrice />
        </div>
        <div className="bg-gradient-to-tr w-full from-white  to-gray-100 rounded p-4 flex flex-col ">
          <div className="py-3 w-full flex justify-center">
            <Coin />
          </div>
          <div className="py-2 flex lg:flex-row flex-col items-center justify-">
            <label htmlFor="token-amount"></label>
            <input
            required
              className="  w-full lg:max-w-52 p-2 border-zinc-900 border-2 font-semibold text-zinc-800 rounded"
              type="number"
              id="token-amount"
              name="token-amount"
              min="1"
              placeholder="Amount"
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
  );
}

export default Dash;
