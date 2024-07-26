import axios from "axios";
import { useEffect, useState } from "react";
import { FaBox } from "../index.icon.ts";
const APIKEY = import.meta.env.VITE_CRYPTO_API_KEY;

const Supply = () => {
  const [suply, setSuply] = useState<string | null>(null);
  const titleSuplly: (string | JSX.Element)[] = ["ETH Supply", <FaBox />];
  const getSuplly: () => Promise<void> = async () => {
    try {
      const supplyResponse = await axios.get("https://api.etherscan.io/api", {
        params: {
          apikey: APIKEY,
          module: "stats",
          action: "ethsupply",
        },
      });
      const response = supplyResponse.data;

      if (response.status === "1") {
        const wei: bigint = BigInt(response.result);
        const eth: bigint = wei / BigInt(10 ** 18);

        const formattedSupply: string = new Intl.NumberFormat().format(
          Number(eth)
        );
        setSuply(formattedSupply);
      } else {
        console.error("une erreur est survenue");
      }

      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    getSuplly();
  }, []);

  return (
    <div className="bg-white rounded-xl p-4 max-w-xs mt-16 shadow-2xl mx-5">
      <h2 className="flex flex-row font-semibold  text-slate-800 items-center  justify-between gap-2 py-2">
        <span>{titleSuplly[0]}</span>
        <span>{titleSuplly[1]}</span>
      </h2>
      <p className="text-xl font-semibold text-green-500">
        {suply ? `${suply} ETH` : "Loading..."}
      </p>
    </div>
  );
};
export default Supply;
