import { useEffect, useState } from "react";
import CardDash from "../components/CardDash";
import {AiFillThunderbolt} from '../index.icon'
import client from '../viemInit'

function GasPrice() {
  const [gasData, setGasData] = useState<string | null>(null);
  const title:string ='Gas Price '
  const icon: JSX.Element = <AiFillThunderbolt/>
  

  useEffect(() => {
    async function fetchGasCost(){
      try {
        const gasCost: bigint = await client.getGasPrice();
        const gasTostring:string = gasCost.toString()
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
