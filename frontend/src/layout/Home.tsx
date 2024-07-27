import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { SiSolana, PiCurrencyBtcFill, FaEthereum, SiLitecoin } from '../index.icon';
import { SettingCardType, CryptoPrices } from '../types/TypeData';
import axios from "axios"

const API_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,solana&vs_currencies=usd';
const titleHome = [
  'CryptoDash',
  'Real-Time Crypto Insights and Management 📉',
  '🪙'
];

function Home() {
  
  const settingCard: SettingCardType[] = [
    { id: nanoid(), text: 'ETH', ico: <FaEthereum />, key: 'ethereum' },
    { id: nanoid(), text: 'BTC', ico: <PiCurrencyBtcFill />, key: 'bitcoin' },
    { id: nanoid(), text: 'LTC', ico: <SiLitecoin />, key: 'litecoin' },
    { id: nanoid(), text: 'SOL', ico: <SiSolana />, key: 'solana' },
  ];

  const [data, setData] = useState<CryptoPrices | null>(null);

  const getResults = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col lg:justify-center lg:items-center overflow-auto p-3 overflow-x-hidden bg-gradient-to-tl from-zinc-800 to-blue-700 ">
      <header className="text-center flex flex-col justify-center items-center">
        <h1 className="py-5 text-4xl md:text-4xl lg:text-6xl flex-row flex text-white font-bold text-center">
          <span>{titleHome[0]}</span>
          <span className="hidden md:block">{titleHome[2]}</span>
        </h1>
        <p className="text-gray-300 px-3 text-xs lg:text-lg">{titleHome[1]}</p>
      </header>
      <main className=" w-full h-auto  p-5 flex justify-center items-center">
        <div className="grid-cols-1 grid md:grid-cols-2 gap-3 lg:grid-cols-4">
          {settingCard.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-2xl md:w-40 p-5 my-2 font-bold text-slate-800 ">
              <div className="flex flex-col items-center justify-center w-full ">
                <span className="text-3xl text-slate-800">{item.ico}</span>
                <span>{item.text}</span>
              </div>
              <div className="text-center">
                <p className="text-lime-600 font-bold animate-pulse text-xl">{data ? `${data[item.key].usd} $` : 'Loading...'}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
