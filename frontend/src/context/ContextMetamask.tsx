import { useState, createContext, useContext, ReactNode } from "react";
import { toast } from "sonner";
import { ethers } from "ethers";

type logMetamaskType = {
  user: string | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  provider: ethers.BrowserProvider | null;
  signer: ethers.Signer | null;
};

export const MetamaskContext = createContext<logMetamaskType>({
  user: null,
  login: async () => {},
  logout: async () => {},
  provider: null,
  signer: null,
});

export default function MetaProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);

  const login = async () => {
    try {
      const { ethereum }: any = window as any;

      if (!ethereum) {
        toast.error("Wallet not detected");
        return;
      }

      const accounts: any = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account: any = accounts[0];
      const hacAccount: string = `${account.slice(0, 4)}...${account.slice(
        -4
      )}`;
      setUser(hacAccount);

      const web3Provider = new ethers.BrowserProvider(ethereum);
      setProvider(web3Provider);
      const userSigner =  await web3Provider.getSigner();
      setSigner(userSigner);

      toast.success(" Wallet Connected");
    } catch (error) {
      toast.error("Failed to connect Wallet");
    }
  };

  const logout = async () => {
    setUser(null);
    setProvider(null);
    setSigner(null);
    toast.info("Disconnected");
  };

  return (
    <MetamaskContext.Provider value={{ user, login, logout, provider, signer }}>
      {children}
    </MetamaskContext.Provider>
  );
}

export const useMeta = () => useContext(MetamaskContext);
