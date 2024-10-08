import { toast } from "sonner";
import { useMeta } from "../context/ContextMetamask";
import { ethers } from "ethers";
import { useState } from "react";
import { handleChangeType } from "../types/TypeContract";

const content: string[] = ["Stack", "Start Stacking"];
const CONTRACT_ADDRESS = "0x0f4AC7ae9be2421F4AEF7Eb3dF7925aab39B563d";
const CONTRACT_ABI = [
  {
    inputs: [{ name: "_amountStaked", type: "uint256" }],
    name: "stackTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getStakeInfo",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "bool", name: "", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
];

function Stake() {
  const { user, provider, signer } = useMeta();
  const [stake, setStake] = useState<number>();
  const handleChange: handleChangeType = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStake(Number(e.target.value));
  };

  const getContract = () => {
    if (!provider || !signer) {
      throw new Error("Wallet not connected");
    }

    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  };

  const handleClick: (stake : number) => Promise<void> = async (stake) => {
    if (user) {
      const contract = getContract();
      try {
      
        const tx = contract.stackTokens(stake);
        // await tx.wait();
        
      } catch (error) {
        toast.error(`somethings goes wrong`);
      }
    } else {
      toast.error("Conect your wallet");
    }
  };
  return (
    <div className="mt-8">
      <h1 className="text-xl text-gray-100 font-bold  text-center lg:text-start">
        {content[0]}
      </h1>
      <div className="py-2 flex flex-col">
        <label htmlFor="token-amount"></label>
        <input
          onChange={handleChange}
          value={stake}
          required
          className="  w-full p-2 text-white font-semibold border-none bg-transparent text-xl focus:outline-none rounded"
          type="number"
          id="token-amount"
          name="token-amount"
          min="1"
          placeholder="0.0"
        />
        <button
          onClick={handleClick}
          className="rounded bg-lime-700 hover:bg-lime-600 text-white font-semibold text-lg   py-2 mt-8"
        >
          {content[1]}
        </button>
      </div>
    </div>
  );
}
export default Stake;
