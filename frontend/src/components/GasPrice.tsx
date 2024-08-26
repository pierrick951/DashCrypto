import { useEffect, useState } from "react";
import CardDash from "../components/CardDash";
import {AiFillThunderbolt} from '../index.icon'
import { mainnet } from 'viem/chains';
import { createPublicClient, http } from 'viem';
const client = createPublicClient({
  chain: mainnet,
  transport: http(),
});

function GasPrice() {
  const [gasData, setGasData] = useState<string | null>(null);
  const title:string ='Gas Price '
  const icon = <AiFillThunderbolt/>
  

  useEffect(() => {
    async function fetchGasCost(){
      try {
        const gasCost = await client.getGasPrice();
        const gasTostring = gasCost.toString()
        setGasData(gasTostring)
      } catch (error) {
        console.error('Erreur lors de la récupération du cout du gas', error);
      }
    }

    fetchGasCost()
  }, []);

  return (
    <CardDash   data={gasData} title1={title} title2={icon}/>
  );
}
export default GasPrice;
