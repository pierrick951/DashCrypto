import Web3 from "web3";
import { Toaster, toast } from "sonner";
import { BalanceContext } from "../context/ContextBal";
import { valueBalanceType } from '../types/TypeContent';
import { useState } from "react";
import { Ethereum } from "../types/TypeData";
import WalletLeft from "../components/WalletLeft";
import WalletRigth from "../components/WalletRigth";

type Props = {};

function Wallet({}: Props) {
  const [account, setAccount] = useState<string | null>(null);
  const [walletConected, setWalletConnected] = useState<boolean>(false);

  const [balance, setBalance] = useState<string>("");

  const valueBalance: valueBalanceType = {
    balance: balance,
  };

  const handleLogIn = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum as Ethereum);

        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          const account = accounts[0];
          setAccount(`${account.slice(0, 6)}...${account.slice(-4)}`);
          setWalletConnected(true);

          const balanceWei = await web3.eth.getBalance(account);
          setBalance(web3.utils.fromWei(balanceWei, "ether"));

          toast.success("Successful Connection");
        } else {
          toast.error("No accounts found");
        }
      } catch (error) {
        console.error(error);
        toast.error("Connection failed");
      }
    } else {
      toast.error("MetaMask n'est pas installé");
    }
  };

  const handleLogout: () => void = async () => {
    if (walletConected) {
      setWalletConnected(false);
      setAccount(null);
      setBalance("");
      toast.info("Disconnected");
    } else {
    }
  };

  return (
    <BalanceContext.Provider  value={valueBalance}>
      <div className="w-full h-auto min-h-screen  bg-zinc-800 p-3 flex items-center justify-center">
        <Toaster position="bottom-right" richColors />
        {walletConected ? (
          <WalletRigth
            event={() => handleLogout()}
            account={account}
            balance={balance}
          />
        ) : (
          <WalletLeft event={() => handleLogIn()} />
        )}
      </div>
    </BalanceContext.Provider>
  );
}
export default Wallet;
