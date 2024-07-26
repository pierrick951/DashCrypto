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

