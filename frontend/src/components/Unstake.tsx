import { toast } from "sonner";
import { useMeta } from "../context/ContextMetamask";
import { BiCoin } from "../index.icon";
import { ethers } from "ethers";
const content: string[] = [
  "Unstack",
  "Stop stacking",
  "Claim",
  "Current Stack",
];

const CONTRACT_ADDRESS = "";

const CONTRACT_ABI = [
  {
    inputs: [],
    name: "unStack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

function Unstake() {
  const { user, provider, signer } = useMeta();
  const ico: JSX.Element = <BiCoin />;

  const getContract: () => ethers.Contract = () => {
    if (!provider || !signer) {
      toast.error("Wallet not connected");
    }

    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  };



  const handleClick: () => Promise<void> = async () => {
    if (user) {
      getContract()
      try {
      } catch (error) {}
    } else {
      toast.error("Conect your wallet");
    }
  };

  return (
    <div className=" w-full ">
      <h1 className="text-xl text-gray-100 font-bold py-4 text-center lg:text-start">
        {content[0]}
      </h1>

      <h2 className="flex flex-row justify-between py-3">
        <span className="text-sm text-zinc-700  font-semibold">
          {content[3]}
        </span>
        {/* valeur statique pour la forme */}
        <span className="font-mono font-bold  text-zinc-700">0.0</span>
      </h2>
      <div className="py-2 flex flex-col  mx-auto">
        <button className="rounded bg-lime-600 hover:bg-lime-700 text-white font-semibold text-lg flex flex-row items-center justify-center gap-2  py-2 my-2">
          <span>{content[2]}</span>
          <span>{ico}</span>
        </button>
        <button
          onClick={handleClick}
          className="rounded bg-red-700 hover:bg-red-600 text-white font-semibold text-lg   py-2 "
        >
          {content[1]}
        </button>
      </div>
    </div>
  );
}
export default Unstake;
