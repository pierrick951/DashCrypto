import Web3 from "web3";
import { Toaster, toast } from "sonner";
import { useState } from "react";

import WalletLeft from "../components/WalletLeft";
import WalletRigth from "../components/WalletRigth";


type Props = {};

function Wallet({}: Props) {
  const [account, setAccount] = useState<string | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [walletConected, setWalletConected] = useState<boolean>(false);
  const [balance, setBalance] = useState<{ ether: string } | undefined>(
    undefined
  );

  const handleLogIn = () => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum as any);
      setWeb3(web3Instance);

      if (window.ethereum.request) {
        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts: string[]) => {
            setAccount(accounts[0].slice(0, 6));
            setWalletConected(true);
            toast.success("Successful Connection");
            if (web3Instance) {
              return web3Instance.eth.getBalance(accounts[0]);
            }
            return null;
          })
          .then((balance) => {
            if (balance && web3) {
              const etherBalance = web3.utils.fromWei(balance, "ether");
              setBalance({ ether: etherBalance });
              console.log("Ether Balance:", etherBalance);
            }
          })
          .catch((error) => {
            toast.error(`Connection failed",${error.message}`);
          });
      } else {
        toast.error("MetaMask ne prend pas en charge 'eth_requestAccounts'");
      }
    } else {
      toast.error("MetaMask n'est pas installé");
    }
  };
  console.log(balance);
  const handleLogout: () => void = () => {
    if (walletConected) {
      setWalletConected(false);
      setAccount(null);
      setBalance(undefined);
      toast.info("Disconnected");
    } else {
    }
  };

  return (
    <div className="w-full h-auto min-h-screen  bg-zinc-800 p-3 flex items-center justify-center">
      <Toaster position="bottom-right" richColors />
      {walletConected ? (
        <WalletRigth event={()=> handleLogout()} account={account}/>
      ) : (
        <WalletLeft  event={() => handleLogIn()} />
      )}
    </div>
  );
}
export default Wallet;
