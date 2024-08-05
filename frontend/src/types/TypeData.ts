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




export interface TransactionType { 
  from:string;
  to:string;
  value:string;
  hash:string;
}


export type firebaseConfigType = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}
