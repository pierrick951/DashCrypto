import { toast } from "sonner";
import { useMeta } from "../context/ContextMetamask";
// import { useState } from "react";
const content: string[] = ["Proposal", "Set proposal", "Nbm Proposal "];

function Proposale() {
  const { user } = useMeta();

  // const [countVote, SetCountVote] = useState<Number>(0);
 
  

  const handleclick = () => {
    if (user) {
      try {
      } catch (error) {}
    } else {
      toast.error("Connect Your Wallet");
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
        0
        </span>
      </h2>
      <div className="py-2 flex flex-col">
        <label htmlFor="vote"></label>
        <input
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
