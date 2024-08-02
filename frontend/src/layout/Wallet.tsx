import Web3 from "web3";
import { Toaster, toast } from "sonner";
import { BalanceContext } from "../context/ContextBal";
import { valueBalanceType } from "../types/TypeContent";
import { TransactionType } from "../types/TypeData";
import { useState } from "react";
import { Ethereum } from "../types/TypeData";
import WalletLeft from "../components/WalletLeft";
import WalletRigth from "../components/WalletRigth";

type Props = {};

function Wallet({}: Props) {
  const [account, setAccount] = useState<string | null>(null);
  const [walletConected, setWalletConnected] = useState<boolean>(false);
  const [transaction, setTransactions] = useState<TransactionType[]>([]);
  const [balance, setBalance] = useState<string>("");

  const valueBalance: valueBalanceType = {
    balance: balance,
  };

  const handleLogIn: () => Promise<void> = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum as Ethereum);

        const accounts: string[] = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          const account: string = accounts[0];
          setAccount(`${account.slice(0, 6)}...${account.slice(-4)}`);
          setWalletConnected(true);

          const balanceWei: bigint = await web3.eth.getBalance(account);
          setBalance(web3.utils.fromWei(balanceWei, "ether"));

          const blockNumber: bigint = await web3.eth.getBlockNumber();
          const txs: TransactionType[] = [];

          for (let i = blockNumber; i >= blockNumber; i--) {
            const block = await web3.eth.getBlock(i, true);

            if (block && block.transactions) {
              block.transactions.forEach((tx:any) => {
                if (tx.from === account[0] || tx.to === account[0]) {
                  txs.push(tx as TransactionType);
                }
              });
            }
          }
          setTransactions(txs);
          toast.success("Successful Connection");
        } else {
          toast.error("No accounts found");
        }
      } catch (error) {
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
    }
  };
 console.log(transaction)
  return (
    <BalanceContext.Provider value={valueBalance}>
      <div className="w-full h-auto min-h-screen  bg-zinc-800 p-3 flex justify-center lg:items-center">
        <Toaster position="bottom-right" richColors />
        {walletConected ? (
          <WalletRigth event={() => handleLogout()} account={account}  transaction={transaction} />
        ) : (
          <WalletLeft event={() => handleLogIn()} />
        )}
      </div>
    </BalanceContext.Provider>
  );
}
export default Wallet;
