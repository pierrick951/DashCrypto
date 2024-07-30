export interface Ethereum {
    isMetaMask?: boolean;
    request?: (request: { method: string; params?: Array<any> }) => Promise<any>;
    on?: (event: string, handler: (...args: any[]) => void) => void;
    removeListener?: (event: string, handler: (...args: any[]) => void) => void;
  }
  
  declare global {
    interface Window {
      ethereum?: Ethereum;
    }
  }
  