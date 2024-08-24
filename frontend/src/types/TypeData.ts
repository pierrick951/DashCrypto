export type CryptoPrices = {
  bitcoin: { usd: number };
  ethereum: { usd: number };
  litecoin: { usd: number };
  solana: { usd: number };
};
export type SettingCardType = {
  id: string;
  text: string;
  ico: JSX.Element;
  key: keyof CryptoPrices;
};

export type Ethereum = {
  request: (request: { method: string }) => Promise<any>;
};



export type buttonContentType ={
  text: string;
  image: string;
}[]
