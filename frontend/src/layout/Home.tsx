import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import {SiSolana,PiCurrencyBtcFill,FaEthereum,SiLitecoin } from '../index.icon'
import axios from "axios";

const API_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,solana&vs_currencies=usd';
const titleHome:string[] = [
  'CryptoDash',
  'Real-Time Crypto Insights and Management 📉',
  '🪙'
]

type Props = {}
function Home({}: Props) {
   const settingCard = [
    {id:nanoid(),text:'ETH',ico:<FaEthereum />},
    {id:nanoid(),text:'BTC',ico:<PiCurrencyBtcFill/>},
    {id:nanoid(),text:'LTC',ico:<SiLitecoin/>},
    {id:nanoid(),text:'SOL',ico:<SiSolana/>},
   ]
  const [data, setData] = useState([]);

  const getResults: () => Promise<void> = async () => {
    try {
      const response = await axios.get(API_URL, {
    
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  console.log(data)

  useEffect(() => {
    getResults();
  }, []);
  return (
    <div className="w-full h-screen flex flex-col overflow-auto  p-3 overflow-x-hidden bg-gradient-to-tl from-blue-800 to-blue-700 pl-[26%] xl:pl-[15%] pt-16">
      <header className="text-center flex flex-col justify-center items-center">
        <h1 className="py-5 text-4xl md:text-4xl lg:text-6xl flex-row flex text-white font-bold text-center">
          <span>{titleHome[0]}</span>
          <span className="hidden md:block">{titleHome[2]}</span>
          </h1>
        <p className="text-gray-300 px-3 text-xs lg:text-lg">{titleHome[1]}</p>
      </header>
      <main className="flex flex-col lg:flex-row  w-full h-auto justify-around p-5
       ">
         {settingCard.map((item)=>(
          <div key={item.id}
          className="  bg-white rounded-xl p-5 my-2">
               <div>
                <span>{item.ico}</span>
                <span>{item.text}</span>
               </div>
          </div>
         ))}
      </main>
    </div>
  )
}
export default Home