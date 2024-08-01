import { createContext } from "react";

interface balanceType { 
    balance:string,
}

export const BalanceContext = createContext<balanceType>({
    balance:''
})