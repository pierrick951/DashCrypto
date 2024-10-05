import axios,{AxiosResponse} from "axios";
import { useEffect, useState } from "react";
import { FaBox } from "../index.icon.ts";
import CardDash from '../components/CardDash.tsx'
const APIKEY = import.meta.env.VITE_CRYPTO_API_KEY;

const Supply = () => {
  const [suply, setSuply] = useState<string | null>(null);
  const titleSuplly:string ="Supply";
  const icon: JSX.Element = <FaBox />
  const getSuplly: () => Promise<void> = async () => {
    try {
      const supplyResponse:AxiosResponse<any, any> = await axios.get("https://api.etherscan.io/api", {
        params: {
          apikey: APIKEY,
          module: "stats",
          action: "ethsupply",
        },
      });
      const response: any = supplyResponse.data;

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

      
    } catch (error) {

        console.log(error,'une erreurest survenue')
    }
  };

  useEffect(() => {
    getSuplly();
  }, []);

  return (
   <CardDash  data={suply} title1={titleSuplly} title2={icon}/>
  );
};
export default Supply;
