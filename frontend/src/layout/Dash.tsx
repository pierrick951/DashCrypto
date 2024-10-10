import { useState, useEffect } from "react";
import { useMeta } from "../context/ContextMetamask";
import { ethers } from "ethers";
import BlockEth from "../components/BlockEth";
import GasPrice from "../components/GasPrice";
import PriceEth from "../components/PriceEth";
import Supply from "../components/Supply";
import Coin from "../components/Coin";
import { toast } from "sonner";

const content: string[] = ["Buy", "Eth Stats"];
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const CONTRACT_ABI = [
  {
    inputs: [{ name: "_amountToken", type: "uint256" }],
    name: "buyToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];

function Dash() {
  const { user, signer } = useMeta();
  const [amountToken, setAmount] = useState(0);

  const getContract = () => {
    
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };
  useEffect(() => {
    const contract: ethers.Contract = getContract();

    contract.on("TokenPurchased", (buyer, amount) => {
      toast.success(`Success! Address ${buyer} bought ${amount} tokens.`);
    });

    return () => {
      contract.removeAllListeners("TokenPurchased");
    };
  }, []);


  //function d'achat de token
  const handleBuyToken: (amountToken: number) => {} = async (amountToken) => {
    if (user) {
      const contract = getContract();

      try {
        
        if (amountToken <= 0) {
          return toast.error("Please choose a quantity higher than zero");
        }

        const tokenPrice = 0.01;
        const totalCostInEther = tokenPrice * amountToken;
        const totalPrice = ethers.parseEther(totalCostInEther.toString())

        const tx = await contract.buyToken(amountToken, { value:  totalPrice});
        await tx.wait();

      } catch (error: unknown) {

        if (error === "INSUFFICIENT_FUNDS") {
          toast.error(`Insufficient funds to complete the transaction`);
        } else if (error === "UNPREDICTABLE_GAS_LIMIT") {
          toast.error(
            `Transaction failed. There might be an issue with the contract`
          );
        } else {
          toast.error(`Transaction failed: ${error}`);
        }
      }
    } else if (!user) {
      toast.info("Please connect your wallet");
    }
  };

  return (
    <div className="w-full h-auto min-h-screen bg-gradient-to-tl from-zinc-900 to-zinc-800  p-2 md:p-5  flex justify-center">
      <div className="flex  flex-col  items-center gap-5">
        <div className="flex flex-col justify-center  bg-gradient-to-tr from-zinc-950 to-zinc-900 p-4 rounded w-full gap-2">
          <h2 className="text-lime-500 font-semibold text-2xl text-center lg:text-start ">
            {content[1]}
          </h2>
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
                value={amountToken}
                onChange={handleChange}
                required
                className="  w-full p-2 text-white font-semibold border-none bg-transparent text-xl focus:outline-none rounded"
                type="number"
                id="token-amount"
                name="token-amount"
                min="1"
                placeholder="0.0"
              />
              <p className="text-white mb-2"></p>
            </div>
            <button
              onClick={() => handleBuyToken(amountToken)}
              className="rounded bg-lime-500 hover:bg-lime-600 text-white font-semibold text-xl py-2"
            >
              {content[0]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;
