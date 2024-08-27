import { useState,createContext,useContext,ReactNode} from 'react';
import client from '../viemInit';
import { toast } from "sonner";


type logMetamaskType = {
    user: string | null;
    balance: bigint| null;
    login:() => Promise<void>;
    logout:() => Promise<void>;

}


export const MetamaskContext = createContext<logMetamaskType>({
    user: null,
    balance: null,
    login: async () => {},
  logout: async () => {},
});


export default function  MetaProvider({children}: { children: ReactNode }) {
    const [balance,setBalance] = useState<bigint | null>(null)
    const [user,setUser]  = useState<string | null>(null)
    
    const login = async () => {

        try {
            const {ethereum}: any = window as any;

            if(!ethereum){
                toast.error('MetaMask is not installed!');
                return;
            }

            const accounts: any =  await ethereum.request({method:'eth_requestAccounts'});
            const account: any = accounts[0];
            const hacAccount: string = `${account.slice(0,4)}...${account.slice(-4)}`;
            setUser(hacAccount);

            const balances  = await client.getBalance({address: account})
            setBalance(balances)

            toast.success('Connected to MetaMask');
        } catch (error) {
            toast.error('Failed to connect to MetaMask');
        }
    }


    const logout = async () => {

        setUser(null);
        setBalance(null);
        toast('Disconnected from MetaMask');
    }
    



    return (

        <MetamaskContext.Provider value={{ user, balance, login, logout }}>
        {children}
        </MetamaskContext.Provider>    )
    }



    export const useMeta = () => useContext(MetamaskContext);
