import { toast } from "sonner";
import { useMeta } from "../context/ContextMetamask";
type Props = {};
const contentLoan: string[] = [
  "Get Liquidity",
  "Instantly",
  "Access instant liquidity with flash loans in just a few clicks. 👛",
  "Amount you want",
  "Get Loan",
];

export default function Loan({}: Props) {
  const { user } = useMeta();

  const handleClick = async () => {
    if (user) {
      try {
        toast.success("Succes ✨");
      } catch (error) {
        toast.error("Something goes wrong");
      }
    } else {
      toast.info("Please connect your wallet");
    }

    console.log("salut");
  };
  return (
    <div className="bg-gradient-to-tl from-zinc-950 to-zinc-800 min-h-screen h-auto flex  flex-col items-center  p-5">
      <div className=" flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl text-white font-bold py-2 flex flex-col md:flex-row gap-2 justify-center ">
          {contentLoan[0]}
          <span className="bg-lime-700/80 px-2 rounded animate-pulse">
            {contentLoan[1]}
          </span>
        </h1>
        <p className="text-lg pb-5 text-white font-semibold">
          {contentLoan[2]}
        </p>
      </div>
      <div className="bg-gradient-to-tr from-white to-gray-100 rounded p-4 w-auto max-w-2xl h-30 shadow-zinc-900 shadow-2xl">
        <div className="flex flex-col text-center ">
          <label
            htmlFor="token-amount"
            className="text-md font-bold  text-lime-600 capitalize py-4"
          >
            {contentLoan[3]}
          </label>
          <input
            required
            className="  w-full lg:max-w-52 my-2 p-2 border-zinc-900 border-2 font-semibold text-zinc-800 rounded"
            type="number"
            id="token-amount"
            name="token-amount"
            min="1"
            placeholder="Quantity"
          />

          <button
            className="w-full bg-lime-500 hover:bg-lime-600 rounded text-white font-bold p-2"
            onClick={handleClick}
          >
            {contentLoan[4]}
          </button>
        </div>
      </div>
    </div>
  );
}
