import axios, { AxiosResponse }  from "axios";
import { useEffect, useState } from "react";
const APIKEY = import.meta.env.VITE_CRYPTO_API_KEY;
import CardDash from "../components/CardDash";
import { SiCodeblocks } from "../index.icon";

type Props = {};
function BlockEth({}: Props) {
  
  const titlePrice: string = "Current Block";
  const icon:JSX.Element = <SiCodeblocks/>
  const [blockData, setBlockData] = useState<string| null>(null);
  const getBlockData: () => Promise<void> = async () => {
    try {
      const blocResponse: AxiosResponse<any, any> = await axios.get("https://api.etherscan.io/api", {
        params: {
          module: "proxy",
          action: "eth_blockNumber",
          apikey: APIKEY,
        },
      });
      const reponseBloc: any = blocResponse.data.result;
      const decimalValue: number = parseInt(reponseBloc, 16);
      const dataToString: string = decimalValue.toString()
      setBlockData(dataToString);

    
    } catch (error) {
        console.log('une erreur est survenu', error)
    }

  };
  
  useEffect(()=>{
    getBlockData()
},[])



  return (
  <CardDash  data={blockData} title1={titlePrice} title2={icon}/>
 
);
}
export default BlockEth;
