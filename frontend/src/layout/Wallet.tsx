import Web3 from "web3";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import { Button } from "@chakra-ui/react";
import { FaBalanceScale } from "../index.icon";
import PriceEth from "../components/PriceEth";
import CardDash from "../components/CardDash";
import WalletLeft from "../components/WalletLeft";

type Props = {};
const title1: string = "Balance";
const title2: JSX.Element = <FaBalanceScale />;
const contentWallet: string[] = [
  "Log out",
  "Recent Transactions",
  "Sell",
  "Buy",
  "No transactions currently",
];

function Wallet({}: Props) {
  const [account, setAccount] = useState<string | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [walletConected, setWalletConected] = useState<boolean>(false);
  const [balance, setBalance] = useState<string | null>(null);
  


  const handleLogIn = () => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum as any);
      setWeb3(web3Instance);
  
      if (window.ethereum.request) {
        window.ethereum.request({ method: 'eth_requestAccounts' })
          .then((accounts: string[]) => {
            setAccount(accounts[0]);
            setWalletConected(true); 
            if (web3Instance) {
              return web3Instance.eth.getBalance(accounts[0]);
            }
            return null;
          })
          .then(balance => {
            if (balance && web3) {
              const dataBal: string = (web3.utils.fromWei(balance, 'ether'))
              const dataToString: string = dataBal.toString()
              setBalance(dataToString);
            }
          })
          .catch(error => {
            console.error("An error occurred: ", error);
            toast.error("Connection failed");
          });
      } else {
        toast.error("MetaMask ne prend pas en charge 'eth_requestAccounts'");
      }
      toast.success('Successful Connection')
    } else {
      toast.error("MetaMask n'est pas installé");
    }

  }
  
  const handleLogout: () => void = () => {
    if (walletConected) {
      setWalletConected(false);
      setAccount(null);
      setBalance(null);
      toast.info("Disconnected");
    } else {
     
    }
  };
  console.log('ok voici mon topbal',balance)
console.log('le type de balance ',typeof balance)

  return (
    <div className="w-full h-auto min-h-screen  bg-zinc-800 p-3 flex items-center justify-center">
      <Toaster position="bottom-right" richColors />
      {walletConected ? (
        <div className="w-full  min-h-screen flex flex-col lg:flex-row p-3 gap-3 justify-center ">
          <div className="bg-white shadow-xl rounded max-w-2xl  p-4">
            <p>{account}</p>
            <div>
              <h1 className="text-slate-800 text-xl font-medium">
                {contentWallet[1]}
                
              </h1>
              <hr />
              <div>
            
              </div>
            </div>
            <div>
              <Button>{contentWallet[2]}</Button>
              <Button>{contentWallet[3]}</Button>
            </div>
          </div>
          <div className="flex-col flex w-auto lg:max-w-md items-center">
            <PriceEth />
            <CardDash title1={title1} title2={title2} data={balance} />
            <Button
              onClick={() => handleLogout()}
              className=" flex flex-row w-full  gap-2 py-2 px-5"
              colorScheme="blue"
            >
              {contentWallet[0]}
            </Button>
          </div>
        </div>
      ) : (
        <WalletLeft event={() =>handleLogIn()} />
      )}
    </div>
  );
}
export default Wallet;
