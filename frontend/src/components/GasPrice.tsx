import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import CardDash from "../components/CardDash";
import {AiFillThunderbolt} from '../index.icon'

const APIKEY = import.meta.env.VITE_CRYPTO_API_KEY;


const title:string ='Gas Price '
const icon = <AiFillThunderbolt/>




function GasPrice() {
  const [gasData, setGasData] = useState<string | null>(null);


  const getGasPrice: () => Promise<void> = async () => {
    try {
      const gasResponse: AxiosResponse<any, any> = await axios.get(
        "https://api.etherscan.io/api",
        {
          params: {
            module: "proxy",
            action: "eth_gasPrice",
            apikey: APIKEY,
          },
        }
      );
      const dataGas = gasResponse.data.result;
      const dataTostring = parseInt(dataGas, 16).toString(); 
      
      setGasData(dataTostring);
    } catch (error) {

    }
  };
  useEffect(() => {
    getGasPrice();
  }, []);

  return (
    <CardDash   data={gasData} title1={title} title2={icon}/>
  );
}
export default GasPrice;
