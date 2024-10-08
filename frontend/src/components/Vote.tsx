import { toast } from "sonner";
import { useMeta } from "../context/ContextMetamask";
import { ethers } from "ethers";
import { useState  } from "react";

const content: string[] = ["Vote", "Set Vote", "Nbm of votes "];

const CONTRACT_ADDRESS = "0x5Da5E19db8b47f0427e9497260b637eb77aF563B";

const CONTRACT_ABI = [
  {
    inputs: [{ name: "_Adressproposal", type: "address" }],
    name: "setVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ name: "_user", type: "address" }],
    name: "getUserProposal",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumberVote",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
];

function Vote() {
  const { user, provider, signer } = useMeta();

  const getContract = () => {
    if (!provider || !signer) {
      throw new Error("Wallet not connected");
    }

    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  };

  const [countVote, SetCountVote] = useState<number>(0);
  const [proposalAddress, setProposalAddress] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProposalAddress(e.target.value);
  };

  const getNumberVote = async () => {
    try {
      const contract = getContract();
      const numberVote = await contract.getNumberVote();
      SetCountVote(numberVote.toNumber());
    } catch (error) {
      toast.error("Impossible de récupérer le nombre de votes");
    }
    };


  const handleVote = async () => {
    if (!user) {
      toast.error("Connect your wallet");
      return;
    }

    if (!ethers.isAddress(proposalAddress)) {
      toast.error("invalid address");
      return;
    }

    try {
      const contract = getContract();
      const tx = await contract.setVote(proposalAddress);
      await tx.wait();
      toast.success("Vote succes");
      getNumberVote();
    } catch (error) {
      toast.error("You have already vote ");
    }
  };

  return (
    <div className="mt-8">
      <h1 className="text-xl text-gray-100 font-bold  text-center lg:text-start">
        {content[0]}
      </h1>
      <h2 className="py-2 flex justify-between">
        <span className="text-md text-zinc-700  font-semibold">
          {content[2]}
        </span>

        <span className="text-md text-zinc-700  font-semibold">
          {countVote}
        </span>
      </h2>
      <div className="py-2 flex flex-col">
        <label htmlFor="vote"></label>
        <input
          value={proposalAddress}
          onChange={handleInputChange}
          required
          className="-full p-2 text-white font-semibold border-none bg-transparent text-lg focus:outline-none rounded"
          type="text"
          id="vote"
          name="vote"
          placeholder="Enter Address"
        />
        <button
          onClick={handleVote}
          className="rounded bg-lime-700 hover:bg-lime-600 text-white font-semibold text-lg   py-2 mt-8"
        >
          {content[1]}
        </button>
        <button
          onClick={getNumberVote}
          className="rounded bg-lime-900 hover:bg-lime-600 text-white font-semibold text-lg   py-2 mt-8"
        >
          {content[2]}
        </button>
      </div>
    </div>
  );
}
export default Vote;
