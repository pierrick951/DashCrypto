import { useState, createContext, useContext, ReactNode } from "react";

type ProposalType = {
  proposal: string;
  setProposal: (proposal: string) => void;
};

export const ProposalContext = createContext<ProposalType>({
    proposal : "no proposal",
    setProposal: () => {}
})


export default function ProposalProvider({ children }: { children: ReactNode }) {
    const [proposal, setProposal] = useState<string>("");
  
    return (
      <ProposalContext.Provider value={{ proposal, setProposal }}>
        {children}
      </ProposalContext.Provider>
    );
  }


export const usePropsale = () => useContext(ProposalContext)
