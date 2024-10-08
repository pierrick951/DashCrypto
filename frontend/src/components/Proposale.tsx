import { toast } from "sonner";
import { useMeta } from "../context/ContextMetamask";
import { ethers } from "ethers";
import { useState } from "react";
const content: string[] = ["Proposal", "Set proposal", "Nbm Proposal "];

const CONTRACT_ADDRESS = "0x5Da5E19db8b47f0427e9497260b637eb77aF563B";
const CONTRACT_ABI = [
  {
    inputs: [{ name: "_proposal", type: "string" }],
    name: "setProposale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

function Proposale() {
  const [proposal, setProposal] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProposal(e.target.value);
  };

  const { user, provider, signer } = useMeta();

  const getContract = () => {
    if (!provider || !signer) {
      throw new Error("Wallet not connected");
    }

    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  };

  const handleclick = async () => {
    if (!user) {
      toast.error("Connect your wallet");
      return;
    }

    try {
      const contract = getContract();
      const tx = await contract.setProposale(proposal);
      await tx.wait();
      toast.success("proposale succes");
    } catch (error) {
      toast.error("somethings goes wrong");
    }
  };
  return (
    <div className="mt-8">
      <h1 className="text-xl text-gray-100 font-bold  text-center lg:text-start">
        {content[0]}
      </h1>
      <div className="py-2 flex flex-col">
        <label htmlFor="vote"></label>
        <input
          value={proposal}
          onChange={handleInputChange}
          required
          className="-full p-2 text-white font-semibold border-none bg-transparent text-lg focus:outline-none rounded"
          type="text"
          id="vote"
          name="vote"
          placeholder="Your text here"
        />
        <button
          onClick={handleclick}
          className="rounded bg-lime-700 hover:bg-lime-600 text-white font-semibold text-lg   py-2 mt-8"
        >
          {content[1]}
        </button>
      </div>
    </div>
  );
}
export default Proposale;
