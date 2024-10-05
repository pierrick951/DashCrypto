import { toast } from "sonner";
import { useMeta } from "../context/ContextMetamask";

const content: string[] = ["Stack", "Start Stacking"];

function Stake() {
  const { user } = useMeta();

  const handleClick : () => Promise<void> = async () => {
    if (user) {
      try {
      } catch (error) {}
    } else {
      toast.error("Conect your wallet");
    }
  };
  return (
    <div className="mt-8">
      <h1 className="text-xl text-gray-100 font-bold  text-center lg:text-start">{content[0]}</h1>
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
