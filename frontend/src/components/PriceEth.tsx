import axios, { AxiosResponse }  from "axios";
import { useEffect, useState } from "react";
const APIKEY = import.meta.env.VITE_CRYPTO_API_KEY;
import CardDash from '../components/CardDash'
import {FaEthereum } from '../index.icon'


const titlePrice:string = 'ETH Value'
const icon: JSX.Element = <FaEthereum  />

function PriceEth() {
  const [price, setPrice] = useState<string| null>(null);

  const getPrice: () => Promise<void> = async () => {
    try {
      const priceResponse: AxiosResponse<any, any> = await axios.get("https://api.etherscan.io/api", {
        params: {
          module: "stats",
          action: "ethprice",
          apikey: APIKEY,
        },
      });
      const priceEth: any = priceResponse.data.result;
      const ethPriceUsd: number = parseFloat(priceEth.ethusd);
      const formattedPrice: string = ethPriceUsd.toFixed(2);
      const priceTostring: string = formattedPrice.toString()
      setPrice(priceTostring + ' $');
      
    } catch (error) {
      console.log(error, "une erreur est survenue");
    }
  };

  useEffect(() => {
    getPrice();
  },[]);
  console.log(price);
  return (
    <CardDash  data={price} title1={titlePrice} title2={icon}/>
   );
}
export default PriceEth;
